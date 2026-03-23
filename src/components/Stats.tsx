import Counter from "./Counter";
import "../styles/main.css"
import React from "react";




const Stats = ( ) => {
    return (
        <section className="hero-stats">

<div className="stat-card">
  <div className="stat-icon-box">
    <img
      src="/src/assets/images/persona.png"
      alt="Pacientes"
    />
  </div>

  <div className="stat-text">
    <Counter end={2000} />
    <p>Pacientes</p>
  </div>
</div>

<div className="stat-card">
  <div className="stat-icon-box">
    <img
      src="/src/assets/icons/rinones.png"
      alt="Procedimientos"
    />
  </div>

  <div className="stat-text">
    <Counter end={2000} />
    <p>Procedimientos Realizados</p>
  </div>
</div>


<div className="stat-card">
  <div className="stat-icon-box">
    <img
      src="/src/assets/icons/servicios.png"
      alt="Procedimientos"
    />
  </div>

  <div className="stat-text">
    <Counter end={2000} />
    <p>Servicios Medicos</p>
  </div>
</div>

         

          


        </section>
    )

}

export default Stats