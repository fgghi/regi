document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.animated-image');
    let delay = 0;
  
    images.forEach(function (image) {
      setTimeout(function () {
        image.style.display = 'block'; // Mostrar la imagen
      }, delay);
      delay += 1500; // Incrementar el retardo para la siguiente imagen
    });
  
    // Preguntar al final de las imágenes
    setTimeout(function () {
      const confirm = window.confirm('Regina Victoria Parra, ¿quieres ser mi novia?');
      if (confirm) {
        alert('💞 ¡Felicidades! 💞');
      } else {
        alert('😔 ¡Qué pena! 😔');
      }
    }, delay);
  });
  