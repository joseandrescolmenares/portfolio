import React from "react";
import style from './css/About.module.css'
import Fade from 'react-reveal/Fade';
import yo from './img/yo.jpg' 
const About = () => {
  return (
    <div className={style.contenedor}>
        
      <div className={style.conten}>
      <Fade right> 
        {" "}
        <img
        className={style.img}
          src={yo}
          alt="yo"
        />
        <div className={style.info}> 
       <p className={style.parrafo}>👋 hello! My name is Jose, I am a young web development student looking to get into technology. I like learning new technologies, being part of communities and being curious about cryptocurrencies.</p>
      <a className={style.boton} href='https://drive.google.com/file/d/1XLW_gth9XU0hbb_70QwiYPmp7pCA1aco/view?usp=sharing' target="_blank" rel="noopener noreferrer">ver CV</a>
       </div>
       </Fade>
      </div>
      
    </div>
  );
};

export default About;
