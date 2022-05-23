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
       <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et quo alias voluptate? Delectus, pariatur omnis aperiam dolore perspiciatis sint. Ducimus perspiciatis, facere nobis eveniet reiciendis vitae rem quibusdam accusantium.</p>
       </Fade>
      </div>
     
    </div>
  );
};

export default About;
