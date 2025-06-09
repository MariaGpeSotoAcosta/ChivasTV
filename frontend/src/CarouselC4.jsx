import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; //para las flechas

//imagenes
import image1 from "./assets/chivas2.jpg";
import image2 from "./assets/chivas3.jpg";
import image3 from "./assets/chivas4.jpg";
import image4 from "./assets/chivas5.jpg";
import image5 from "./assets/chivas6.jpg";
import image6 from "./assets/chivas7.jpg";
import fondo from "./assets/fondoCarousel2.png";
import chivasFemenil from "./assets/chivasFemenil.png";

const carouselItems = [
  { image: image1, title: "PARTIDO 1", id: 1 },
  { image: image2, title: "ENTREVISTA", id: 2 },
  { image: image3, title: "MEJORES JUGADAS", id: 3 },
  { image: image4, title: "PARTIDO 2", id: 4 },
  { image: image5, title: "TRAS BAMBALINAS", id: 5 },
  { image: image6, title: "HISTORIAS", id: 6 },
];


function CarouselC4() {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 400;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollButtons();

    container.addEventListener("scroll", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  return (
    <div className="relative w-full h-[430px]">
      {/* Fondo */}
      <div className="absolute inset-0">
        <img src={fondo} className="w-full h-full object-cover" alt="background" />
        {/* Degradado superior */}
        <div className="absolute top-0 left-0 w-full h-52 bg-gradient-to-b from-black/100 to-transparent z-30" />
        {/* Degradado inferior */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black via-transparent to-transparent z-30" />
      </div>
      {/* Imagen titulo CHIVAS VARONIL con id para scroll */}
      <div id="chivas-varonil" className="absolute top-5 right-12 z-30">
        <img src={chivasFemenil} alt="Chivas Femenil"
          className="w-[270px] h-auto object-contain"
        />
      </div>

      <div className="relative z-10 py-8 top-15">
        {/* Flecha izquierda */}
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-40 hover:bg-black/70"
          >
            <FaChevronLeft size={20} />
          </button>
        )}

        {/* Carrusel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 px-16 scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-shrink-0">
              <Link to={`/video/${item.id}`} className="relative w-[380px] h-[220px] group">
                <img
                  src={item.image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover rounded-xl cursor-pointer shadow-lg  group-hover:scale-95 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[90%] bg-indigo-800/90 rounded-[40px] flex items-center justify-center py-2">
                  <p className="text-white text-xl font-bold">
                    SUSCRÍBETE PARA VER
                  </p>
                </div>
              </Link>
              <h3 className="mt-3 text-white text-xl font-bold">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Flecha derecha */}
        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-40 hover:bg-black/70"
          >
            <FaChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
}

export default CarouselC4;