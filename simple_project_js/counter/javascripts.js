let clear = document.querySelector('.clear');
let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let number = document.getElementById('intCounter');

function writeZero() {
    number.innerText = 0;
}
function numberIncrement() {
    number.innerText = (parseInt(number.textContent)) + 1;
}
function numberDecrement() {
    number.innerText = (parseInt(number.textContent)) - 1;

}
clear.addEventListener('click', writeZero);
increment.addEventListener('click', numberIncrement);
decrement.addEventListener('click', numberDecrement);
