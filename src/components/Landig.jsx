import React from "react";
import s from "./css/Landing.module.css";
import img from './img/FsvEuM2.png'

const Landing = () => {
  return (
    <div className={s.conte}>
    <div className={s.loadingscreen}>
 <div className={s.loadinganimation}>
   <img src={img} alt="logo" className={s.logo} />
   <div className={s.loadingbar}></div>
 </div>
</div>
</div>
  );
};

export default Landing;
