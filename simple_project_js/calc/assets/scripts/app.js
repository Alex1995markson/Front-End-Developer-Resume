const defaultValue = 0;
let currentResult = defaultValue;
let logEntries = [];

function getIntegerValue() {
   return parseInt(userInput.value);
}
function createAndwriteOutpt(operator, resultBeforeCalc, inputNumber) {
    let decription = `${resultBeforeCalc} ${operator} ${inputNumber}`;
    outputResult(currentResult, decription);
}

function add() {
    let inputValue = getIntegerValue();
    let initialResult = currentResult;
    currentResult += inputValue;
    createAndwriteOutpt('+', initialResult, inputValue);
    let Entry = {
        operator: "ADD",
        resultBefore: initialResult,
        number: inputValue,
        result: currentResult
    }
    logEntries.push(Entry);
    console.log(logEntries[logEntries.length-1]);
}
function subtract() {
    let inputValue = getIntegerValue();
    let initialResult = currentResult;
    currentResult -= inputValue;
    createAndwriteOutpt('-', initialResult, inputValue);
    let Entry = {
        operator: "Subtract",
        resultBefore: initialResult,
        number: inputValue,
        result: currentResult
    }
    logEntries.push(Entry);
    console.log(logEntries[logEntries.length-1]);
}
function multiply() {
    let inputValue = getIntegerValue();
    let initialResult = currentResult;
    currentResult *= inputValue;
    createAndwriteOutpt('*', initialResult, inputValue);
    let Entry = {
        operator: "Multiply",
        resultBefore: initialResult,
        number: inputValue,
        result: currentResult
    }
    logEntries.push(Entry);
    console.log(logEntries[logEntries.length-1]);
}
function divide() {
    let inputValue = getIntegerValue();
    let initialResult = currentResult;
    currentResult /= inputValue;
    createAndwriteOutpt('/', initialResult, inputValue);
    let Entry = {
        operator: "Divide",
        resultBefore: initialResult,
        number: inputValue,
        result: currentResult
    }
    logEntries.push(Entry);
    console.log(logEntries[logEntries.length-1]);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


