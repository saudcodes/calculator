function add(num1, num2) {
    return num1 + num2
}
function subtract(num1, num2) {
    return num1 - num2
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
}

function operand(operator, arg1, arg2) {
    if (operator == "+") {
        return add(arg1, arg2)
    }
    else if(operator == "-") {
        return subtract(arg1, arg2)
    }
}

console.log(operand("-", 5, 6))
