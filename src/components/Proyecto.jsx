import React from "react";
import s from "./css/Proyecto.module.css";
import ReactPlayer from "react-player";
import Slide from 'react-reveal/Slide';
import country from './img/proye country.png'
import Reveal from 'react-reveal/Reveal';
import  recipe from './img/proye recipes.png'
import finder from './img/proyecto_finder.png'
const Proyecto = () => {
  return (
    <div className={s.container}>
      <div className={s.Proyecto}>
      <Reveal effect="fadeInUp">
        <h1 className={s.titulo}>Proyecto</h1>
        </Reveal>
        <Slide left>
     
        <div className={s.Proye}>
          <img
            className={s.img}
            src={country}
            alt="imf"
          />
          <ReactPlayer url="https://youtu.be/Q9du6uveAMs" width='auto'height='350px'/>
          <button>Repo</button>
         <button><a href="https://client-rose-phi.vercel.app/">Demo</a></button>
          
        </div>
        </Slide>
     
        
        <Slide left>
        <div className={s.Proye}>
          {" "}
          <img
            className={s.img}
            src={recipe}
            alt="imf"
          />
           <ReactPlayer url="https://youtu.be/P6P7q6VXmiI " width='auto' height='350px'/>
           <button>Repo</button>
         <button>Demo</button>
        </div>
        </Slide>
        <Slide left>
        <div className={s.Proye}>
          <img
            className={s.img}
            src={finder}
            alt="img"
          />
           <ReactPlayer url="https://youtu.be/pLBuFxMYkx8 " width='auto' height='350px'/>
         <button>Repo</button>
         <button>Demo</button>
        </div>
        </Slide>
      </div>
    </div>
  );
};

export default Proyecto;
