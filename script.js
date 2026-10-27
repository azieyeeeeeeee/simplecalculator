const display = document.getElementById('display');

function appendValue(value) {
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    if (display.value === 'Error') {
        display.value = '';
        return;
    }
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Replace × with * for evaluation
        let expression = display.value.replace(/×/g, '*');
        // Evaluate the expression
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Allow keyboard input
document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        e.preventDefault();
        appendValue(key);
    } else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        e.preventDefault();
        clearDisplay();
    } else if (key === 'Backspace') {
        e.preventDefault();
        deleteLast();
    }
});
