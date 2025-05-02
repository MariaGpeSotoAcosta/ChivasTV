import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import image1 from "./assets/chivas2.jpg";
import image2 from "./assets/chivas3.jpg";
import image3 from "./assets/chivas4.jpg";
import image4 from "./assets/chivas5.jpg";
import image5 from "./assets/chivas6.jpg";
import image6 from "./assets/chivas7.jpg";
import image8 from "./assets/chivas8.jpg";

const carouselItems = [
  { image: image1, title: "PARTIDO 1", id: 1 },
  { image: image2, title: "ENTREVISTA", id: 2 },
  { image: image3, title: "MEJORES JUGADAS", id: 3 },
  { image: image4, title: "PARTIDO 2", id: 4 },
  { image: image5, title: "TRAS BAMBALINAS", id: 5 },
  { image: image6, title: "HISTORIAS", id: 6 }
];

function VideoCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 400;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image8}
          className="w-full h-full object-cover"
          alt="background"
        />
      </div>

      <div className="relative z-10 py-8">
        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20 hover:bg-black/70"
        >
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 px-16 scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-shrink-0">
              {/* Image Container with Overlay */}
              <Link to={`/video/${item.id}`} className="relative w-[380px] h-[220px] group">
                <img
                  src={item.image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover rounded-xl cursor-pointer shadow-lg border-2 border-white group-hover:scale-95 transition-transform duration-300"
                />

                {/* SUSCRÍBETE Overlay */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[90%] bg-indigo-800/90 rounded-[40px] flex items-center justify-center py-2">
                  <p className="text-white text-xl font-bold">
                    SUSCRÍBETE PARA VER
                  </p>
                </div>
              </Link>

              {/* Title Below Image */}
              <h3 className="mt-3 text-white text-xl font-bold">{item.title}</h3>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20 hover:bg-black/70"
        >
        </button>
      </div>
    </div>
  );
}

export default VideoCarousel;
