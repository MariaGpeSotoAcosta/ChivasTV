import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from './Hero'
import CarouselC from './carouselC'
import CarouselC2 from './carouselC2'
import Hero2 from './Hero2'
import CarouselC3 from './carouselC3'
import CarouselC4 from './carouselC4'
import CarouselC5 from './CarouselC5';

import './index.css'
import {Link} from 'react-router-dom'
import axios from 'axios'


function App() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [auth,setAuth] = useState(false);
  const [message,setMessage] = useState('')
  const [nombre,setName]= useState('')

  const handleLogout = () => {
    axios.get('http://localhost:3000/logout')
      .then(res => {
        if (res.data.Status === "Success") {
          navigate('/');
        } else {
          alert("Error al cerrar sesión");
        }
      })
      .catch(err => console.log(err));
  };
  


  useEffect(()=>{
    axios.get('http://localhost:3000')
    .then(res =>{

          if(res.data.Status=== "DONE!"){
            setAuth(true)
            setName(res.data.nombre)
            navigate('/inicio-user')
          } else{
                setAuth(false)
                setMessage(res.data.Error)
                alert("Error")
          }

        })
      .then(err => console.log(err));
    
},[]);



  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {auth ? (
        <div className="app-container relative top-[50px]">
          {/* Sección original */}
          <Hero />
          <div className="bg-black h-[30px]" />
          <CarouselC /> {/* El Podcast */}
          <div className="bg-black h-[5px]" />
          <CarouselC2 /> {/* Chivas Femenil */}
          <div className="bg-black h-[5px]" />
          <Hero2 /> {/* Contenido Nuevo */}
          <div className="bg-black h-[5px]" />
          <CarouselC3 /> {/* Chivas Varonil */}
          <div className="bg-black h-[5px]" />
          <CarouselC5 /> {/* Roomies el Podcast */}
          <div className="bg-black h-[60px]" />
          <CarouselC4 /> {/* Partidos Pasados */}
          <div className="bg-black h-[5px]" />
        </div>
      ) : (
        <div className="mt-[300px] text-center text-white">
          {message}
          <br />
          <Link to="/iniciarsesion" className="text-blue-500 underline">Iniciar sesión</Link>
        </div>
      )}
    </div>
  );
}

export default App;