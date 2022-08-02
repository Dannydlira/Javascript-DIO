var currentNumberWraper = document.getElementById('currentNumber');
var currentNumber = 0;

currentNumberWraper.addEventListener('click', increment, true)

function increment() {
    currentNumber = currentNumber +1;
    currentNumberWraper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber -1;
    currentNumberWraper.innerHTML = currentNumber;
}