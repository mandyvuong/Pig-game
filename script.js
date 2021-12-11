'use strict';

// Selecting elements are equivalent but getElementById is faster than querySelector
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

score0El.textContent = 0;
score1El.textContent = 0;
