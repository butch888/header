'use strict';

let burger = document.querySelector('.burger');

let test = document.querySelector('.test');

let body = document.querySelector('body');


burger.addEventListener('click', function(e) {
    e.stopPropagation();
    test.classList.toggle('active');
    body.classList.toggle('active-body');
})

body.addEventListener('click', function() {
    test.classList.remove('active');
    body.classList.remove('active-body');
})

















