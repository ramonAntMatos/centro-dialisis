import React from "react";
import ContactFooter from "../../components/ContactFooter";
import "./Informacion.css";

const Informacion = () => {

    return (
        <div className="informacion-page">

             {/*HERO*/}

             <section className="informacion-hero">

                <h1>Información</h1>

             </section>

             {/* TARJETA 1 */}
             <div className="info-card">
                <div className="info-icon blue">
                    <img src="/images/calendario.png" alt="horario"/>
                </div>
            
             <div className="info-content">
                <div className="line"></div>

                <h3>Horario</h3>

                <p>
                El horario de atención del centro es de <strong>lunes a sábado,
                de 8:00 a.m. a 2:00 p.m.</strong>, garantizando disponibilidad y
                continuidad en nuestros servicios.
                </p>
             </div>
        </div>


                 {/* TARJETA 2 */}

            <div className="info-card">
                <div className="info-icon red">
                    <img src="/images/mensajes.png" alt="consultas"/>
                </div>

                <div className="info-content">
                <div className="line"></div>
                <h3>Consultas Médicas</h3>
                <p>
                Nuestras consultas son ofrecidas por el<strong>Dr. Rosy Lanfranco, médico nefrólogo
                internista </strong>  con amplia experiencia en el cuidado renal y la medicina interna. 
                </p>

                <p>
                <strong>Para agendar una cita</strong>, puedes comunicarte a nuestro <strong> número directo 809-240-0291 o escribirnos 
                por WhatsApp </strong>para recibir una respuesta rápida y personalizada.
                </p>
                </div>
            </div>


               {/* TARJETA 3 */}

              <div className="info-card">
                <div className="info-icon blue">
                    <img src="/images/dialisis.png" alt="Hemodiálisis"/>
                </div>

                <div className="info-content">
                <div className="line"></div>
                <h3>Hemodiálisis</h3>
                <p>
                Para iniciar el <strong>tratamiento de hemodiálisis</strong>, el paciente <strong>debe ser evaluado previamente
                por el Dr. Rosy Lanfranco.</strong> A partir de esta valoración, se desarrolla un proceso coordinado 
                junto al paciente y su familia, orientado a garantizar una transición adecuada y segura hacia la terapia.
                </p>

            
                </div>
            </div>

{/* ============================ */}
{/* COBERTURAS CONSULTA MEDICA */}
{/* ============================ */}


<section className="ars-section">

    <div className="ars-header">

        <span>Información</span>
        <h2>Coberturas de ARS disponibles en Consulta Médica</h2>
    </div>

    <div className="ars-grid">

    <img src="/images/universal.svg" alt="Universal"/>
    <img src="/images/ARS-mapfre.svg" alt="Mapfre"/>
    <img src="/images/ARL SALUD SEGURA-01.svg" alt="ARL"/>
    <img src="/images/ars-reservas-01.svg" alt="Reservas"/>
    <img src="/images/ARS GMA-01.svg" alt="GMA"/>
    <img src="/images/senasa.png" alt="Senasa"/>
    <img src="/images/renacer.png" alt="Renacer"/>
    <img src="/images/asemap.png" alt="Asemap"/>
    <img src="/images/cmd.png" alt="CMD"/>
    <img src="/images/APS.png" alt="APS"/>
    <img src="/images/monumental.png" alt="Monumental"/>
    <img src="/images/ARS-Semma-01.svg" alt="Ars Semma"/>
    <img src="/images/futuro.png" alt="Futuro"/>
    <img src="/src/assets/ars/logoARSprimera.svg" alt="Primera"/>
    <img src="/images/humano.png" alt="Humano"/>
    <img src="/images/ars/MetaSalud.png" alt="MetaSalud"/>




    </div>


</section>

{/* ============================ */}
{/* COBERTURAS HEMODIALISIS */}
{/* ============================ */}

<section className="ars-section">

  <div className="ars-header">
    <span>Información</span>
    <h2>Coberturas de ARS disponibles en Hemodiálisis</h2>
  </div>

  <div className="ars-grid">
    <img src="/src/assets/ars/humano.png" alt="Humano"/>
    <img src="/src/assets/ars/senasa.png" alt="Senasa"/>
    <img src="/src/assets/ars/cmd.png" alt="CMD"/>
    <img src="/src/assets/ars/ARS-mapfre.svg" alt="Mapfre"/>
    <img src="/src/assets/ars/metasalud.png" alt="MetaSalud"/>
    <img src="/src/assets/ars/monumental.png" alt="Monumental"/>
    <img src="/src/assets/ars/ARS-Semma-01.svg" alt="Ars Semma"/>
    <img src="/src/assets/ars/asemap.png" alt="Asemap"/>
  </div>

</section>
        

<ContactFooter/>




   
        </div>

     

    )
}

export default Informacion;
