(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

function name$1() {
  console.log('Animal Name');
}

function shout$1() {
  console.log('Animal shout');
}

function name() {
  console.log('Cat Name');
}

function name$2() {
  console.log('Dog Name');
}

function shout$2() {
  console.log('Dog shout');
}

name(); //Cat Name

name$1(); //Animal Name

name$2(); //Dog Name

shout$1(); //Animal Shout

shout$2(); //Dog Shout

})));