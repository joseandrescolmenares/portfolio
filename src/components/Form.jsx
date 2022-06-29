import React from "react";
import s from "./css/Form.module.css";
import { TextField } from "@material-ui/core";
import emailjs from "@emailjs/browser";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Noti from './Noti'
const Form = ({ abrirCerrarModal }) => {
  
  

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yquthlf",
        "template_u8se0t9",
        e.target,
        "2I82ak1lECf_Cl7Uh"
      )
      .then(toast(<Noti/>, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    }),abrirCerrarModal() )
      .catch(error => (console.log(error)));
  };

  return (
    <div className={s.container}>
      <h1 className={s.titu}>deja tu Feedback aqui 👇</h1>
      <form className={s.Form} onSubmit={(e) => sendEmail(e)}>
        <div>
          <TextField
            className={s.input}
            type="text"
            variant="filled"
            label="nombre"
            name="user_name"
          />
        </div>
        <div>
          <TextField
            className={s.input}
            type="text"
            variant="filled"
            label="correo"
            name="user_email"
          />
        </div>
        <div>
          <TextField
            className={s.input}
            variant="filled"
            label="Feedback"
            multiline
            minRows="3"
            name="user_message"
          />
        </div>

        <button className={s.botonForm}>Enviar</button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Form;
