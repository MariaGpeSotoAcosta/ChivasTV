import express from 'express';
import mysql from 'mysql'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'

const salt = 10;
const app = express();
app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["POST","GET"],
    credentials:true
}));
app.use(cookieParser());

const db = mysql.createConnection({
    host:"-",
    user:"chivas",
    password:"-",
    database:"-"

})

const verifyUser = (req,res,next)=> {
    const token= req.cookies.token;
    if(!token){
        return res.json({Error:"You are not authenticated"});
    }else{
        jwt.verify(token,"-",(err,decoded)=>{
            if(err){

                return res.json({Error:"Token is not okey "});
            } else{
                req.name = decoded.name;
                next();
            }

        })
    }
}

app.get('/', verifyUser, (req, res) => {
    return res.json({ Status: 'DONE!', name: req.name });
  });
  


app.post('/registro', async (req, res) => {
    const sqlUser = `INSERT INTO Usuario (nombre, email, contraseña,idioma) VALUES (?)`;
    const sqlRegular = `INSERT INTO Regular 
      (usuarioID, cumpleaños, telefono, pais, estado)
      VALUES (?, ?, ?, ?, ?)`;
  
    bcrypt.hash(req.body.contraseña.toString(), salt, (err, hash) => {
      if (err) return res.json({ Error: "Error hashing password" });
  
      db.query(sqlUser, [[req.body.nombre, req.body.email, hash, req.body.idioma]], (err, result) => {
        if (err) {
          console.error("Error inserting into Usuario:", err);
          return res.json({ Error: "Error inserting into Usuario" });
        }
        const insertedUserId = result.insertId;
  
        db.query(sqlRegular, [
          insertedUserId,
          req.body.cumpleaños,
          req.body.telefono,
          req.body.pais,
          req.body.estado
        ], (err2, result2) => {
          if (err2) {
            console.error("Error inserting into UsuarioRegular:", err2);
            return res.json({ Error: "Error inserting into UsuarioRegular" });
          }
  
          return res.json({ Status: "DONE!" });
        });
      });
    });
  });
  

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({ Status: 'Success',name: req.name });
  });
  



  app.post('/iniciarsesion', (req,res) => {
    const sql = 'SELECT * FROM Usuario WHERE email = ?';
    db.query(sql,[req.body.email],(err,data)=>{
        if(err) return res.json({Error:"Login error in server"});
        if(data.length>0){
            bcrypt.compare(req.body.contraseña.toString(),data[0].contraseña,(err,response)=>{
              if(err) return res.json({Error:"Password compare error"});
              if (response){
                const name = data[0].nombre;
                const token = jwt.sign({name},"-",{expiresIn: '1d'});
                res.cookie('token', token);
                return res.json({Status:"DONE!"});
              }
              else{
                return res.json({Error:"Password not matched"})
              }
            })
        }else {
            return res.json({Error: "No email existed"});
        }
    })

})



app.listen(3000,() => {
    console.log("running...")
})
