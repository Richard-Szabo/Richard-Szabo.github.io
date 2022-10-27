// Navigation menu scripts
document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.navigation-menu').classList.toggle('active');
    document.querySelectorAll('.menu-line').forEach((element) => {
        element.classList.toggle('active');
    })
})