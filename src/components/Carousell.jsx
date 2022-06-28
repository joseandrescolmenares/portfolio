import React from "react";
import { Navigation, Pagination, Scrollbar, Thumbs } from "swiper";
import s from "./css/Carousell.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/thumbs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import aprender from "./img/aprender.png";
import basico from "./img/basico de javascript.png";
import css from "./img/css gripd.png";
import curso from "./img/curso de prewor.png";
import definitivo from "./img/definitivo.png";
import esructurado from "./img/estructurado.png";
import fundamento from "./img/fundamentos de ing.png";
import html from "./img/hatml.png";
import maqueta from "./img/maquetacion.png";
import masGrid from "./img/mas grid.png";
import seguridad from "./img/mas seguridad.png";
import poo from "./img/orientada a objeto.png";
import masSeguridad from "./img/seguridad.png";
import henry from './img/titulo.png'

function Carousell() {

 

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar,Thumbs]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className={s.caro}
    >
        <SwiperSlide>
        {<img src={henry} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={aprender} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={basico} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={css} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={curso} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={definitivo} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={esructurado} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={fundamento} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={html} alt="certificado" className={s.img} />}{" "}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={maqueta} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={masGrid} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={seguridad} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={poo} alt="certificado" className={s.img} />}
      </SwiperSlide>
      <SwiperSlide>
        {<img src={masSeguridad} alt="certificado" className={s.img} />}
      </SwiperSlide>
     
      .............
    </Swiper>
  );
}

export default Carousell;
