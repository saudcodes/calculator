





let playerNum1 = "10";
 let playerNum2 = "3";
let playerInput = "*"
let number = document.querySelector("#number")
let buttons = document.querySelectorAll("button")






buttons.forEach( (button) => {
    button.addEventListener("click", () => {
    
        number.textContent = button.innerText
    }
    )
})



function operand(operator, arg1, arg2) {
    arg1 = playerNum1
    arg2 = playerNum2
    operator = playerInput
    if (operator == "+") {
        return arg1 + arg2
        
    }
 else if (operator == "-") {
    return arg1 - arg2
} 
else if (operator == "*") {
    return arg1 * arg2
}
else if (operator == "/") {
    return arg1 / arg2
}


}
let text = document.querySelector("#text")
text.textContent = operand();

console.log(operand())

