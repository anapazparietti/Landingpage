
/*ABRIR Y CERRAR POPUP FORMULARIO*/

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".show-form").forEach(function(btn) {
  btn.addEventListener("click", function(){
    document.querySelector(".pop-up").classList.add("active");
  });

});

var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("mail");
var input_submit = document.getElementById("enviar");

document.querySelector(".pop-up .close-btn").addEventListener("click", function(){
document.querySelector(".pop-up").classList.remove("active");
});

/*SE CLICKEO EL SUBMIIT DEL FORMULARIO*/
  var formulario = document.querySelector("form");
  formulario.addEventListener("submit", enviarForm);

  function enviarForm(event) {
    event.preventDefault();

    var valor_nombre = document.getElementById("nombre").value;
    var valor_mail = document.getElementById("mail").value;

    localStorage.setItem("nombre", valor_nombre);
    localStorage.setItem("email", valor_mail);

    console.log("Se envio el formulario");
    console.log("Nombre:", valor_nombre);
    console.log("Email:", valor_mail);

   setTimeout(function() {
    window.location.href = "feedback.html";
    }, 1000); // Espera 1 segundo antes de redirigir
  }

  localStorage.removeItem("nombreUsuario");
  localStorage.removeItem("emailUsuario");
});