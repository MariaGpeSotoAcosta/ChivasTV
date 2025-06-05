import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; //para las flechas

//imagenes
import image1 from "./assets/entrevista1.png";
import image2 from "./assets/entrevista2.png";
import image3 from "./assets/entrevista3.png";
import image4 from "./assets/entrevista4.png";
import image5 from "./assets/entrevista5.png";
import image6 from "./assets/entrevista6.png";
import elPodcast from "./assets/elPodcast.jpg";

const carouselItems = [
  { image: image1, id: 1 },
  { image: image2, id: 2 },
  { image: image3, id: 3 },
  { image: image4, id: 4 },
  { image: image5, id: 5 },
  { image: image6, id: 6 },
];

function CarouselC() {
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
    <div className="relative w-full bg-black">
      {/* Imagen EL PODCAST arriba, izquierda */}
      <div className="p-2 ml-12">
        <img
          src={elPodcast}
          alt="El Podcast"
          className="w-[200px] h-auto object-contain"
        />
      </div>

      <div className="relative z-10 py-8">
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
              <Link to={`/video/${item.id}`} className="relative w-[270px] h-[340px] group">
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

export default CarouselC;