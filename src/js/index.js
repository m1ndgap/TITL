'use strict';
import '../sass/styles.sass';
import { TweenMax, TweenLite, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap";

// function flipper (obj) {
//     var chars="#@!$%&*()_-0123456789abcdefghijklmnpqrstuvwxyz ";
//     this.obj = obj;
//     this.textArray = this.obj.innerHTML.split("");
//     this.html = this.obj.innerHTML;
//     this.indexes = [];
//     this.cia = [];
//     this.interval = 0;
//     var _this = this;
//
//     for (var i = 0; i<this.textArray.length; i++) {
//         this.cia.push(0);
//         this.indexes.push(i);
//     }
//
//     this.start = function () {
//         this.timeInt();
//     }
//
//     this.stop = function () {
//         clearInterval(this.interval);
//         this.obj.innerHTML = this.html;
//     }
//
//     this.repaint = function () {
//         var txt='';
//         for (var i = 0; i<this.cia.length; i++) txt+=chars.charAt(this.cia[i]);
//         this.obj.innerHTML=txt;
//     }
//
//     this.roll = function () {
//
//         for(var i = 0; i<this.indexes.length; i++) {
//             this.cia[this.indexes[i]]++;
//             if (chars.charAt(this.cia[this.indexes[i]]).toUpperCase() === this.textArray[this.indexes[i]].toUpperCase()) this.indexes.splice(i,1);
//         }
//
//
//         this.repaint();
//         if (this.indexes.length == 0) this.stop();
//     }
//
//     this.timeInt = function () {
//         this.interval=setInterval(function () {_this.roll()},40);
//     }
// }
//
// let text = document.getElementById('#main-text')
// flipper(text);
