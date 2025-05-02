import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import image1 from './assets/chivas2.jpg';
import image2 from './assets/chivas3.jpg';
import image3 from './assets/chivas4.jpg';
import image4 from './assets/chivas5.jpg';
import image5 from './assets/chivas6.jpg';
import image6 from './assets/chivas7.jpg';

const VideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = getVideoById(id);

  return (
    <div className="relative w-full h-screen pt-72">
      <img 
        src={video.image} 
        alt={video.title} 
        className="w-full h-full object-cover fixed top-0 left-0 z-0" 
      />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 to-slate-950 z-10" />

      <button 
        onClick={() => navigate('/inicio-user')} 
        className="absolute top-4 left-4 z-30 text-white px-4 py-2 rounded-md text-sm font-medium shadow"
      >
        ⬅ Volver
      </button>

      <div className="absolute inset-x-0 bottom-24 px-16 z-20">
        <div className="mb-4">
          <button className="px-6 py-3 bg-white rounded-md text-red-900 text-2xl font-semibold">
            VER AHORA
          </button>
        </div>
        <div className="text-white text-4xl font-bold">
          {video.title}
        </div>
        <div className="text-white text-2xl font-bold mt-4">
          {video.description}
        </div>
        <div className="text-white text-2xl mt-4">
          {video.date}
        </div>
      </div>
    </div>
  );
};

const getVideoById = (id) => {
  const videos = [
    { id: 1, title: "PARTIDO 1", description: "Disfruta del clásico nacional entre Chivas y América en este emocionante partido.", date: "18 de marzo de 2023", image: image1, videoUrl: "path/to/video1.mp4" },
    { id: 2, title: "ENTREVISTA", description: "Entrevista con los jugadores después del partido.", date: "19 de marzo de 2023", image: image2, videoUrl: "path/to/video2.mp4" },
    { id: 3, title: "MEJORES JUGADAS", description: "Las jugadas más espectaculares del partido.", date: "20 de marzo de 2023", image: image3, videoUrl: "path/to/video3.mp4" },
    { id: 4, title: "PARTIDO 2", description: "El regreso de las Águilas contra el Rebaño.", date: "25 de marzo de 2023", image: image4, videoUrl: "path/to/video4.mp4" },
    { id: 5, title: "TRAS BAMBALINAS", description: "Descubre lo que sucede detrás de las cámaras.", date: "26 de marzo de 2023", image: image5, videoUrl: "path/to/video5.mp4" },
    { id: 6, title: "HISTORIAS", description: "Momentos inolvidables de la historia del equipo.", date: "27 de marzo de 2023", image: image6, videoUrl: "path/to/video6.mp4" }
  ];

  return videos.find((video) => video.id === parseInt(id));
};

export default VideoPage;
