import React, { useState } from "react";
import "./Trayectoria.css";

import img1 from "../../assets/images/trayectoria1.png";
import img2 from "../../assets/images/trayectoria2.png";
import img3 from "../../assets/images/imagen3.png";
import img4 from "../../assets/images/imagen4.png";


const images = [img1, img2, img3, img4];

export default function TrayectoriaCarousel() {

  const [groupIndex, setGroupIndex] = useState(0);
  const totalGroups = Math.ceil(images.length / 2);

  const prev = () => {
    setGroupIndex((i) => (i === 0 ? totalGroups - 1 : i - 1));
  };

  const next = () => {
    setGroupIndex((i) => (i === totalGroups - 1 ? 0 : i + 1));
  };

  return (
    <div className="trayectoria-carousel">

      <button className="arrow left" onClick={prev}>❮</button>

      <div className="carousel-window">
        <div className="carousel-track">

          {images.slice(groupIndex * 2, groupIndex * 2 + 2).map((img, i) => (
            <img key={i} src={img} alt="Trayectoria" />
          ))}

        </div>
      </div>

      <button className="arrow right" onClick={next}>❯</button>

    </div>
  );
}