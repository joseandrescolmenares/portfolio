import React from "react";
import s from "./css/Landing.module.css";

const Landing = () => {
  return (
    <div className={s.loadingscreen}>
 <div className={s.loadinganimation}>
   <img src="https://imgur.com/FsvEuM2.png" alt="logo" className={s.logo} />
   <div className={s.loadingbar}></div>
 </div>
</div>
  );
};

export default Landing;
