"use strict";

window.addEventListener("load", function () {
  const name = document.getElementById("name");
  const last_name = document.getElementById("last_name");
  const mail = document.getElementById("mail");
  const subject = document.getElementById("subject");
  const mensaje = document.getElementById("mensaje");

  //Declarando mensajes de error
  const error_name = document.getElementById("error_name");
  const error_last_name = document.getElementById("error_last_name");
  const error_mail = document.getElementById("error_mail");
  const error_subject = document.getElementById("error_subject");
  const error_mensaje = document.getElementById("error_mensaje");

  function mouseenter(input) {
    input.style.animation = "inputs_enter .2s forwards";
  }

  function mouseleave(input, error) {
    if (input.value === "") {
      input.style.animation = "inputs_out .2s forwards";
      error.style.display = "block";
    } else {
      error.style.display = "none";
    }
  }

  name.addEventListener("mouseenter", () => {
    mouseenter(name);
  });
  last_name.addEventListener("mouseenter", () => {
    mouseenter(last_name);
  });
  mail.addEventListener("mouseenter", () => {
    mouseenter(mail);
  });
  subject.addEventListener("change", () => {
    mouseenter(subject);
  });
  mensaje.addEventListener("mouseenter", () => {
    mouseenter(mensaje);
  });

  name.addEventListener("mouseleave", () => {
    mouseleave(name, error_name);
  });
  last_name.addEventListener("mouseleave", () => {
    mouseleave(last_name, error_last_name);
  });
  mail.addEventListener("mouseleave", () => {
    mouseleave(mail, error_mail);
  });
  subject.addEventListener("mouseleave", () => {
    mouseleave(subject, error_subject);
  });
  mensaje.addEventListener("mouseleave", () => {
    mouseleave(mensaje, error_mensaje);
  });

  const submit = document.querySelector("#submit");
  submit.addEventListener("click", () => {
    const mail_section = document.getElementById("mail_section");
    const mail_sent = document.getElementById("mail_sent");
    if (
      name.value === "" ||
      last_name.value === "" ||
      mail.value === "" ||
      mensaje.value === ""
    ) {
      submit.style.animation = "submit_error .2s forwards";
      submit.value = "Verifica tus datos";

      setTimeout(() => {
        submit.style.animation = "submit_error_retunr 1s backwards";
        submit.value = "Contactar!";
      }, 3000);
    } else {
      submit.style.animation = "submit_successful 1s forwards";
      submit.value = "Mensaje Enviado";

      setTimeout(() => {
        mail_section.style.display = "none";
        mail_sent.style.display = "grid";
      }, 3000);
    }
  });
});
