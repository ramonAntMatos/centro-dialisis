import React from "react";
import ContactFooter from "../../components/ContactFooter";
import Galeria from "./Galeria";
import "./Nosotros.css"
import TrayectoriaCarousel from "./TrayectoriaCarousel";


const Nosotros = () => {
    return (
    
    
    <div className="nosotros-page">

      {/* HERO AZUL */}
      <section className="nosotros-hero">

        <h1>NOSOTROS</h1>

      </section>

        {/* CONTENIDO */}

        <section className="nosotros-content container">

          <p className="about-small">Acerca de nosotros</p>
          <h2 className="about-title">Comprometidos con tu bienestar integral</h2>

          <div className="nosotros-grid">

             {/* Imagen */}

             <div className="nosotros-img"></div>

             {/* Filosofía */}

             <div className="nosotros-filofia">

              <h3>Nuestra filosofía</h3>

              <div className="filo-item">

              <h4>Visión</h4>
              <p>
                Ser un centro de salud renal sostenible, referente en la provisión
                de servicios de atención renal de calidad, tanto a nivel nacional
                como internacional.
              </p>

              </div>

              <div className="filo-item">
              <h4>Misión</h4>
              <p>
                Garantizar a nuestros usuarios un servicio de salud oportuno y de
                calidad, satisfaciendo sus necesidades por encima de sus
                expectativas, utilizando tecnología, promoviendo el desarrollo
                profesional de nuestros colaboradores.
              </p>
            </div>

             </div>

          </div>

          {/* Valores */}
        <div className="valores">
          <h3>Valores</h3>
          <p><strong>Amor a Dios:</strong> Somos fieles creyentes en la existencia de Dios, creador y dueño de todo cuanto existe, nos debemos a su amor y por eso cumplimos con el mandamiento de amar a Dios sobre todas las cosas.</p>
          <p><strong>Respeto por el ser humano:</strong> El ser humano es nuestra razón de existencia como institución, cuidamos y respetamos la gente, que es lo mismo que cuidar de nosotros.</p>
          <p><strong>Cuidado del medio ambiente:</strong> Estamos conscientes de que el cuidado del medio ambiente es nuestra responsabilidad, actuamos como promotores y vigilantes de las buenas prácticas ambientales en nuestro entorno.</p>
          <p><strong>Seguridad en el trabajo:</strong> Nuestra seguridad física y buen estado de salud, garantiza nuestra estabilidad en todos los aspectos, nos apegamos a las normas que regulan la materia y promovemos las buenas prácticas de higiene y seguridad en el ambiente de trabajo.</p>
          <p><strong>Calidad en el servicio:</strong> Estamos dispuestos a entregar calidad a todos los que demandan nuestros servicios, nos esforzamos por dar a nuestros usuarios, todo aquello que quisiéramos recibir.</p>
          <p><strong>Eficiencia económica:</strong> La sostenibilidad permite la permanencia de las instituciones, invertimos el tiempo y los recursos en lo necesario e indispensable, garantizando el bienestar de todos los que se vinculan a nosotros.</p>
        </div>

        </section>


        <section className="fundadores-section">

          <div className="fundadores-container">

            <div className="fundadores-grid">
              <div className="fundadores-text">
                <h2>Nuestros fundadores</h2>

                <p>
                El Centro de Atención Renal Dr. Rosy Lanfranco fue fundado el 24 de marzo del año 2018 por el Dr. Rosy Lanfranco, médico nefrólogo internista, junto a su esposa la Lic. Magalis Rondón, como respuesta a la necesidad de un servicio especializado en salud renal en la provincia Sánchez Ramírez.
       
                </p>


                <p>
          Desde su origen, ambos compartieron la visión de crear un espacio enfocado en brindar una atención cercana y confiable a la comunidad.
                </p>

                <p>
          Este compromiso ha impulsado el crecimiento continuo del centro y reafirma la vocación de sus fundadores de contribuir al bienestar y la calidad de vida de las personas a través de una atención médica integral.
        </p>
              </div>

              <div className="fundadores-image">

                <img src="/src/assets/images/romag.png" alt="Fundadores"/>

              </div>
            </div>

            <div className="trayectoria">
              <h2>Nuestra trayectoria</h2>

              <p>
              Conoce el origen y el camino que han dado forma a nuestro compromiso con la salud renal.
              </p>

            </div>

          </div>

        </section>

        <TrayectoriaCarousel />


        <section className="historia-section">

        <div className="historia-conatainer">

<div className="historia-text">
    <p>
    El Centro de Atención Renal Dr. Rosy Lanfranco nació el 24 de marzo del año 2018 como la materialización de un 
    sueño. Su fundador,el Dr. Rosy Lanfranco, médico nefrólogo internista, junto a su esposa Magdalisa  Rondón,
    identificaron la necesidad urgente de contar con un espacio especializado para el cuidado del riñón en la 
    provincia Sánchez Ramírez. Su visión fue crear un centro que combinara calidad médica,  atención humana y
    tecnología adecuada para ofrecer un servicio confiable y cercano a la comunidad.
    </p>




    <p>
    Con el paso del tiempo, el proyecto creció. En el año 2023 fueron inauguradas las nuevas instalaciones en el Edificio ROMAG, una obra impulsada por los 
    mismos fundadores para ofrecer un espacio moderno que reuniera a profesionales de distintas áreas de la salud en un solo lugar. Este edificio alberga 
    hoy al Centro de Atención Renal Dr. Rosy Lanfranco, la clínica estética ATMAN CLINIC y el Centro de Endocrinología Dra. Ovando, además de contar con 
    un amplio salón de eventos destinado a actividades académicas y comunitarias.
    </p>
    

<p>

    Cada etapa de este crecimiento reafirma el compromiso de sus fundadores con elevar la calidad de los servicios de salud en la provincia y contribuir 
    al bienestar integral de sus habitantes.
    </p>

</div>



</div>

        </section>

        <Galeria/>


        <ContactFooter/>



    </div>);
  };
  
  export default Nosotros;
