import React from "react";
import Animacion from "./Animacion";
import Proyecto from "./Proyecto";
import Carousell from "./Carousell";
import Tecnologias from "./Tecnologias";
import About from "./About";
import Fade from "react-reveal/Fade";
import s from "./css/Principal.module.css";
const Principal = () => {
  return (
    <div>
      <Fade>
        <header>
          <Animacion />
        </header>
      </Fade>
      <section>
        <About />
      </section>
      <section className={s.Proye}>
        <Proyecto />
      </section>
      <section className={s.tecno}>
      
       
        <Tecnologias />
       
      </section>
      <section className={s.CaroTitu}>
        <div className={s.caro}>
          <Carousell />
        </div>
      </section>
    </div>
  );
};

export default Principal;
