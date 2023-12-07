
const contentSection = document.querySelector('.content');
function checkVisible() {
  const contentPosition = contentSection.getBoundingClientRect();
  if (contentPosition.top < window.innerHeight && contentPosition.bottom >= 0) {
    contentSection.classList.add('visible');
    contentSection.classList.remove('hidden');
  } else {
    contentSection.classList.add('hidden');
    contentSection.classList.remove('visible');
  }
}
window.addEventListener('scroll', checkVisible);
window.addEventListener('load', checkVisible);
const btnIniciar = document.getElementById('btnIniciar');
const botones = document.getElementById('botones');
const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const mensaje = document.getElementById('mensaje');
const imagenNo = document.getElementById('imagenNo');
const audio = document.getElementById('audio');

btnIniciar.addEventListener('click', function() {
  botones.style.display = 'block';
});

btnSi.addEventListener('click', function() {
  mensaje.style.display = 'block';
  audio.play();
});

btnNo.addEventListener('click', function() {
  imagenNo.style.display = 'block';
});

document.addEventListener("DOMContentLoaded", function() {
  var miAudio = document.getElementById("myAudio");
  miAudio.volume = 0.3; // Establecer el volumen predeterminado a 0.3 (puedes ajustar este valor)
});

function bajarVolumen() {
  var miAudio = document.getElementById("myAudio");
  if (miAudio.volume > 0) {
      miAudio.volume -= 0.1; // Reducir el volumen en 0.1 (puedes cambiar este valor)
  }
}