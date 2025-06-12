import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import viteLogo from './assets/logochivas.png';
import Fondo from './assets/chivasBandera.jpg';
import axios from 'axios';
import './index.css';

function RegistroNegocioChivas() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nombreNegocio: '',
    categoria: '',
    ubicacion: '',
    contacto: '',
    descripcion: ''
  });

  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/registrar-negocio', values)
      .then(res => {
        if (res.data.Status === "DONE!") {
          alert("Negocio registrado con éxito");
          navigate('/inicio-user');
        } else {
          alert("Error al registrar");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        className="fixed -z-20 bg-[#05022E] w-[1653.50px] h-[806.88px] right-[230px] pointer-events-none"
        src={Fondo}
        alt="background"
      />

      <div
        className="fixed pointer-events-none -top-[200px] left-[1060px] w-[1200px] h-[1550px] -z-20 rotate-[8.85deg] origin-top-left bg-gradient-to-b from-[#001f3f] via-[#2d6a3f] to-[#80c531] "
      />

      <div className="app-container relative top-[120px] left-[490px]">
        <div className="text-center">
          <img src={viteLogo} className="logo mx-auto w-20" alt="Logo" />
        </div>

        <h1 className="text-4xl font-bold text-center my-6 text-white">Registrar Negocio</h1>

        <div className="card max-w-sm mx-auto backdrop-blur-md p-6 rounded-lg">
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombreNegocio" className="block text-sm font-normal text-white mb-1">
              Nombre del Negocio
            </label>
            <input
              type="text"
              placeholder="Nombre del Negocio"
              value={values.nombreNegocio}
              onChange={e => setValues({ ...values, nombreNegocio: e.target.value })}
              className="rounded bg-white w-full py-2 px-4 mb-3"
            />
            <label htmlFor="categoria" className="block text-sm font-normal text-white mb-1">
              Categoría
            </label>
            <input
              type="text"
              placeholder="Categoría (Ej. Restaurante, Tienda)"
              value={values.categoria}
              onChange={e => setValues({ ...values, categoria: e.target.value })}
              className="rounded bg-white w-full py-2 px-4 mb-3"
            />
            <label htmlFor="ubicacion" className="block text-sm font-normal text-white mb-1">
              Ubicación
            </label>
            <input
              type="text"
              placeholder="Ubicación"
              value={values.ubicacion}
              onChange={e => setValues({ ...values, ubicacion: e.target.value })}
              className="rounded bg-white w-full py-2 px-4 mb-3"
            />
            <label htmlFor="contacto" className="block text-sm font-normal text-white mb-1">
              Contacto
            </label>
            <input
              type="text"
              placeholder="Contacto (Teléfono o Email)"
              value={values.contacto}
              onChange={e => setValues({ ...values, contacto: e.target.value })}
              className="rounded bg-white w-full py-2 px-4 mb-3"
            />
            <label htmlFor="descripcion" className="block text-sm font-normal text-white mb-1">
              Descripción del Negocio
            </label>
            <textarea
              placeholder="Descripción del negocio"
              value={values.descripcion}
              onChange={e => setValues({ ...values, descripcion: e.target.value })}
              className="rounded bg-white w-full py-2 px-4 mb-3"
              rows="1"
            ></textarea>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#2C2C2C] hover:bg-gray-700 text-white rounded transition-colors"
            >
              Registrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default RegistroNegocioChivas;