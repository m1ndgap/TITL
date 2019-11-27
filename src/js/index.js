'use strict';
import '../sass/styles.sass';
import { TweenMax, TweenLite, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap";
import Walkway from "walkway.js";


const MAINCOLOR = "#ffffff";
const TRANSP = 'transparent';

function changeColorSvg(el, color) {
    let obj = document.querySelector(el.selector);
    let paths = obj.querySelectorAll('path');
    paths.forEach(element => {
        element.style.fill = color;
    });
    console.log(paths[0]);
}




let cursor = document.querySelector('.cursor');
let boxCursor = cursor.querySelector('#cursor');
let logoCursor = cursor.querySelector('#titl');
document.addEventListener('mousemove', function(evt) {
    cursor.style.display = "block";
    cursor.style.top = evt.clientY + "px";
    cursor.style.left = evt.clientX + "px";

});
document.addEventListener('mouseleave', function(evt) {
    cursor.style.display = "none";
});
document.addEventListener('mouseenter', function(evt) {
    cursor.style.display = "block";
});

let svgLogo = new Walkway({
    selector: '#titl',
    duration: '1000',
});

let svgBoxCur = new Walkway({
    selector: "#cursor",
    duration: '500',
});

svgBoxCur.draw();

let logoEl = document.querySelector('.box');
let timeoutID;
function setColor() {changeColorSvg(svgLogo, MAINCOLOR)}
logoEl.addEventListener('mouseenter', function() {
    logoCursor.style.display = "block";
    boxCursor.style.display = "none";
    svgLogo.redraw();
    timeoutID = window.setTimeout(setColor, 1000);
});

logoEl.addEventListener('mouseleave', function() {
    window.clearTimeout(timeoutID);
    logoCursor.style.display = "none";
    boxCursor.style.display = "block";
    changeColorSvg(svgLogo, TRANSP);
    svgBoxCur.redraw();
});




