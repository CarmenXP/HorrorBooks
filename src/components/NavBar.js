import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="navBar">
            <div className="nav-container">
                <NavLink to="/" className="nav-logo">
                    ICONO
                </NavLink>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <NavLink to="/session" className="nav-links">
                            Iniciar sesión
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/books" className="nav-links">
                            Libros
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/comments" className="nav-links">
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
