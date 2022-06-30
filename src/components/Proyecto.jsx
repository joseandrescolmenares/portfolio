import React from "react";
import s from "./css/Proyecto.module.css";
import ReactPlayer from "react-player";
import Slide from "react-reveal/Slide";
import country from "./img/proye country.png";

import recipe from "./img/proye recipes.png";
import finder from "./img/proyecto_finder.png";
const Proyecto = () => {
  return (
    <div className={s.container}>
      <div className={s.Proyecto}>
        <div className={s.Proye}>
          <img className={s.img} src={country} alt="imf" />
          <p className={s.parra}>
            Desarrollé una App Countries que incluye: búsquedas, filtrados,
            ordenamientos y creación, Usa datos traídos desde una API externa y
            también desde su propia base de datos. Desarrollé la App usando para
            el Frontend: React, Redux y CSS puro, y para el Backend : Node.js
            con Express, Base de datos en PostgreSQL y Sequelize.
          </p>
          <div className={s.botones}>
            <a
              className={s.demo}
              href="https://github.com/joseandrescolmenares/PI-Countries-main"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.icon}
                src="https://img.icons8.com/fluency/344/github.png"
                alt="proyecto"
              />
            </a>
            <a
              className={s.demo}
              href="https://client-rose-phi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.icon}
                src="https://img.icons8.com/emoji/344/link-emoji.png"
                alt="proyecto"
              />
            </a>
            <a className={s.demo}
             href="https://youtu.be/Q9du6uveAMs"
            target="_blank"
              rel="noopener noreferrer">
            
              <img
                className={s.youtube}
                src="https://img.icons8.com/material/2x/youtube.png" alt='icono'
              />
            </a>
          </div>
        </div>

        <div className={s.Proye}>
          {" "}
          <img className={s.img} src={recipe} alt="imf" />
          <p className={s.parra}>
            Se trata de una SPA, utilizando React y Redux para el Front End.
            La SPA consume datos de una API a través de un
            Back End desarrollado en Node.js utilizando Express, agregando
            nuevas funcionalidades a la API original. Algunos features del
            proyecto: Cache de búsquedas, ordenamiento y filtros, formularios
            controlados.
          </p>
          <div className={s.botones}>
            <a
              className={s.demo}
              href="https://github.com/joseandrescolmenares/food-pi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.icon}
                src="https://img.icons8.com/fluency/344/github.png"
                alt="proyecto"
              />
            </a>
            <a className={s.demo} target="_blank" rel="noopener noreferrer">
              <img
                className={s.icon}
                src="https://img.icons8.com/emoji/344/link-emoji.png"
                alt="proyecto"
              />
            </a>

            <a className={s.demo}
            href='https://youtu.be/P6P7q6VXmiI'
            target="_blank"
              rel="noopener noreferrer">
              <img
                className={s.youtube}
                src="https://img.icons8.com/material/2x/youtube.png" alt='icono'
              />
            </a>
          </div>
        </div>

        <div className={s.Proye}>
          <img className={s.img} src={finder} alt="img" />
          <p className={s.parra}>
            Esta aplicación fue Desarrollada por 7 integrantes, trabajando con
            metodología ágil Scrum, con Sprints semanales y presentaciones con
            Product Owner. Uso de tecnología React, Redux, Material UI para el
            front-end; NodeJS con Express para el back-end; PostgreSQL,
            Sequelize y Firebase para la base de datos.{" "}
          </p>
          <div className={s.botones}>
            <a
              className={s.demo}
              href="https://github.com/AlejandroColina/proyectoFinal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.icon}
                src="https://img.icons8.com/fluency/344/github.png"
                alt="proyecto"
              />
            </a>
            <a
              className={s.demo}
              href="https://finder-app-omega.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.icon}
                src="https://img.icons8.com/emoji/344/link-emoji.png"
                alt="proyecto"
              />
            </a>
            <a className={s.demo} href="https://youtu.be/50a_X2Gx3PM" target="_blank"
              rel="noopener noreferrer">
              <img
                className={s.youtube}
                src="https://img.icons8.com/material/2x/youtube.png" alt='icono'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
