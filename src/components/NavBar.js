import {useState}from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <nav className="navBar">
            <div className="nav-container">
                <NavLink to="/" className="nav-logo">
                    <i className="fas fa-book-dead"></i>
                </NavLink>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink 
                            to="/session"   
                            className="nav-links"
                            activeClassName="active"
                            onClick={handleClick}
                        >
                            Iniciar sesión
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            to="/books" 
                            className="nav-links"
                            activeClassName="active"
                            onClick={handleClick}
                        >
                            Libros
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            to="/comments" 
                            className="nav-links"
                            activeClassName="active"
                            onClick={handleClick}
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
        </nav>
    )
}
