"use strict";

import maskPhone from './maskPhone';
import modalWindow from './modalWindow';

const validator = () => {
    const inputsValid = document.querySelectorAll('input'),
        buttons = document.querySelectorAll('button[type = submit]');
    let clone = document.getElementById('thanks').cloneNode(true);

    const addModalAfter = (text) => { //добавляем модальное окно для сообщения

        clone.id = 'messageAfter';
        document.body.appendChild(clone);

        modalWindow([{ data: '#messageAfter', id: 'messageAfter' }]);
        //меняем текст в модальном окне
        clone.querySelector('.form-content h4').innerHTML = 'Данные не отправлены';
        clone.querySelector('.form-content p').innerHTML = text;
        clone.querySelector('.form-content p').style.color = 'white';
    };

    const checkRadio = (data) => { // проверка радиокнопок
        let check = [...data].some(radio => {

            return radio.checked ? true : false;
        });

        return check;
    };

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            button.disabled = false;
            const target = e.target,
                form = target.closest('form');

            function noChecked() {

                const messageAfter = document.getElementById('messageAfter');

                messageAfter.style.display = 'block';

                setTimeout(() => {
                    messageAfter.style.display = 'none';
                    button.disabled = false;
                }, 3000);
            }

            if (form.matches('#footer_form')) {
                const radios = form.querySelectorAll('[type=radio]');

                if (!checkRadio(radios)) { //проверка радио кнопок
                    button.disabled = true;
                    addModalAfter('Необходимо выбрать клуб!');
                    noChecked();
                }
            } else {
                const checkbox = form.querySelector('[type=checkbox]');

                if (!checkbox.checked) {
                    button.disabled = true;
                    addModalAfter('Необходимо подтвердить согласие');
                    noChecked();
                }
            }
        });
    });

    inputsValid.forEach(input => {
        input.addEventListener('input', (e) => {

            const target = e.target;

            if (target.parentElement.matches('.price-message') && target.matches('[name=promo]')) {

                target.value = target.value.replace(/[a-z]+/ig, '');
            }
            if (target.parentElement.matches('.input-text') && target.matches('[name=name]')) {

                target.value = target.value.replace(/[^\W\s]+|[!-@]/ig, '');
            }
        });
    });

    maskPhone('[type=tel]'); //валидация телефона
};

export default validator;

