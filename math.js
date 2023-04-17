// get input elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');

// event listeners to clear input fields
num1Input.addEventListener('focus', clearInput);
num2Input.addEventListener('focus', clearInput);

function clearInput(event) {
    event.target.textContent = "";
}

// get output element
const output = document.getElementById('output');

// get operator buttons
const addBtn = document.getElementsByTagName('button')[0];
const multBtn = document.getElementsByTagName('button')[1];
const subBtn = document.getElementsByTagName('button')[2];
const divBtn = document.getElementsByTagName('button')[3];

// event listeners to the operator buttons
addBtn.addEventListener('click', add);
multBtn.addEventListener('click', multiply);
subBtn.addEventListener('click', subtract);
divBtn.addEventListener('click', divide);

// define arithmetic functions
function add() {
    const num1 = parseFloat(num1Input.textContent);
    const num2 = parseFloat(num2Input.textContent);
    output.textContent = num1 + num2;
}

function multiply() {
    const num1 = parseFloat(num1Input.textContent);
    const num2 = parseFloat(num2Input.textContent);
    output.textContent = num1 * num2;
}

function subtract() {
    const num1 = parseFloat(num1Input.textContent);
    const num2 = parseFloat(num2Input.textContent);
    output.textContent = num1 - num2;
}

function divide() {
    const num1 = parseFloat(num1Input.textContent);
    const num2 = parseFloat(num2Input.textContent);
    output.textContent = num1 / num2;
}

// automatically set focus on num1 input when the page loads
window.onload = function() {
    num1Input.focus();
}
