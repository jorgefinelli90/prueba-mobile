/* menu responsive */
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');
const nav = document.querySelector('.navR')



ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    nav.classList.toggle('mover')
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});


