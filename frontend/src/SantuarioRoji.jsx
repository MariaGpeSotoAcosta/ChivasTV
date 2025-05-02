import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
        
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">🚧 To be built</h1>
        
        
        <button 
        onClick={() => navigate('/')}
        className="mt-2 px-6 py-2 bg-[#dc2626] text-white rounded-xl hover:bg-[rgba(220,38,38,0.75)] transition">
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}

export default App;