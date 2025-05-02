import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/chivaslogoTV.png'
import videofondo from './assets/videoplayback.mp4'



const VideoHero = () => {

  
const navigate = useNavigate();

const handleRegisterClick = () => {
  navigate('/registro');
};
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video 
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src= {videofondo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/30 z-1"></div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <span className="text-white text-4xl md:text-5xl font-bold mr-4">Únete a</span>
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 md:h-16 w-auto" // Adjust size as needed
            />
          </div>
          
          <p className="text-white text-xl md:text-2xl mb-8">
            La mejor experiencia para fans
          </p>
          
          <button 
            onClick={handleRegisterClick}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Regístrate Ahora
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
