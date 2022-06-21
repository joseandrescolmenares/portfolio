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
      <footer className={s.footer}>
        <div className={s.conte_iconos}>
          <a href="https://www.linkedin.com/in/jose-colmenares-480074233/" target="_blank" rel="noopener noreferrer">
            <img
              className={s.icono}
              src="https://img.icons8.com/color/344/linkedin.png"
            />
          </a>
          <a href="https://github.com/joseandrescolmenares" target="_blank" rel="noopener noreferrer">
            <img
              className={s.icono}
              src="https://img.icons8.com/fluency/344/github.png"
            />
          </a>
          <a href="https://twitter.com/Joseee_andresss" target="_blank" rel="noopener noreferrer">
            <img
              className={s.icono}
              src="https://img.icons8.com/color/344/twitter-squared.png"
            />
          </a>
        </div>
        <div className={s.center}>
          <button className={s.cv}>Ver cv</button>
        </div>
      </footer>
    </div>
  );
};

export default Principal;
