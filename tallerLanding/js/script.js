/*ABRIR Y CERRAR POPUP FORMULARIO*/
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".show-form").forEach(function(btn) {
  btn.addEventListener("click", function(){
    document.querySelector(".pop-up").classList.add("active");
  });
});

document.querySelector(".pop-up .close-btn").addEventListener("click", function(){
document.querySelector(".pop-up").classList.remove("active");
});


/*ENVIAR DATOS DE FORMULARIO*/

var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("mail");
var input_submit = document.getElementById("enviar");

/*SE CLICKEO EL SUBMIIT DEL FORMULARIO*/
  input_submit.addEventListener("click", enviarForm);

  function enviarForm(event) {
    event.preventDefault();

    var valor_nombre = input_nombre.value;
    var valor_mail = input_email.value;

    console.log("Se envio el formulario");
    console.log("Nombre:", valor_nombre);
    console.log("Email:", valor_mail);
  }
});