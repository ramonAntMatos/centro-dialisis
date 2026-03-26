import React from "react";
import "../styles/main.css";
import { Link } from "react-router-dom";


const ContactFooter = () => {

    return(
        <section className="contact-footer">

            <div className="map-box">
            <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1222492144416!2d-70.15376698963182!3d19.05836195245237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eafcf3f8bb2d31b%3A0xd2300bf10e48e207!2sCentro%20De%20Atencion%20Renal%20Dr%20Rosy%20Lanfranco!5e0!3m2!1ses-419!2sdo!4v1770333764994!5m2!1ses-419!2sdo"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    title="Ubicación Centro Renal"
  />
            </div>

            

            <div className="contact-quick">
                <div className="contact-btn blue" onClick={() => window.open("https://wa.me/18092400291", "_blank")}>
                    <img src="/images/iconowhatsapp.png"/>
                    <p>1 (809) 240 0291</p>
                    
                </div>

                <div className="contact-btn red"  onClick={() => window.location.href = "mailto:atencionrenal@gmail.com"}>
                    <img src="/images/icono correo.png"/>
                    <p>atencionrenal@gmail.com</p>

                  </div>
            </div>

            {/* FOOTER LINKS */}

            <div className="footer-links">

                <div>
                    <h4>EXPLORA</h4>
                    <Link to="/Nosotros">Nosotros</Link>
                    <Link to="/Novedades">Novedades</Link>
                </div>

          

            <div>
                    <h4>SERVICIOS</h4>
                    <Link to ="/Informacion">Información</Link>
                    <Link to ="/Servicios">Servicios</Link>
             </div>

             <div>
                    <h4>CONECTA</h4>
                    <Link to="/contactos">Contacto</Link>
                    <a href="https://www.instagram.com/centrodeatencionrenalrl?igsh=MXM4Z2tpb2FyMmcwMw==" target="_blank">Instagram</a>
                    <p></p>
             </div>

             <div>
          <h4>MENÚ</h4>
          <Link to="/">Inicio</Link>
          <Link to="/Nosotros">Nosotros</Link>
          <Link to ="/Servicios">Servicios</Link>
          <Link to ="/Informacion">Información</Link>
          <Link to="/Novedades">Novedades</Link>
          <Link to="/contactos">Contacto</Link>
        </div>

             </div>


             <div className="copyright">
             © 2026 By Next Code Studio. All Rights Reserved.

             </div>

             

          



        </section>
    )
}

export default ContactFooter;