function addToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    let display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    let display = document.getElementById('display');
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        alert('Invalid expression!');
    }
}

document.addEventListener('keydown', function(event) {
    let allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '%', '(', ')'];

    if (!allowedKeys.includes(event.key)) {
        alert('Only numbers and operators are allowed!');
        event.preventDefault();
    }
});
