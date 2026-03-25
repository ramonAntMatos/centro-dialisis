import React from "react";
import "../styles/main.css";


const UpdateSection = () => {

    return(
        <section className="updates-section">

            <div className="update-container">
                <div className="updates-header">
                    <h2>Actualizaciones institucionales, últimos pasos y avances</h2>
          <p>
            Mantente al día con las actualizaciones, proyectos y avances del
            Centro de Atención Renal Dr. Rosy Lanfranco. Aquí encontrarás noticias
            relevantes para tu bienestar y la evolución de nuestros servicios.
          </p>
                </div>

                <div className="updates-content">

                    <div className="updates-image">
                        <img src="/images/equipo.png" alt="Equipo Medico"/>
                    </div>

                    <div className="updates-card">
                        <h3>Novedades</h3>
                        <p>
                     Aquí encontrarás <strong>noticias relevantes</strong> para tu bienestar
                     y la evolución de nuestros servicios.
                      </p>
                    </div>

                </div>

          

            </div>

        </section>
    )

}

export default UpdateSection;