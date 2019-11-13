'use strict';
import '../sass/styles.sass';
import { TweenMax, TweenLite, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap";

const LINKWIDTH = document.querySelector('.contact-us__link').offsetWidth;

function wink (el, width) {
    if (el.offsetWidth > width/2) {
        el.setAttribute('style', 'width: ' + (el.offsetWidth -1) + 'px')
    }
};


let winkEl =document.querySelector('.contact-us__link')
let winkWidth = winkEl.offsetWidth;
window.addEventListener('scroll', function(width) {
    //wink(winkEl, winkWidth);
});

