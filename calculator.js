let currentDisplay = '';

function appendToDisplay(value) {
    const expressionDisplay = document.querySelector('#expression-display');
    const resultDisplay = document.querySelector('#result-display');
    const operators = ['+', '-', '*', '/'];

    // Handle display of × and ÷ symbols
    if (value === '*') {
        currentDisplay += '*';
        expressionDisplay.textContent += '×';
    } else if (value === '/') {
        currentDisplay += '/';
        expressionDisplay.textContent += '÷';
    } else {
        currentDisplay += value;
        expressionDisplay.textContent += value;
    }
    
    resultDisplay.textContent = ''; // Clear the result display while building the expression
}

function clearDisplay() {
    currentDisplay = '';
    document.querySelector('#expression-display').textContent = '';
    document.querySelector('#result-display').textContent = '';
}

function removeLastChar() {
    const expressionDisplay = document.querySelector('#expression-display');
    const resultDisplay = document.querySelector('#result-display');

    // Handle operator symbols in display
    if (expressionDisplay.textContent.slice(-1) === '×') {
        currentDisplay = currentDisplay.slice(0, -1);
        expressionDisplay.textContent = expressionDisplay.textContent.slice(0, -1);
    } else if (expressionDisplay.textContent.slice(-1) === '÷') {
        currentDisplay = currentDisplay.slice(0, -1);
        expressionDisplay.textContent = expressionDisplay.textContent.slice(0, -1);
    } else {
        currentDisplay = currentDisplay.slice(0, -1);
        expressionDisplay.textContent = expressionDisplay.textContent.slice(0, -1);
    }

    resultDisplay.textContent = ''; // Clear the result display while editing
}

function calculateResult() {
    const resultDisplay = document.querySelector('#result-display');
    try {
        // Evaluate the expression
        const result = eval(currentDisplay.replace(/%/g, "/100"));
        resultDisplay.textContent = result;
        currentDisplay = result.toString();
    } catch (error) {
        resultDisplay.textContent = 'Error';
        currentDisplay = '';
    }
}
