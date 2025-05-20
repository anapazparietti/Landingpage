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
    Marquee('.marquee', 0.5); // Velocidad: más alto = más rápido
  });
