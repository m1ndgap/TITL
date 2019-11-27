'use strict';
import '../sass/styles.sass';
import { TweenMax, TweenLite, TimelineLite, Power2, Elastic, CSSPlugin } from 'gsap';
import Walkway from 'walkway.js';


const MAINCOLOR = '#ffffff';
const TRANSP = 'transparent';

function changeColorSvg(el, color) {
    let obj = document.querySelector(el.selector);
    let paths = obj.querySelectorAll('path');
    paths.forEach(element => {
        element.style.fill = color;
    });
}

let cursor = document.querySelector('.cursor');
let boxCursor = cursor.querySelector('#cursor');
let logoCursor = cursor.querySelector('#titl');
let chatCursor = cursor.querySelector('#chat');
window.addEventListener('DOMContentLoaded', function(){
    cursor.style.display = 'none';
    logoCursor.style.display = 'none';
    chatCursor.style.display = 'none';
});
document.addEventListener('mousemove', function(evt) {
    cursor.style.display = 'block';
    cursor.style.top = evt.clientY + 'px';
    cursor.style.left = evt.clientX + 'px';
});
document.addEventListener('mouseleave', function(evt) {
    cursor.style.display = 'none';
});
document.addEventListener('mouseenter', function(evt) {
    cursor.style.display = 'block';
    svgBoxCur.redraw();
});

let svgLogo = new Walkway({
    selector: '#titl',
    duration: '1000',
});

let svgBoxCur = new Walkway({
    selector: '#cursor',
    duration: '500',
});

let svgChatCur = new Walkway({
    selector: '#chat',
    duration: '500',
});



let logoEl = document.querySelector('.box');
let timeoutID;
function setColor() {changeColorSvg(svgLogo, MAINCOLOR)}
logoEl.addEventListener('mouseenter', function() {
    logoCursor.style.display = 'block';
    boxCursor.style.display = 'none';
    svgLogo.redraw();
    timeoutID = window.setTimeout(setColor, 1000);
});
logoEl.addEventListener('mouseleave', function() {
    window.clearTimeout(timeoutID);
    logoCursor.style.display = 'none';
    boxCursor.style.display = 'block';
    changeColorSvg(svgLogo, TRANSP);
    svgBoxCur.redraw();
});

let contactEl = document.querySelector('.contact-us');
function setColor2() {
    let paths = chatCursor.querySelectorAll('path');
    console.log(paths[0]);
    paths[0].style.fill = MAINCOLOR
}
console.log(chatCursor.childNodes[1]);
let timeoutID2;
contactEl.addEventListener('mouseenter', function() {
    boxCursor.style.display = 'none';
    chatCursor.style.display = 'block';
    svgChatCur.redraw();
    timeoutID2 = window.setTimeout(setColor2, 500)
});

contactEl.addEventListener('mouseleave', function() {
    window.clearTimeout(timeoutID2);
    boxCursor.style.display = 'block';
    chatCursor.style.display = 'none';
    svgBoxCur.redraw();
    chatCursor.childNodes[1].style.fill = TRANSP;
});



