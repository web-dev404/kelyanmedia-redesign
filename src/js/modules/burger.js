const body = document.querySelector('body'),
    checkbox = document.querySelector('.checkbox1'),
    nav = document.querySelector('.nav'),
    headerMain = document.querySelector('.header__main');

checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('active');
    body.classList.toggle('active-body');
    nav.classList.toggle('active');
    headerMain.classList.toggle('active');
});