import React from "react";
import "../styles/main.css";
import { Link } from "react-router-dom";

const InfoCards = () => {

    return(
       <section className="info-section">
            <div className="info-wrapper">
                <Link to="/Nosotros" className="info-card red">
                

                    <h3>Conoce nuestros servicios médicos.</h3>
                    <p>
                        Descubre todas las atenciones especializadas que ofrecemos
                        para cuidar tu salud renal y bienestar integral.
                    </p>
                    </Link>
                

                <Link to="/contactos" className="info-card blue">
                    <h3>Contáctanos, queremos escucharte.</h3>

                   <p>
                   Si tienes preguntas, necesitas una orientación o deseas
                   programar una cita, estamos aquí para ayudarte.
                   </p>

                </Link>

                <Link to="/Informacion" className="info-card gray">
                    <h3>Información esencial para tu visita.</h3>
                    <p>
                    Encuentra aquí los datos esenciales para orientarte,
                    comprender nuestros procesos y preparar tu visita.
                    </p>

                </Link>
               
            </div>

        </section>

        
    )
    
}

export default InfoCards;


