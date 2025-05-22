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

/*ANIMACIÓN MARQUEE*/
function Marquee(selector, speed) {
    const marquee = document.querySelector(selector);
    const track = marquee.querySelector('.track');
    const content = track.innerHTML;

    // Duplicar el contenido para efecto continuo
    track.innerHTML += ' ' + content;

    let position = 0;

    function animate() {
      position -= speed;
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }

  window.addEventListener('load', function () {
    Marquee('.marquee', 0.5); 
  });