"use strict";

const calculator = () => {
    let timeSelected = null,
        clubSelected = null,
        total = 0;

    const data = {
        'mozaika': {
            '1': 1999,
            '6': 2500,
            '9': 9999,
            '12': 19999,
        },
        'schelkovo': {
            '1': 2999,
            '6': 4999,
            '9': 9999,
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

    function getCost(data, time) {
        data.forEach(input => {

            if (input.value === time) {
                console.log(input.nextElementSibling.querySelector('.cost').firstChild.textContent);
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