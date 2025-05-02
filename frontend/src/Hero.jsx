import React, { useEffect, useState } from "react";
        import image1 from "./assets/chivas2.jpg"
        import image2 from "./assets/chivas3.jpg"
        import image3 from "./assets/chivas4.jpg"
        import image4 from "./assets/chivas5.jpg"
        import image5 from "./assets/chivas6.jpg"
        import image6 from "./assets/chivas7.jpg"
        
        
        const images = [image1, image2, image3];
        const imagesInfo = [image4];
        
        function Hero() {
          const [currentIndex, setCurrentIndex] = useState(0);
        
          useEffect(() => {
            const interval = setInterval(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000);
            return () => clearInterval(interval);
          }, []);

          return (
            <div className=" relative w-full min-h-[300px] h-screen overflow-hidden">
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
        
