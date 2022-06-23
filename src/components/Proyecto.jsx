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
        <h1 className={s.titulo}>Proyectos</h1>
        </Reveal>
        <Slide left>
     
        <div className={s.Proye}>
          <img
            className={s.img}
            src={country}
            alt="imf"
          />
          <ReactPlayer url="https://youtu.be/Q9du6uveAMs" width='auto'/>
          <div className={s.botones}> 
           <a className={s.demo} href="https://github.com/joseandrescolmenares/PI-Countries-main" target="_blank" rel="noopener noreferrer"><img className={s.icon} src="https://img.icons8.com/fluency/344/github.png"/></a>
         <a className={s.demo} href="https://client-rose-phi.vercel.app/" target="_blank" rel="noopener noreferrer"><img className={s.icon} src="https://img.icons8.com/emoji/344/link-emoji.png"/></a>
       
         </div>
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
           <ReactPlayer url="https://youtu.be/P6P7q6VXmiI " width='auto'/>
           <div className={s.botones}> 
            <a className={s.demo} href="https://github.com/joseandrescolmenares/food-pi" target="_blank" rel="noopener noreferrer"><img className={s.icon} src="https://img.icons8.com/fluency/344/github.png"/></a>
         <a className={s.demo} target="_blank" rel="noopener noreferrer"><img className={s.icon} src="https://img.icons8.com/emoji/344/link-emoji.png"/></a>
         </div>
        </div>
        </Slide>
        <Slide left>
        <div className={s.Proye}>
          <img
            className={s.img}
            src={finder}
            alt="img"
          />
           <ReactPlayer url="https://youtu.be/50a_X2Gx3PM" width='auto'/>
           <div className={s.botones}> 
         <a className={s.demo} href="https://github.com/AlejandroColina/proyectoFinal" target="_blank" rel="noopener noreferrer"><img className={s.icon} src="https://img.icons8.com/fluency/344/github.png"/></a>
         <a className={s.demo} href="https://finder-app-omega.vercel.app/" target="_blank" rel="noopener noreferrer"><img className={s.icon} src="https://img.icons8.com/emoji/344/link-emoji.png"/></a>
         </div>
        </div>
        </Slide>
      </div>
    </div>
  );
};

export default Proyecto;
