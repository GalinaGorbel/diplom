"use strict";

import Sliders from './sliders';

const photoGallery = (time) => {

    const gallery = new Sliders('.gallery-slider', '.slide', 'slider-dots');
    gallery.addDots('slider-dots');
    gallery.hideFotos();
    gallery.startSlide(time);
    gallery.addArrow('prev', './images/arrow-left.png');
    gallery.addArrow('next', './images/arrow-right.png');
    gallery.mouseEvent();
    gallery.clickAutoSlider();
};

export default photoGallery;