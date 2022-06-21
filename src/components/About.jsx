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
       <p>👋 hello! My name is Jose, I am a young web development student looking to get into technology. I like learning new technologies, being part of communities and being curious about cryptocurrencies.</p>
      <button className={style.boton}>Ver cv</button>
       </div>
       </Fade>
      </div>
      
    </div>
  );
};

export default About;
