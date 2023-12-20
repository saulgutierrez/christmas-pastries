/* Mostrar/ocultar menu */
let nav = document.querySelector('.nav');
let enlaces = nav.querySelectorAll('a');
let menuToggle = document.querySelector('.menu-toggle');
let menuToggleIcon = document.querySelector('.menu-toggle i');

// Cambiar icono de boton de menu
function cambiarIcono() {
    if (nav.classList.contains('active')) {
        menuToggleIcon.classList.remove('ri-menu-line');
        menuToggleIcon.classList.add('ri-close-line');
    } else {
        menuToggleIcon.classList.remove('ri-close-line');
        menuToggleIcon.classList.add('ri-menu-line');
    }
}
// Mostrar/ocultar menu y llamada a cambiarIcono()
menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    cambiarIcono();
})

// Ocultar menu al hacer clic sobre un enlace
enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function() {
        nav.classList.remove('active');
        cambiarIcono();
    })
})

/* Canmbiar background del header al hacer scroll */
let header = document.querySelector('header');
window.addEventListener('scroll', function() {
    header.classList.toggle('active', window.scrollY > 0);
})