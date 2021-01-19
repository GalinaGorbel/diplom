"use strict";

import clickSlider from './clickSlider';

const services = () => {

    clickSlider({
        main: '#services > .wrapper',
        wraper: '.services-slider',
        position: 0,
        slidesToShow: 4,
        infinity: false
    });
};

export default services;