import React,{useState} from 'react'
import './suscripcion.css'
import { useNavigate } from 'react-router-dom'
import logochivas from './assets/chivaslogo.png'
import footerImage from './assets/foot.png.png'

// Componente para el cuadro con gradiente
const CuadroGradiente = () => {
  return (
    <div className="cuadro-gradiente"></div>
  );
}

const Suscripcion = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState('mensual');
  return (
    <div className="suscripcion-container">
        <div className="content-container">
        <div className="centered-logo">
          <img src={logochivas} alt="Chivas Logo" className="centered-logo-img" />
        </div>
        
        
        <div className="planes-container">
          <CuadroGradiente />
        </div>
      </div>
      
      <div className="footer-image-container">
        <img src={footerImage} alt="Footer" className="footer-image" />
      </div>
    </div>
  );
};

export default Suscripcion;


