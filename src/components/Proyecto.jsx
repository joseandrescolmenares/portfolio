import React from "react";
import s from "./css/Proyecto.module.css";
import ReactPlayer from "react-player";
import Roll from 'react-reveal/Roll';
import Zoom from "react-reveal/Zoom";
import Wobble from 'react-reveal/Wobble';
const Proyecto = () => {
  return (
    <div className={s.container}>
      <div className={s.Proyecto}>
      <Wobble>
        <h1 className={s.titulo}>Proyecto</h1>
        </Wobble>
        <Zoom>
     
        <div className={s.Proye}>
          <img
            className={s.img}
            src="https://1.bp.blogspot.com/-OONwIqLJAE0/YCH249Alt2I/AAAAAAAAIzQ/7moXO_wK3pMxyug7CTWW6qZWb05sV3MAACNcBGAsYHQ/s16000/trabajos-mas-demandados-en-brasil-en-2021.jpg"
            alt="imf"
          />
          {/* <ReactPlayer url="https://youtu.be/pLBuFxMYkx8 " width='auto'height='auto'/> */}
          
          
        </div>
        </Zoom>
     
        <Zoom>
     
        <div className={s.Proye}>
          {" "}
          <img
            className={s.img}
            src="https://1.bp.blogspot.com/-OONwIqLJAE0/YCH249Alt2I/AAAAAAAAIzQ/7moXO_wK3pMxyug7CTWW6qZWb05sV3MAACNcBGAsYHQ/s16000/trabajos-mas-demandados-en-brasil-en-2021.jpg"
            alt="imf"
          />
           {/* <ReactPlayer url="https://youtu.be/pLBuFxMYkx8 " width='auto' height='auto'/> */}
         
        </div>
        </Zoom>
        <Zoom>
        <div className={s.Proye}>
          <img
            className={s.img}
            src="https://1.bp.blogspot.com/-OONwIqLJAE0/YCH249Alt2I/AAAAAAAAIzQ/7moXO_wK3pMxyug7CTWW6qZWb05sV3MAACNcBGAsYHQ/s16000/trabajos-mas-demandados-en-brasil-en-2021.jpg"
            alt="img"
          />
           {/* <ReactPlayer url="https://youtu.be/pLBuFxMYkx8 " width='auto' height='auto'/> */}
        
        </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Proyecto;
