import React from "react";
import fedback from './img/feedback-gracias.gif'
import s from './css/Noti.module.css'
const Noti = () => {
 return (
    <div>
        <img className={s.tamaño} src={fedback} alt="hola" />
    </div>
 )
}


export default Noti