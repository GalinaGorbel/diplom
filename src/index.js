"use strict";

//npm run dev

import toggleMenu from './modules/toggleMenu';
import clubLists from './modules/clubLists';
import modalWindow from './modules/modalWindow';
import togglePopUp from './modules/togglePopUp';
import scrollWindow from './modules/scrollWindow';
import photoGallery from './modules/рhotoGallery';
import mainSlider from './modules/mainSlider';
import services from './modules/services';
import validator from './modules/validator';
import sendForms from './modules/sendForms';
import calculator from './modules/calculator';


toggleMenu();
clubLists();
modalWindow([
    {data: '[data-popup = "#free_visit_form"]', id: 'free_visit_form'},
    {data: '[data-popup = "#callback_form"]', id: 'callback_form'},
    {data: '.fixed-gift', id: 'gift'},
    {data: '#thanks', id: 'thanks'}
]
);
togglePopUp();
photoGallery(1500);
scrollWindow();
mainSlider();
services();
validator();
sendForms();
calculator();
