import React from "react";
import { useState } from "react";
import "./Galeria.css";

import img1 from "../../assets/images/imagen6.png";
import img2 from "../../assets/images/imagen7.png";
import img3 from "../../assets/images/imagen8.png";
import img4 from "../../assets/images/imagen9.png";
import img5 from "../../assets/images/imagen10.png";
import img6 from "../../assets/images/imagen11.png";
import img7 from "../../assets/images/imagen12.png";
import img8 from "../../assets/images/imagen13.png";
import img9 from "../../assets/images/imagen14.png";
import img10 from "../../assets/images/mesa de trabajo 2.png";
import img11 from "../../assets/images/imagen15.png";
import img12 from "../../assets/images/imagen16.png";

const images = [img1, img2, img3, img4,
               img5, img6, img7, img8,
               img9, img10, img11, img12];

               const ITEMS_PER_PAGE = 6;
               

export default function TrayectoriaGrid() {
    const [page, setPage] = useState(0);

    const totalPages = Math.ceil (images.length / ITEMS_PER_PAGE);

    const next = () => {
        setPage((p) => (p + 1) % totalPages);
    };


    const prev = () => {
        setPage((p) => (p - 1 + totalPages) % totalPages) ;
    };


    const start = page * ITEMS_PER_PAGE;
    const visibleImages = images.slice(start, start + ITEMS_PER_PAGE);

    return (

        <div className="galeria-section">

            <div className="galeria-header">

               <p className="subtitulo">Galería de fotos</p>
               <h2>Instantes que cuentan nuestra historia</h2>

            </div>

       
        <div className="galeria-wrapper">
            <button className="arrow left" onClick={prev}>❮</button>

            <div className="galeria-grid">
                {visibleImages.map ((img, i) => (
                    <div className="grid-item" key={i}>
                        <img src={img} alt="Trayectoria" />
                    </div>
                ))}
            </div>


<button className="arrow right" onClick={next}>❯</button>

        </div>

        </div>

       
    );


  
    
  }
  