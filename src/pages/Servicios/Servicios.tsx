import React from "react";
import "./Servicios.css"

import consultaImg from "../../assets/images/escribiendo.png";
import hemoImg from "../../assets/images/maquina.png";
import doctorImg from "../../assets/images/rosy.png";
import ContactFooter from "../../components/ContactFooter";


const Servicios = () => {
    return (
        <div className="servicios-page">

          {/*HERO*/}
            <section className="servicios-hero">
                <h1>Servicios</h1>
            </section>


           

        

          {/* ===== SECCIÓN SERVICIOS ===== */}

        <section className="servicios-section">

        {/* BLOQUE 1 */}

        <div className="servicio-item">
            <div className="servicio-img">
                <img src={hemoImg} alt="Hemodiálisis"/>
            </div>

            <div className="servicio-content">

                <span className="servicio-sub">Servicios</span>
                <h2>Hemodiálisis</h2>
                <p>
                En el Centro de Atención Renal Dr. Rosy Lanfranco ofrecemos un servicio de hemodiálisis 
                diseñado para brindar seguridad, confort y atención especializada a cada paciente. 
                Contamos con equipos modernos, protocolos actualizados y un personal médico y de enfermería 
                capacitado para garantizar un tratamiento eficaz y humano.
                </p>

                <p>
                Nuestro enfoque se basa en acompañar al paciente durante todo el proceso, velando por su 
                bienestar físico y emocional. Desde la evaluación inicial hasta el monitoreo continuo, 
                trabajamos para que cada sesión sea una experiencia digna, segura y orientada a mejorar su 
                calidad de vida.
                </p>
            </div>
        </div>



        
        {/* BLOQUE 2 */}

        <div className="servicio-item">

            <div className="servicio-content">

                <span className="servicio-sub">Servicios</span>
                <h2>Consulta de Nefrología y Medicina Interna</h2>

                <p>
                Nuestra consulta de nefrología y medicina interna está orientada a ofrecer una evaluación completa
                y personalizada para cada paciente. A través de un enfoque integral, diagnosticamos, tratamos y damos 
                seguimiento a condiciones que afectan la función renal y la salud general, priorizando una atención humana, 
                cercana y basada en evidencia médica.
                </p>
                <h4>Dentro de este servicio contamos con:</h4>

                <ul>
              <li>Electrocardiograma, para evaluar la salud cardiovascular</li>
              <li>Evaluación prequirúrgica, asegurando una valoración precisa antes de cualquier procedimiento.</li>
              <li>MAPA (Monitoreo Ambulatorio de Presión Arterial), para un control detallado de la presión arterial durante 24 horas</li>
              <li>Evaluación integral, considerando antecedentes, síntomas y resultados clínicos para un diagnóstico completo.</li>
              <li>Consulta de nutrición,  ideal para orientar, preparar y acompañar al paciente en etapas tempranas de enfermedad renal.</li>
              <li>Chequeo de hipertensión arterial, , esencial para el control y prevención de complicaciones.</li>
            </ul>
            </div>

            <div className="servicio-img">

                <img src={doctorImg} alt="Doctor"/>
                <img className="small-img" src={consultaImg} alt="Consulta"/>

            </div>

        </div>

        </section>

        <ContactFooter/>

        </div>
    )
}

export default Servicios;