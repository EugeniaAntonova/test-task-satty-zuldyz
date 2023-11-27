const header = document.querySelector('.header');
header.style.transitionDuration = '0.3s';
header.style.transitionTimingFunction = 'ease';
header.style.transitionProperty = 'top';

let lastScrollY = 0;
const onWindowScroll = () => {
    if (window.scrollY > lastScrollY) {
        header.style.top = '-200px';
    } else {
        header.style.top = '0';
        if (window.pageYOffset > 100) {
            header.style.backgroundColor = 'rgba(191,25,104,0.8)';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    }
    lastScrollY = window.scrollY;
}

if (screen.width <= 992) {
    window.addEventListener('scroll', onWindowScroll);
} else {
    window.removeEventListener('scroll', onWindowScroll);
}