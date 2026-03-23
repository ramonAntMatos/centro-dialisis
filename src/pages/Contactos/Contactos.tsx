import React, { useState } from "react";
import "./Contactos.css";

import whatsappIcon from "../../assets/icons/iconowhatsapp.png";
import telefonoIcon from "../../assets/icons/iconotelefono.png";
import correoIcono from "../../assets/icons/icono correo.png"
import ubicacionIcono from "../../assets/icons/icono ubicacion.png"
import ContactFooter from "../../components/ContactFooter";



const Contactos = () => {

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: ""
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        const message = `Hola, mi nombre es ${formData.nombre}.
    Email: ${formData.email}
    Asunto: ${formData.asunto}
    Mensaje: ${formData.mensaje}`;
    
        const url = `https://wa.me/18092400291?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      };

      return (
    <div className="contacto-page">
        {/*HERO*/}
        <section className="contacto-hero">
            <h1>Contacto</h1>
        </section>
        {/* SECCIÓN FORMULARIO */}
        <section className="contacto-section">
            <div className="contacto-container">
                 {/* FORMULARIO */}
                 <div className="contacto-form">
                    <span>Contáctanos</span>
                    <h2>Para consultas o preguntas</h2>
                   <p>
                   Por favor, usa el formulario o llámanos al +1-809-240-0291
                   o escríbenos a atencionrenal@gmail.com
                   </p>
                   <form onSubmit={handleSubmit}>
                   <div className="form-group">
                    <label>Nombre</label>
                    <input
                    type= "text"
                    name="nombre"
                    onChange={handleChange}
                    required
                    />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                    <input
                    type = "email"
                    name="email"
                    onChange={handleChange}
                    required/>
                    </div>
                    <div className="form-group">
                      <label>Asunto</label>
                    <input
                    type = "text"
                    name ="asunto"
                    onChange={handleChange}
                    required/>
                    </div>
                    <div className="form-group">
                      <label>Mensaje</label>
                    <textarea
                    name="mensaje"
                    rows= {5}
                    onChange={handleChange}
                    required/>
                    </div>
                    <button type="submit">Enviar Mensaje</button>
                   </form>
                 </div>


                 
                  {/* BOTONES LATERALES */}
                  <div className="contacto-icons">
                  <div
                  className="contacto-icon"
                  onClick={() => window.open("https://wa.me/18092400291", "_blank")}
                   >
                  <img src={whatsappIcon} alt="WhatsApp" />
                    </div>
                    <div className="contacto-icon"
                    onClick={() => window.open("https://wa.me/18092400291", "_blank")}>
                    <img src={telefonoIcon} alt="Teléfono" />
                    </div>
                    <div
                     className="contacto-icon"
                     onClick={() => window.location.href = "mailto:atencionrenal@gmail.com"}
                     >
                     <img src={correoIcono} alt="Email" />
                     </div>
                     <div
                     className="contacto-icon"
                     onClick={() => window.open("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1222492144416!2d-70.15376698963182!3d19.05836195245237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eafcf3f8bb2d31b%3A0xd2300bf10e48e207!2sCentro%20De%20Atencion%20Renal%20Dr%20Rosy%20Lanfranco!5e0!3m2!1ses-419!2sdo!4v1770333764994!5m2!1ses-419!2sdo", "_blank")}
                     >
                     <img src={ubicacionIcono} alt="Ubicación" />
                    </div>
                  </div>
            </div>


           

            



        </section>

        <ContactFooter/>


    </div>

)

   
    }

export default Contactos;