import React from "react";
import "../styles/main.css"

const AboutSection  = () => {

    return(
        <section className="about-section">

            <div className="about-wrapper">
              <div className="about-text">

                <p>
            Ofrecemos atención renal 
            oportuna y de calidad,
            superando expectativas con 
            tecnología avanzada y un 
            equipo en constante
            desarrollo, para ser el centro 
            de salud renal de referencia
            para todos.
                </p>

                <p>
            Estamos ubicados en el 
            Edificio ROMAG, Calle Juan 
            Sánchez Ramírez No.27, Cotuí, 
            República Dominicana.
                </p>

              </div>

              <div className="about-image">

               < img 
               src="/images/centro.png"
               alt="Centro de Atención Renal"/>



              </div>

            </div>


        </section>



    )
}

export default AboutSection