import React from 'react';
import { useNavigate } from 'react-router-dom';
import viteLogo from './assets/logochivas.png';
import Fondo from './assets/chivas1fondo.png';
import './index.css';

function PerfilUsuario() {
  const navigate = useNavigate();

  const user = {
    nombre: "Juan Pérez",
    fechaRegistro: "12 de enero de 2024",
    estadoCuenta: "Cuenta Inactiva"
  };

  const handleSalir = () => {
    navigate('/');
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo */}
      <img
        className="fixed -z-20 bg-[#05022E] w-[1200.50px] h-[1106.88px] right-[230px] pointer-events-none"
        src={Fondo}
        alt="background"
      />

      {/* Header fijo */}
      <header className="fixed top-0 left-0 right-0 bg-black h-14 flex items-center px-6 z-50">
        <div className="flex-1"></div>
        <button
          onClick={() => navigate('/')}
          className="text-white font-semibold hover:underline"
        >
          ← Regresar a la página principal
        </button>
      </header>

      {/* Contenido principal */}
      <div className="flex pt-14 h-screen">
        {/* Menú lateral izquierdo */}
        <div className="flex flex-col space-y-4 pl-24 pt-20 w-2/3">
          {[
            "DATOS DE USUARIO",
            "DATOS DE FACTURACIÓN",
            "AGREGAR SUSCRIPCIÓN",
            "SOPORTE TÉCNICO",
            "SALIR"
          ].map((text, index) => (
            <button
              key={index}
              onClick={text === "SALIR" ? handleSalir : undefined}
              className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded text-left w-64 transition-colors"
            >
              {text}
            </button>
          ))}
        </div>

        {/* Panel derecho de 1/3 pantalla */}
        <div className="w-1/3 bg-black text-white p-10 h-screen shadow-lg flex flex-col justify-center items-center">
          <img src={viteLogo} className="w-24 mb-6" alt="Logo" />
          <h1 className="text-3xl font-bold mb-4">Hola, {user.nombre}</h1>
          <p className="text-lg mb-2">
            Miembro desde: <span className="font-semibold">{user.fechaRegistro}</span>
          </p>
          <p className="text-lg">
            Estado de la cuenta: <span className="font-semibold text-red-400">{user.estadoCuenta}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PerfilUsuario;