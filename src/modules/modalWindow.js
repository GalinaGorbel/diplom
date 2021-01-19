"use strict";

const modalWindow = (dataPopup) => {

    dataPopup.forEach((popup) => {
        try {
            const elem = document.querySelector(`${popup.data}`);

            elem.addEventListener('click', (e) => {

                const modal = document.getElementById(popup.id),
                    overlay = modal.querySelector('.overlay'),
                    formWrappers = [].concat(overlay, ...modal.querySelectorAll('.form-wrapper'));

                modal.style.display = 'block';

                 if (elem.matches('.fixed-gift')) {
                    
                    elem.style.display = 'none';
                } 
                if (e.target.matches('.btn.close-btn, .close_icon, .overlay')) {
                    elem.style.display = 'none';
                }

                formWrappers.forEach(formWrapper => {

                    formWrapper.addEventListener('click', (e) => {
                        const target = e.target;
      
                        if (target.matches('.close-form, .close_icon, .overlay, .form-wrapper, .btn.close-btn')) {
                            modal.style.display = 'none';
                        }
                    });
                });
            });
        } catch (e) { }
    });
};

export default modalWindow;