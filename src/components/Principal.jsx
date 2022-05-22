import React from "react";
import Animacion from "./Animacion";
import Proyecto from "./Proyecto";
import Carousell from "./Carousell";
import Tecnologias from "./Tecnologias";
import Fade from "react-reveal/Fade";
import s from "./css/Principal.module.css";
const Principal = () => {
  return (
    <div>
      <Fade>
        <header>
          <Animacion />
          <ul>
               <li></li>
               <li></li>
               <li></li>
           </ul>
           
        </header>
      </Fade>
      <section className={s.Proye}>
        <Proyecto />
      </section>
      <section className={s.tecno}>
        <h1 className={s.titu}>Tenologias</h1>
        <Tecnologias />
      </section>
      <section>
        <h1 className={s.tituCa}>Certificados</h1>
        <div className={s.caro}>
          <Carousell />{" "}
        </div>
      </section>
    </div>
  );
};

export default Principal;
