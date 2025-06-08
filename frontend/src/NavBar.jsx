import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo1 from './assets/prueba.png';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const navigationLinks = [
    { id: '1', title: 'CONTENIDO' },
    { id: '2', title: 'SANTUARIO ROJIBLANCO', link: '/santuarioroji' },
    { id: '3', title: 'SUSCRIPCIONES', link: '/suscripcion' },
];

const authenticatedLinks = [
    { id: '4', title: 'PARTIDOS PASADOS', link: '/partidospasados' },
    { id: '5', title: 'EN VIVO', link: '/envivo' },
    { id: '6', title: 'ENTREVISTAS', link: '/entrevistas' },
];

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [showContenidoMenu, setShowContenidoMenu] = useState(false);

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:3000')
            .then(res => {
                if (res.data.Status === "DONE!") {
                    setAuth(true);
                    setName(res.data.name || res.data.nombre);
                } else {
                    setAuth(false);
                    setMessage(res.data.Error);
                }
            })
            .catch(err => console.log(err));
    }, [location]);

    const logout = () => {
        axios.get('http://localhost:3000/logout')
            .then(res => {
                if (res.data.Status === "Success") {
                    setAuth(false);
                    navigate('/');
                } else {
                    alert("Error al cerrar sesión");
                }
            })
            .catch(err => console.log(err));
    };

    const toggleContenidoMenu = () => {
        setShowContenidoMenu(prev => !prev);
    };

    return (
        <div className='fixed left-0 right-0 z-50 bg-black flex items-center h-[50px]'>
            <Link to={auth ? '/inicio-user' : '/'} className='text-white'>
                <img src={logo1} alt='Logo' width={250} height={190} />
            </Link>

            <ul className='flex gap-x-24 mr-32 text-white ml-auto'>
                {auth
                    ? authenticatedLinks.map((authLink, index) => (
                        <li key={index}>
                            <Link
                                to={authLink.link}
                                className={`hover:underline ${location.pathname === authLink.link ? 'underline font-bold' : ''}`}
                            >
                                {authLink.title}
                            </Link>
                        </li>
                    ))
                    : navigationLinks.map((navLink, index) => (
                        <li key={index} className="relative">
                            {navLink.title === 'CONTENIDO' ? (
                                <>
                                    <button
                                        onClick={toggleContenidoMenu}
                                        className='hover:underline focus:outline-none'
                                    >
                                        {navLink.title}
                                    </button>

                                    {showContenidoMenu && (
                                        <div
                                            className="fixed top-[50px] left-0 w-full bg-black bg-opacity-40 text-white p-4 z-50"
                                            style={{ backdropFilter: 'blur(8px)' }}
                                        >
                                            <ul className="max-w-[1200px] mx-auto flex justify-start gap-8 text-lg">
                                                <li>
                                                    <Link
                                                        to="/podcast"
                                                        className="hover:underline"
                                                        onClick={() => setShowContenidoMenu(false)}
                                                    >
                                                        1 - El Podcast
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/femenil"
                                                        className="hover:underline"
                                                        onClick={() => setShowContenidoMenu(false)}
                                                    >
                                                        2 - Femenil
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    to={navLink.link}
                                    className={`hover:underline ${location.pathname === navLink.link ? 'underline font-bold' : ''}`}
                                >
                                    {navLink.title}
                                </Link>
                            )}
                        </li>
                    ))
                }
            </ul>

            <ul className='flex gap-x-4 items-center mr-3.5'>
                {auth ? (
                    <li className='ml-[230px]'>
                        {name && (
                            <span className="text-white font-medium ">
                                ¡Hola, {name}!
                            </span>
                        )}
                        <button
                            onClick={logout}
                            className='ml-[40px] bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-sm '
                        >
                            Cerrar Sesión
                        </button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link
                                to='/iniciarsesion'
                                className='bg-black hover:bg-gray-800 text-white px-3 py-1 rounded-sm'
                            >
                                Iniciar Sesión
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/registro'
                                className='bg-[#7D191E] hover:bg-[#5D1217] text-white px-3 py-1 rounded-full'
                            >
                                Regístrate
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
}

export default NavBar;