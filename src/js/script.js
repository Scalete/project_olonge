window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__links'),
        hamburger = document.querySelector('.hamburger');
    console.log(1);

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__links_active');
    });
});