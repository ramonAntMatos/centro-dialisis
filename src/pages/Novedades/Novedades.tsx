import React from "react";
import "./Novedades.css";


import edificioImg from  "../../assets/images/centro.png";
import img1 from  "../../assets/images/novedades1.png";
import img2 from  "../../assets/images/novedades2.png";
import img3 from  "../../assets/images/novedades3.png";
import img4 from  "../../assets/images/novedades6.png";
import img5 from  "../../assets/images/novedades4.png";
import img6 from  "../../assets/images/novedades5.png";
import ContactFooter from "../../components/ContactFooter";

const Novedades = () => {

    return(

        <div className="novedades-page">

            {/*HERO*/}


        <section className="novedades-hero">

            <h1>Novedades</h1>


        </section>

         {/* ===== SECCIÓN NOVEDADES ===== */}



         <section className="novedades-section">

            <div className="novedades-item">

                <div className="novedades-content">


                <span className="novedades-sub">Novedades</span>

                <h2>Edificio ROMAG</h2>

                <p>
                El Edificio <strong>ROMAG</strong> es un espacio moderno concebido para integrar 
                servicios de salud y actividades profesionales en un entorno funcional, 
                cómodo y bien estructurado. Diseñado para responder a las  necesidades 
                actuales de atención médica especializada, el edificio reúne en un mismo 
                lugar a distintos centros de salud, favoreciendo una experiencia organizada 
                y accesible para pacientes y profesionales.  
                </p>

                <p>
                Sus instalaciones cuentan con <strong>el Centro de Atención Renal Dr. Rosy Lanfranco</strong> , 
                la clínica estética <strong>ATMAN CLINIC </strong> y <strong>el Centro de Endocrinología Dra. Ovando</strong>, 
                cada uno con áreas adecuadas para la prestación de servicios, cumpliendo 
                criterios de orden, privacidad y eficiencia.  
                </p>

                <p>
                En conjunto, el Edificio ROMAG se consolida como una infraestructura pensada para
                apoyar la atención integral, el intercambio de conocimientos y el fortalecimiento de 
                los servicios de salud en la provincia.    
                </p>

              

                </div>


                <div className="novedades-img">

<img src={edificioImg} alt="edificio"/>

<img src={edificioImg} alt="edificio"/>



                </div>



            </div>

         </section>

{/* ===================== */}
{/* ÚLTIMAS NOTICIAS */}
{/* ===================== */}


  <section className="noticias-section">

    <div className="noticias-header">

        <span>Novedades</span>

        <h2>Últimas noticias</h2>

        <p>
      Un espacio destinado a compartir información actualizada sobre actividades,
      acontecimientos y avances relevantes que reflejan nuestro compromiso
      permanente con la excelencia y el cuidado de la salud renal.
        </p>
    </div>

    <div className="noticias-grid">

        <a href="https://www.instagram.com/p/DRSPqDSkSXl/?igsh=MXNia2RqaWsxOGU3bQ%3D%3D"  target="_blank" className="noticia-card">
            <img src={img1} alt="noticia"/>
            <div className="noticia-content">
            <p>Jornada de vacunación contra la Influenza y el Neumococo.</p>
            </div>
        </a>

        <a href="https://www.instagram.com/p/DP-RcyKDAO_/?igsh=MWhpNGc2ZDV5Nm0%3D0" target="_blank" className="noticia-card">
      <img src={img2} alt="noticia" />
      <div className="noticia-content">
        <p>Conferencia Hábitos saludables para prevenir el cáncer de mamá.</p>
      </div>
    </a>

    <a href="https://www.instagram.com/reel/DK0YxIERgH8/?igsh=MXhtZmw2amducXFxYw%3D%3D" target="_blank" className="noticia-card">
      <img src={img3} alt="noticia" />
      <div className="noticia-content">
        <p>La hidratación diaria es una necesidad.</p>
      </div>
    </a>

    <a href="https://www.instagram.com/reel/DH_OinvxTFd/?igsh=NXZjcWEweHk2eHh2" target="_blank" className="noticia-card">
      <img src={img4} alt="noticia" />
      <div className="noticia-content">
        <p>Vocación por el servicio.</p>
      </div>
    </a>

    <a href="https://www.instagram.com/p/DHeuPQXxJlT/?igsh=d3hsczl4bmN1cnNr" target="_blank" className="noticia-card">
      <img src={img5} alt="noticia" />
      <div className="noticia-content">
        <p>Conferencia en la Universidad UTECO sobre la Enfermedad Renal Crónica.</p>
      </div>
    </a>

    <a href="https://www.instagram.com/p/DR3Py9jDAUa/?igsh=MWkycmRkNTAzeGJ5dA%3D%3D" target="_blank" className="noticia-card">
      <img src={img6} alt="noticia" />
      <div className="noticia-content">
        <p>Nuestro equipo se une para darte la bienvenida a la época más especial del año.</p>
      </div>
    </a>

    </div>

  </section>

  <ContactFooter/>

        </div>
    )
    
}

export default Novedades;