const leftHand = +prompt("left hand number");
const operator = prompt("operator");
const rightHand = + prompt("Right hand");

let result = 0
switch (operator){
    case "+":
        result = leftHand + rightHand;
        break;
    case "*":
        result = leftHand * rightHand;
        break;
    case   "/":
        result = leftHand / rightHand;
        break;
    case "%":
        result = leftHand % rightHand;
        break;
    default :
    result=null;
    break;              
}
console.log(result)