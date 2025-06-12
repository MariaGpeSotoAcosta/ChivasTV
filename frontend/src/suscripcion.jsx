import React,{useState} from 'react'
import './suscripcion.css'
import { useNavigate } from 'react-router-dom'
import logochivas from './assets/logochivas.png'
import footerImage from './assets/foot.png'

// Componente para el cuadro con gradiente
const CuadroGradiente = ({ titulo, precio, descripcion, buttonText, navigate, path, className }) => {
  return (
    <div className={`cuadro-gradiente ${className || ''}`}>
      <div className="plan-content">
        <h3 className={titulo === "CHIVASTV Premium" ? "titulo-premium" : ""}>{titulo}</h3>
        <h3>{precio}</h3>
        <p>{descripcion}</p>
        {buttonText === "Regístrate" && (
          <p className="disclaimer-text">*Algunos eventos en vivo pueden requerir pago adicional.</p>
        )}
        <button 
          className={`registro-button ${buttonText === "Entrar como socio" ? "boton-socio" : ""}`}
          onClick={() => navigate(path || '/registro')}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

const Suscripcion = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState('mensual');
  return (
    <div className="suscripcion-container">
        <div className="content-container">        <div className="centered-logo">
          <img src={logochivas} alt="Chivas Logo" className="centered-logo-img" />
        </div>
        
          <div className="planes-container">
          <CuadroGradiente 
            titulo="CHIVASTV Free" 
            precio="0$" 
            descripcion="Todo el contenido gratis de manera ilimitada*" 
            buttonText="Regístrate" 
            navigate={navigate} 
            className="gradiente-free"
          />
          <CuadroGradiente 
            titulo="CHIVASTV Premium" 
            precio="39$ / mes" 
            descripcion="Contenido Premium del Rebaño sin límites" 
            buttonText="Suscríbete" 
            navigate={navigate}
            className="gradiente-premium" 
          />
          <CuadroGradiente 
            titulo="Santuario Rojiblanco" 
            precio="" 
            descripcion="REGISTRA UN SANTUARIO ROJIBLANCO" 
            buttonText="Entrar como socio" 
            navigate={navigate} 
            path="/santuarioroji"
            className="gradiente-santuario" 
          />
        </div>
      </div>
      
      <div className="footer-image-container">
        <img src={footerImage} alt="Footer" className="footer-image" />
      </div>
    </div>
  );
};

export default Suscripcion;


