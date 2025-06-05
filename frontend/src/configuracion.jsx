import React from 'react';
import { useNavigate } from 'react-router-dom';
import viteLogo from './assets/logochivas.png';
import Fondo from './assets/configfondo.png';
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
        className="fixed -z-20 bg-[#05022E] w-full h-full object-cover inset-0 pointer-events-none"
        src={Fondo}
        alt="background"
      />

      {/* Header fijo */}
      <header className="fixed top-0 left-0 right-0 bg-black h-13 flex items-center px-5 z-50">
        <div className="flex-1"></div>
        <button
          onClick={() => navigate('/')}
          className="text-white font-semibold hover:underline"
        >
          ← Regresar a la página principal
        </button>
      </header>      {/* Panel de usuario (ahora en la parte central superior) */}
      <div className="flex justify-center pt-10 pb-6">
        <div className="text-white p-6 rounded-lg shadow-lg flex flex-col items-center max-w-md">
          <img src={viteLogo} className="w-24 mb-4" alt="Logo" />
          <h1 className="text-3xl font-bold mb-3">Hola, {user.nombre}</h1>
          <p className="text-lg mb-2">
            Miembro desde: <span className="font-semibold">{user.fechaRegistro}</span>
          </p>
          <p className="text-lg">
            Estado de la cuenta: <span className="font-semibold text-red-400">{user.estadoCuenta}</span>
          </p>
        </div>
      </div>

      {/* Contenido principal - Menú de opciones */}
      <div className="flex justify-center pt-0.01">
        <div className="flex flex-col space-y-4 w-full max-w-lg p-8 bg-black/70 rounded-lg">
          {[
            "DATOS DE USUARIO",
            "DATOS DE FACTURACIÓN",
            "AGREGAR SUSCRIPCIÓN",
            "SOPORTE TÉCNICO",
            "SALIR"
          ].map((text, index) => (
            <button
              key={index}              onClick={text === "SALIR" ? handleSalir : undefined}
              className="bg-[#870011]/50 hover:bg-[#870011]/70 text-white py-3 px-6 rounded text-center w-full transition-colors"
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PerfilUsuario;