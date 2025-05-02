import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import PagPrincipal from './PagPrincipal'
import IniciarS from './IniciarS'
import Registro from './Registro'
import PaginaUsuario from './PaginaUsuario'
import SantuarioRoji from './SantuarioRoji'
import VideoPage from './videolay'
import Navbar from './NavBar'

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/video/");

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<PagPrincipal />} />
        <Route path="/iniciarsesion" element={<IniciarS />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/inicio-user" element={<PaginaUsuario />} />
        <Route path="/santuarioroji" element={<SantuarioRoji />} />
        <Route path="/video/:id" element={<VideoPage />} />
      </Routes>
    </>
  );
};

const App = () => (
    <AppContent />
);

export default App;
