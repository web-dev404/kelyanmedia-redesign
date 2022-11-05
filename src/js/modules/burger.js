const body = document.querySelector('body'),
    checkbox = document.querySelector('.checkbox1'),
    burger = document.querySelector('.burger');

checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('active');
    body.classList.toggle('active-body');
    burger.classList.toggle('active');
});