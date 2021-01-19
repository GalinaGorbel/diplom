"use strict";

const scrollWindow = () => {

    const topMenu = document.querySelector('.top-menu'),
        headerMain = document.querySelector('.header-main'),
        fa = document.getElementById('totop');

        fa.style.display = 'none';
        
    window.addEventListener('scroll', function (e) {

        (topMenu.offsetTop < window.scrollY && window.screen.width < 768) ? topMenu.classList.add('sticky') : topMenu.classList.remove('sticky');

        window.scrollY < headerMain.offsetHeight ? fa.style.display = 'none' : fa.style.display = 'block';
    });
};

export default scrollWindow;