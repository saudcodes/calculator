let playerNum1 = 5
let playerNum2 = 5
let playerInput = "+"

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



// function secondnum() {
//     if (playerNum1 != "") {
//         return playerNum2
//     }
//     else {
//         return console.log("please fill 1st one")
//     }
// }




function operand(operator, arg1, arg2) {
    arg1 = playerNum1
    arg2 = playerNum2
    operator = playerInput
    if (operator == "+") {
        return add(arg1, arg2)
    }
 else if (operator == "-") {
    return subtract(arg1, arg2)
} 
else if (operator == "*") {
    return multiply(arg1, arg2)
}
else if (operator == "/") {
    return divide(arg1, arg2)
}
console.log("it worked")
}




// function result() {
//     if (playerNum1 != "" && playerNum2 != "" && playerInput != "") {
//         return operand()
//     }
//     else {
//     return console.log("please fill all first")
//     }
// }
