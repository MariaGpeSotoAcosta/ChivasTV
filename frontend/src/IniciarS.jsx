import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import viteLogo from './assets/logochivas.png'
import Fondo from './assets/iniciarSesionFondo.png'
import axios from 'axios'
import './index.css'
import {Link} from 'react-router-dom'
function App() {
  
  const navigate = useNavigate();
  const [values,setValues] = useState({
      email:'',
      contraseña:''
  })
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) =>{
      event.preventDefault();
      axios.post('http://localhost:3000/iniciarsesion', values)
      .then(res =>{
          if(res.data.Status== "DONE!"){
            navigate('/inicio-user')
          } else{
              alert("Error"); 
          }

      })
      .then(err => console.log(err));

  }

  return (
    <div className="relative min-h-screen overflow-hidden  ">
          <img className="fixed -z-20 bg-[#05022E] w-[1350.50px] h-[800.88px] right-[230px] pointer-events-none" src= {Fondo} alt="background"   />
          <div
            className="fixed pointer-events-none -top-[200px] left-[1060px] w-[1200px] h-[1550px] -z-20 rotate-[8.85deg] origin-top-left bg-gradient-to-b from-[#05022E] via-[#450a0a] to-[#dc2626]"
          />
          <div className="fixed pointer-events-none -top-[200px] left-[1060px] w-[1200px] h-[1550px] -z-20 rotate-[8.85deg] origin-top-left bg-gradient-to-b from-[#05022E] via-[#450a0a] to-[#dc2626]" />

      <div className="app-container relative top-[160px] left-[490px]">
        <div className="text-center">
          <a target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo mx-auto w-30" alt="Vite logo" />
          </a>
        </div>
        <h1 className="text-4xl font-bold text-center my-6 text-white">Iniciar Sesión</h1>   
        <div className="card max-w-sm mx-auto  p-6 rounded-lg">
        <form onSubmit = {handleSubmit}>
        <div className = ''>
                <label htmlFor= 
                "email"
                  className="block text-sm font-normal text-white mb-1"
                  >
                    Correo electrónico
                </label>

                <input type="email" placeholder='Correo electrónico' name = 'email'
                onChange={e => setValues({...values,email:e.target.value})} className = 'rounded bg-white w-full py-2 px-4'/>
                
            </div>

            <div className = 'mt-3'>
                <label htmlFor= "contraseña" className="block text-sm font-normal text-white mb-1">
                    Contraseña
                </label>
                <input type="password" placeholder='Contraseña' name = 'contraseña'
                onChange={e => setValues({...values,contraseña:e.target.value})} className = 'rounded bg-white w-full py-2 px-4'/>
                
            </div>

            <button 
            className="back-button mt-3 w-full py-2 px-4 bg-[#2C2C2C] hover:bg-gray-700 text-white rounded transition-colors"
          >
            Continuar
          </button>

          </form>


          <p className="text-center mt-4 text-blue-900/90">
            ¿No tienes cuenta? |{" "}
            <Link to="/registro" className="underline hover:text-blue-800">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;