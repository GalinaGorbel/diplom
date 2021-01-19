"use strict";

const sendForms = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'В процессе загрузки...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
        statusMessage = document.createElement('div');

    const forms = document.querySelectorAll('form');
 
    const addStyle = () => {
        const style = document.createElement('style');
        style.id = 'styleMessage';
        style.textContent = `
                .glo-style__textmessage {
                margin: 15px 0px 0px;
                color: black;
                }
            `;
        document.head.appendChild(style);
    };

    const postData = (url, body) => {

        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then((response) => {

                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                document.getElementById('callback_form').style.display = 'none';
                document.getElementById('thanks').style.display = 'block';

                setTimeout(() => document.getElementById('thanks').style.display = 'none', 5000);
            })
            .catch(() => {

                statusMessage.textContent = errorMessage;
            });
    };

    forms.forEach((form) => {
        form.addEventListener('submit', (e) => {

            e.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.innerHTML = loadMessage;
            addStyle();
            statusMessage.classList.add('glo-style__textmessage');
            const formData = new FormData(form);

            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData('./server.php', body);

            form.reset();
            setTimeout(() => statusMessage.remove(), 5000);

        });
    });
};
export default sendForms;
