import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo1 from './assets/chivaslogoTV.png';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const navigationLinks = [
    { id: '1', title: 'CONTENIDO', link: '/contenidos' },
    { id: '2', title: 'SANTUARIO ROJIBLANCO', link: '/santuarioroji' },
    { id: '3', title: 'SUSCRIPCIONES', link: '/suscripciones' },
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

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:3000')
            .then(res => {
                if (res.data.Status === "DONE!") {
                    setAuth(true);
                  setName(res.data.name || res.data.nombre  );
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

    return (
        <div className='fixed left-0 right-0 z-50 bg-black flex items-center h-[60px] '>
            
            <Link to={auth ? '/inicio-user' : '/'} className='text-white'>
                <img src={logo1} alt='Logo' width={210} height={60} />
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
                        <li key={index}>
                            <Link
                                to={navLink.link}
                                className={`hover:underline ${location.pathname === navLink.link ? 'underline font-bold' : ''}`}
                            >
                                {navLink.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
    
            <ul className='flex gap-x-4 items-center  mr-3.5'>
                {auth ? (
                        
                    
                        

                    <li className='ml-[230px]'>
                       {name && (
                            <span className="text-white font-medium ">
                                ¡Hola, {name}!
                            </span>
                        )}     
                        
                          
                        
                        <button
                            onClick={logout}
                            className=' ml-[40px] bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-sm '
                        >
                            Cerrar Sesión
                        </button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link
                                to='/iniciarsesion'
                                className='ml-[100px] bg-[#005A9C] hover:bg-[#004687] text-white px-3 py-1 rounded-sm'
                            >
                                Iniciar Sesión
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/registro'
                                className='bg-black hover:bg-gray-800 text-white px-3 py-1 rounded-sm'
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