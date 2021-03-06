"use strict";

const calculator = () => {
    let timeSelected = null,
        clubSelected = null,
        total = 0;

    const data = {
        'mozaika': {
            '1': 1999,
            '6': 9900,
            '9': 13900,
            '12': 19900,
        },
        'schelkovo': {
            '1': 2999,
            '6': 14999,
            '9': 21990,
            '12': 24999,
        }
    };

    function selectedValue(data, name) {

        data.forEach(elem => {

            if (elem.checked && name === 'time') {

                timeSelected = elem.value;
            } else if (elem.checked && name === 'clubs') {

                clubSelected = elem.value;
            }
        });
    }

    const dataForCalculator = (id, month, promo) => {

        if (promo === 'ТЕЛО2020') {

            return Math.floor(data[id][month] * 0.7);
        } else {

            return data[id][month];
        }
    };

    try {
        const calcBlock = document.querySelector('#card_order'),
            priceTotal = calcBlock.querySelector('#price-total'),
            clubs = calcBlock.querySelectorAll('.club > input'),
            time = calcBlock.querySelectorAll('.time > input'),
            promo = calcBlock.querySelector('.price-message input');

        priceTotal.textContent = total;

        selectedValue(time, 'time');
        selectedValue(clubs, 'clubs');

        calcBlock.addEventListener('change', function (e) {

            if (e.target.matches('[name=card-type]')) {

                selectedValue(time, 'time');
            } else if (e.target.matches('[name=club-name]')) {

                selectedValue(clubs, 'clubs');
            }

            priceTotal.textContent = dataForCalculator(`${clubSelected}`, `${timeSelected}`, `${promo.value}`);
        });

        priceTotal.textContent = dataForCalculator(`${clubSelected}`, `${timeSelected}`, `${promo.value}`);
    } catch (e) { }

};

export default calculator;