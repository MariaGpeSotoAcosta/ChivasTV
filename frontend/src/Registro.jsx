import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import viteLogo from './assets/logochivas.png'
import Fondo from './assets/chivas1fondo.png'
import axios from 'axios'
import './index.css'
import Fondo2 from './assets/chivas3.jpg'

function App() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    idioma: '',
    cumpleaños: '',
    telefono: '',
    pais: '',
    estado: '',
    genero: ''
  })

  const [showPopup, setShowPopup] = useState(false);

  // Lista países y estados
  const paises = [
    { nombre: 'México', estados: ['Ciudad de México', 'Jalisco', 'Nuevo León', 'Puebla', 'Yucatán'] },
    { nombre: 'Argentina', estados: ['Buenos Aires', 'Córdoba', 'Santa Fe'] },
    { nombre: 'Brasil', estados: ['São Paulo', 'Rio de Janeiro', 'Bahia'] },
    { nombre: 'España', estados: ['Madrid', 'Cataluña', 'Andalucía'] },
    { nombre: 'Estados Unidos', estados: ['California', 'Texas', 'Florida'] }
  ];

  const estados = values.pais ? paises.find(p => p.nombre === values.pais)?.estados : [];

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <img className="fixed -z-20 bg-[#05022E] w-[1653.50px] h-[1106.88px] right-[230px] pointer-events-none" src={Fondo} alt="background" />
      <div
        className="fixed pointer-events-none -top-[200px] left-[1060px] w-[1200px] h-[1550px] -z-20 rotate-[8.85deg] origin-top-left bg-gradient-to-b from-[#05022E] via-[#450a0a] to-[#dc2626]"
      />

      <div className="app-container relative top-[80px] left-[490px]">
        <div className="text-center">
          <a target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo mx-auto w-40" alt="Vite logo" />
          </a>
        </div>

        <h1 className="text-4xl font-bold text-center my-6 text-white">Registro</h1>

        <div className="card max-w-md mx-auto bg-white/10 backdrop-blur-md p-6 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre"><strong></strong></label>
              <input
                type="text"
                placeholder='Nombre'
                name='nombre'
                onChange={e => setValues({ ...values, nombre: e.target.value })}
                className='rounded bg-white w-full py-2 px-4'
              />
            </div>
            <div className='mt-3'>
              <label htmlFor="email"><strong></strong></label>
              <input
                type="email"
                placeholder='Correo electrónico'
                name='email'
                onChange={e => setValues({ ...values, email: e.target.value })}
                className='rounded bg-white w-full py-2 px-4'
              />
            </div>
            <div className='mt-3'>
              <label htmlFor="contraseña"><strong></strong></label>
              <input
                type="password"
                placeholder='Contraseña'
                name='contraseña'
                onChange={e => setValues({ ...values, contraseña: e.target.value })}
                className='rounded bg-white w-full py-2 px-4'
              />
            </div>
            <button
              className="back-button mt-3 w-full py-2 px-4 bg-[#2C2C2C] hover:bg-gray-700 text-white rounded transition-colors"
            >
              Continuar
            </button>
          </form>

          <p className="text-center mt-4 text-white/80">
            Edit <code className="bg-black/20 px-1 rounded">src/Registro.jsx</code>
          </p>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={Fondo2}
              className="w-full h-full object-cover"
              alt="background"
              style={{ opacity: 1 }}
            />
          </div>

          <div className="relative bg-gray-800 border-2 border-gray-900 rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
            {/* Header */}
            <div className="bg-gray-900 p-4 flex items-center justify-between">
              <img src={viteLogo} className="h-8" alt="Chivas Logo" />
              <h2 className="text-xl font-bold text-white">Completa tu registro</h2>
            </div>

            {/* Form content */}
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                {/* Idioma */}
                <div className="flex flex-col">
                  <label className="text-white/80 text-sm mb-1">Idioma</label>
                  <select
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    onChange={e => setValues({ ...values, idioma: e.target.value })}
                    value={values.idioma}
                  >
                    <option value="" disabled>Selecciona un idioma</option>
                    <option value="Español">Español</option>
                    <option value="Inglés">Inglés</option>
                  </select>
                </div>

                {/* Cumpleaños */}
                <div className="flex flex-col">
                  <label className="text-white/80 text-sm mb-1">Fecha de nacimiento</label>
                  <input
                    type="date"
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 [&::-webkit-calendar-picker-indicator]:invert"
                    onChange={e => setValues({ ...values, cumpleaños: e.target.value })}
                  />
                </div>

                {/* Teléfono */}
                <div className="flex flex-col">
                  <label className="text-white/80 text-sm mb-1">Teléfono</label>
                  <input
                    type="tel"
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    onChange={e => setValues({ ...values, telefono: e.target.value })}
                  />
                </div>

                {/* País */}
                <div className="flex flex-col">
                  <label className="text-white/80 text-sm mb-1">País</label>
                  <select
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
                    value={values.pais}
                    onChange={e => setValues({ ...values, pais: e.target.value, estado: '' })}
                  >
                    <option value="" disabled>Selecciona un país</option>
                    {paises.map(p => (
                      <option key={p.nombre} value={p.nombre}>{p.nombre}</option>
                    ))}
                  </select>
                </div>

                {/* Estado */}
                <div className="flex flex-col">
                  <label className="text-white/80 text-sm mb-1">Estado</label>
                  <select
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
                    value={values.estado}
                    onChange={e => setValues({ ...values, estado: e.target.value })}
                    disabled={!values.pais}
                  >
                    <option value="" disabled>{values.pais ? 'Selecciona un estado' : 'Selecciona un país primero'}</option>
                    {estados?.map(estado => (
                      <option key={estado} value={estado}>{estado}</option>
                    ))}
                  </select>
                </div>

                {/* Género */}
                <div className="flex flex-col">
                  <label className="text-white/80 text-sm mb-1">Género</label>
                  <select
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    onChange={e => setValues({ ...values, genero: e.target.value })}
                    value={values.genero}
                  >
                    <option value="" disabled>Selecciona tu género</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                    <option value="Prefiero no decirlo">Prefiero no decirlo</option>
                  </select>
                </div>
              </div>

              {/* Botones */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    axios.post('http://localhost:3000/registro', values)
                      .then(res => {
                        if (res.data.Status === "DONE!") {
                          axios.post('http://localhost:3000/iniciarsesion', values)
                            .then(res => {
                              if (res.data.Status === "DONE!") {
                                navigate('/inicio-user');
                              } else {
                                alert("Error al iniciar sesión");
                              }
                            })
                            .catch(err => console.log(err));
                        } else {
                          alert("Error al registrar");
                        }
                      })
                      .catch(err => console.log(err));
                  }}
                  className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors shadow-lg"
                >
                  Finalizar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;