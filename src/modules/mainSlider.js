"use strict";

import Sliders from './sliders';

const mainSlider = (time) => {

    const slide = new Sliders('.main-slider', '.slide');
    slide.startSlide(time);
    
};

export default mainSlider;