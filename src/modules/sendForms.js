"use strict";

const sendForms = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'В процессе загрузки...',
        statusMessage = document.createElement('div'),
        inputs = document.querySelectorAll('[name="card-type"]');

    inputs.forEach(input => {
        input.value = input.nextElementSibling.querySelectorAll('.cost')[0].firstChild.textContent;
    });

    const forms = document.querySelectorAll('form');
    
    const addStyle = (textColor) => {
        
        const style = document.createElement('style');
        style.id = 'styleMessage';
        style.textContent = `
                .glo-style__textmessage {
                margin: 15px 0px 0px;
                color: ${textColor};
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
                document.getElementById('price-total').textContent = '1999';

                setTimeout(() => document.getElementById('thanks').style.display = 'none', 5000);
            })
            .catch(() => {

                statusMessage.textContent = errorMessage;
            });
    };

    forms.forEach((form) => {
        form.addEventListener('submit', (e) => {
            console.log(form);
            e.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.innerHTML = loadMessage;

            if (form.matches('#card_order')) {
                addStyle('black');
            } else {
                addStyle('white');
            }
            
            statusMessage.classList.add('glo-style__textmessage');
            const formData = new FormData(form);

            let body = {};

            formData.forEach((val, key) => {
                console.log(val);
                body[key] = val;
            });

            postData('./server.php', body);

            form.reset();
            setTimeout(() => statusMessage.remove(), 5000);

        });
    });
};
export default sendForms;
