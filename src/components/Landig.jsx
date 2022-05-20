import React from "react";
import s from "./css/Landing.module.css";

const Landing = () => {
  return (
    <div>
      <section className={s.estrellas}>
        <div className={s.stars}></div>
        <div className={s.stars2}></div>
        <div className={s.stars3}></div>
      </section>
      <section className={s.naves}>
        <article className={s.nave}>
          <header></header>
          <section className={s.cuerpo}>
            <div className={s.cont}></div>
            <div className={s.escotilla}>
              <div className={s.vent}>
                <div className={s.vent}>
                  <div className={s.vent}></div>
                </div>
              </div>
            </div>
            <div className={s.texto}>texto</div>
          </section>
          <footer>
            <div className={s.cola}>
              <div className={s.vent}></div>
            </div>

            <div className={s.patacent}>
              <div className={s.vent}></div>
            </div>

            <div>
              <div className={s.vent}></div>
            </div>
            <div className={s.pie}>
              <div className={s.vent}></div>
            </div>
            <div className={s.flame}>
              <div className={s.vent}></div>
            </div>
          </footer>
        </article>
      </section>
    </div>
  );
};

export default Landing;
