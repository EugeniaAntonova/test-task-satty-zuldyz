const burger = document.querySelector('.burger-button');
const burgerDescr = burger.querySelector('.burger-description');
const navList = document.querySelector('#navigation-list');

const onBurgerClick = () => {
    burger.classList.toggle('burger--open');
    burger.classList.contains('burger--open') ? burgerDescr.textContent = 'Свернуть меню' : burgerDescr.textContent = 'Развернуть меню';
    burger.classList.contains('burger--open') ? navList.style.left = '0' : navList.style.left = '-100%';
}

burger.addEventListener('click', onBurgerClick);
