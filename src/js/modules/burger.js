const html = document.querySelector('html'),
    checkbox = document.querySelector('.checkbox1'),
    burger = document.querySelector('.burger');

checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('active');
    html.classList.toggle('active');
    burger.classList.toggle('active');
});