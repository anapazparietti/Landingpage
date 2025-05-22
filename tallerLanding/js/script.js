/*ABRIR Y CERRAR POPUP*/
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".show-form").forEach(function(btn) {
  btn.addEventListener("click", function(){
    document.querySelector(".pop-up").classList.add("active");
  });
});

  document.querySelector(".pop-up .close-btn").addEventListener("click", function(){
  document.querySelector(".pop-up").classList.remove("active");
  });
});

/*RECIBIR DATOS DE FORMULARIO*/

const input_submit = document.getElementById("input_submit");
  input_submit.addEventListener("click", function() {
    alert("Enviado");
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
