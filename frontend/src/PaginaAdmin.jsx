import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from './Hero'
import CarouselC from './carouselC'
import './index.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function AdminApp() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('')
  const [nombre, setName] = useState('')

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

  useEffect(() => {
    axios.get('http://localhost:3000')
      .then(res => {
        if (res.data.Status === "DONE!") {
          setAuth(true);
          setName(res.data.nombre);
          navigate('/inicio-admin');
        } else {
          setAuth(false);
          setMessage(res.data.Error);
          alert("Error");
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {
        auth ?
          <div>
            <div className="app-container relative top-[60px]">
              <Hero />
              <div className="bg-black h-[30px]"></div>
              <CarouselC />
            </div>
            <div className="bg-white h-[60px]"></div>

            {/* Botón de Logout para admin */}
            <div className="fixed bottom-5 right-5">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          </div>
          :
          <div className='mt-[300px]'>
            {message}
            <Link to='/iniciarsesion'>Login</Link>
          </div>
      }
    </div>
  );
}

export default AdminApp;
