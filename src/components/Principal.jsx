import React, { useEffect } from "react";
import Animacion from "./Animacion";
import Proyecto from "./Proyecto";
import Carousell from "./Carousell";
import Tecnologias from "./Tecnologias";
import About from "./About";
import Fade from "react-reveal/Fade";
import s from "./css/Principal.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Principal = () => {
  const noti = () => {
    toast(
      <img className={s.noti} src="https://c.tenor.com/jKfC-mTLjdcAAAAM/shrekwelcome.gif" alt='img' />,
    
      {
        
        position: "bottom-left",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
       
      }
     
    );
  };

  useEffect(() => {
    setTimeout(() => {
      noti();
    }, 1000);
  }, []);

  return (
    <div>
      <Fade>
        <header>
          <ToastContainer/>
          <Animacion />
        </header>
      </Fade>
      <section className={s.About}>
        <About />
      </section>
      <section className={s.Proye}>
        <h1 className={s.Title}>Proyectos</h1>
        <Proyecto />
      </section>
      <section className={s.tecno}>
        <Tecnologias />
      </section>
      <section className={s.CaroTitu}>
        <div className={s.caro}>
          <h1 className={s.h1}>Certificados</h1>
          <Carousell />
        </div>
      </section>
      <footer className={s.footer}>
        <div className={s.conte_iconos}>
          <a
            href="https://www.linkedin.com/in/jose-colmenares-480074233/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={s.icono}
              src="https://img.icons8.com/color/344/linkedin.png"
              alt='img'
            />
          </a>
          <a
            href="https://github.com/joseandrescolmenares"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={s.icono}
              src="https://img.icons8.com/fluency/344/github.png"
              alt='img'
            />
          </a>
          <a
            href="https://twitter.com/Joseee_andresss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={s.icono}
              src="https://img.icons8.com/color/344/twitter-squared.png"
              alt='img'
            />
          </a>
        </div>
        <div className={s.center}>
          <a
            href="https://drive.google.com/file/d/1XLW_gth9XU0hbb_70QwiYPmp7pCA1aco/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={s.cv}
          >
            Ver cv
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Principal;
