import React, { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom";
import "../styles/main.css"








const Navbar = () => {

  const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false)

    const [activeLink, setActiveLink] = useState("Inicio")

    const navRef = useRef<HTMLDivElement | null>(null)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
          if (navRef.current && !navRef.current.contains(e.target as Node)) {
            setMenuOpen(false)
          }
        }
      
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
      }, [])

    return (
        <nav className="navbar" ref={navRef}>
            {/*Logo*/}

            <Link to="/" className="navbar-logo">
                <img src="/src/assets/images/Logo.png" />
            </Link>

            {/*Links*/}

            <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
         <li>  <Link
    to="/"
    className={location.pathname === "/" ? "active" : ""}
    onClick={() => setMenuOpen(false)}
  >
    Inicio
  </Link>
  </li>
                <li>  <Link
    to="/Nosotros"
    className={location.pathname === "/Nosotros" ? "active" : ""}
    onClick={() => {
      setMenuOpen(false);
    }}
  >
    Nosotros
  </Link></li>
                <li><Link
    to="/Servicios"
    className={location.pathname === "/Servicios" ? "active" : ""}
    onClick={() => {
      setMenuOpen(false);
    }}
  >
    Servicios
  </Link></li>
  <li><Link
    to="/Informacion"
    className={location.pathname === "/Informacion" ? "active" : ""}
    onClick={() => {
      setMenuOpen(false);
    }}
  >
    Información
  </Link></li>
  <li><Link
    to="/Novedades"
    className={location.pathname === "/Novedades" ? "active" : ""}
    onClick={() => {
      setMenuOpen(false);
    }}
  >
    Novedades
  </Link></li>
            </ul>

            {/* Boton */}

            <div className="navbar-action">
            <Link
    to="/contactos"
    className="btn-contact"
    onClick={() => {
      setMenuOpen(false);
      setActiveLink("Contactos");
    }}
  >
    Contacto
  </Link>
            </div>

            {/* Hamburguesa */}
            <div
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )

};

export default Navbar;
