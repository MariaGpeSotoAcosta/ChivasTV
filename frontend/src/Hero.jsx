import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; //para las flechas

//imagenes
import image1 from "./assets/chivas2.jpg";
import image2 from "./assets/chivas3.jpg";
import image3 from "./assets/chivas4.jpg";
import image4 from "./assets/chivas5.jpg";
import image5 from "./assets/chivas6.jpg";
import image6 from "./assets/chivas7.jpg";

const images = [image1, image2, image3, image4, image5]; // Usamos 5 imágenes

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full min-h-[300px] h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-10">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Flechas */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-40 hover:bg-black/70"
        aria-label="Anterior"
      >
        <FaChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-40 hover:bg-black/70"
        aria-label="Siguiente"
      >
        <FaChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-50 bg-black/30 px-4 py-2 rounded-full">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-6" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;