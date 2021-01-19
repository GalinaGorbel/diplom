"use strict";

const togglePopUp = () => {

    const popupMenu = document.querySelector('.popup-menu'),
        headerMain = document.querySelector('.header-main');

    headerMain.addEventListener('click', (e) => {
        const target = e.target;

        if (target.matches('img')) {
            popupMenu.style.display = 'flex';
        }
        if (target.matches('img.close-btn, .popup-menu, a')) {
            popupMenu.style.display = 'none';
        }
    });
};

export default togglePopUp;