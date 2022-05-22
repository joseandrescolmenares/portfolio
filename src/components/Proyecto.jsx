import React from "react";
import s from "./css/Proyecto.module.css";
import ReactPlayer from "react-player";
const Proyecto = () => {
  return (
    <div className={s.container}>
      <div className={s.Proyecto}>
        <h1 className={s.titulo}>Proyecto</h1>
        <div className={s.Proye}>
          <img
            className={s.img}
            src="https://1.bp.blogspot.com/-OONwIqLJAE0/YCH249Alt2I/AAAAAAAAIzQ/7moXO_wK3pMxyug7CTWW6qZWb05sV3MAACNcBGAsYHQ/s16000/trabajos-mas-demandados-en-brasil-en-2021.jpg"
            alt="imf"
          />
          <ReactPlayer url="https://youtu.be/pLBuFxMYkx8 " width='580px'/>
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          nesciunt quod hic laborum nisi repellendus iure excepturi perspiciatis
          modi, nihil totam, quasi ipsam iste. Harum numquam voluptatum
          doloribus deserunt consequatur.
        </div>
        <div className={s.Proye}>
          {" "}
          <img
            className={s.img}
            src="https://1.bp.blogspot.com/-OONwIqLJAE0/YCH249Alt2I/AAAAAAAAIzQ/7moXO_wK3pMxyug7CTWW6qZWb05sV3MAACNcBGAsYHQ/s16000/trabajos-mas-demandados-en-brasil-en-2021.jpg"
            alt="imf"
          />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quam,
          ipsam ex laudantium porro nobis quae nemo eveniet, sunt expedita
          voluptas debitis autem veritatis consequatur commodi, sint sed.
          Tenetur, suscipit?
        </div>
        <div className={s.Proye}>
          <img
            className={s.img}
            src="https://1.bp.blogspot.com/-OONwIqLJAE0/YCH249Alt2I/AAAAAAAAIzQ/7moXO_wK3pMxyug7CTWW6qZWb05sV3MAACNcBGAsYHQ/s16000/trabajos-mas-demandados-en-brasil-en-2021.jpg"
            alt="img"
          />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          minus, ea eaque perspiciatis facilis architecto temporibus tempora
          rerum est cum hic distinctio veritatis rem sed nihil soluta
          accusantium porro alias!
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
