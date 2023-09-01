// Mostrar Código

const icon = document.querySelector('.view__code');
const codeBox = document.getElementById('code-box');
let isVisible = false;

icon.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    if (isVisible) {
        codeBox.style.display = 'none'; // Esconde box
    } else {
        codeBox.style.display = 'block'; // Muestra box
    }
    isVisible = !isVisible; // Alterna estado visibilidad
});

//Función COPIAR CODIGO
function copyToClipboard(codigo) {
    var codigoText = document.querySelector(codigo + ' code').textContent;
    navigator.clipboard.writeText(codigoText)
        .then(() => {
            var boton = document.querySelector(codigo + ' .btn');
            boton.querySelector('.fa-copy').style.display = 'none';
            boton.querySelector('.fa-check').style.display = 'inline-block';
            setTimeout(function () {
                boton.querySelector('.fa-copy').style.display = 'inline-block';
                boton.querySelector('.fa-check').style.display = 'none';
            }, 2000);
        })
        .catch((error) => {
            console.error('Error al copiar al portapapeles:', error);
        });
}


// Cambio de texto con transición
const nuevoTexto = document.querySelector(".header__hero");

nuevoTexto.addEventListener("mouseover", () => {
    nuevoTexto.style.opacity = "0";
    setTimeout(() => {
        nuevoTexto.innerHTML = `Nueva<br>propiedad<br>CSS`;
        nuevoTexto.style.opacity = "1";
    }, 500);
});

nuevoTexto.addEventListener("mouseout", () => {
    nuevoTexto.style.opacity = "0";
    setTimeout(() => {
        nuevoTexto.innerHTML = `ANIMATION<br>TIMELINE`;
        nuevoTexto.style.opacity = "1";
    }, 1000);
});