const header = document.querySelector('.header');
header.style.transitionDuration = '0.3s';
header.style.transitionTimingFunction = 'ease';
header.style.transitionProperty = 'top';

let lastScrollY = 0;
if (screen.width <= 992) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > lastScrollY) {
            header.style.top = '-200px';
        } else {
            header.style.top = '0';
            if (window.pageYOffset > 100) {
                header.style.backgroundColor = 'rgba(191,25,104,0.8)'
            }
        }
        lastScrollY = window.scrollY;
    });
}