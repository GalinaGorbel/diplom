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

            const target = e.target,
                form = target.closest('form'),
                inputs = form.querySelectorAll('input');

            function noChecked() { //функция для вывода сообщения

                const messageAfter = document.getElementById('messageAfter');

                messageAfter.style.display = 'block';

                setTimeout(() => {
                    messageAfter.style.display = 'none';
                    button.disabled = false;
                }, 3000);
            }

            function blocked(mess) {
                addModalAfter(mess);
                button.disabled = true;
                noChecked();
            }

            const inputText = (data) => { //проверка заполнения имени и телефона

                data.forEach(input => {
                    if (input.matches('[name=name]') && input.value.length < 2) {

                        blocked('Имя должно содержать не менее 2 символов!');
                    }
                    if (input.matches('[type=tel]') && input.value.length < 14) {
   
                        blocked('Поле телефон должно содержать не менее 11 цифр!');
                    }
                });

                
            };
        
            if (inputs) {
                inputText(inputs);
            }
            if (form.matches('#footer_form')) {
                const radios = form.querySelectorAll('[type=radio]');

                if (!checkRadio(radios)) { //проверка радио кнопок
        
                    blocked('Необходимо выбрать клуб!');
                }
            }
            else if (form.matches('#banner-form, #card_order, #form1, #form2')) {
                const checkbox = form.querySelector('[type=checkbox]');

                if (!checkbox.checked) {

                    blocked('Необходимо подтвердить согласие');
                }
            } 
        });
    });

    //валидация инпутов
    inputsValid.forEach(input => { //добавляем валидацию
        input.addEventListener('input', (e) => {

            const target = e.target;

            if (target.parentElement.matches('.price-message') && target.matches('[name=promo]')) {

                target.value = target.value.replace(/[a-z]+/ig, '');
            }
            if (target.matches('[name=name]')) {

                target.value = target.value.replace(/[^\W\s]+|[!-@]/ig, '');

            }
        });
    });

    maskPhone('[type=tel]'); //валидация телефона
};

export default validator;

