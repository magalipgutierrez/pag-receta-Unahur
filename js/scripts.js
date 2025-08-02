var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('usuario');
 
 document.addEventListener('DOMContentLoaded', function() {
    if (username) {
        document.getElementById('welcomeMessage').textContent = '¡Bienvenida/o, ' + username + '!';
    } else {
        document.getElementById('welcomeMessage').textContent = '¡Bienvenida/o, usuario no especificado!';
    }
    }
);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var url= "alumno.html?usuario=" ;
    if (username === 'rodrigo' && password === '123') {
        
         var urlUsuario= "alumno.html?usuario=" + username;
         window.location.href = urlUsuario;
    } else {
        //document.getElementById('loginMessage').innerText = 'Usuario usuario no especificado.';
        
         window.location.href = url;
    }
});

/* carrusel */
let slideIndex = 0;

function changeSlide(n) {
  let slides = document.getElementsByClassName("slide");
  slideIndex = n;
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('prev-btn').addEventListener('click', function() {
    changeSlide(slideIndex - 1);
  });

  document.getElementById('next-btn').addEventListener('click', function() {
    changeSlide(slideIndex + 1);
  });

  setInterval(function() {
    changeSlide(slideIndex + 1)
  }, 5000);

  changeSlide(0);
});

