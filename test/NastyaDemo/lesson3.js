let numberA, numberB, operation
do{
    do{
        operation = +prompt(`Choose your operation: 
        1 - +,
        2 - -,
        3 - *,
        4 - /,
        5 - pow,
        6 - cos,
        7 - sin`), []
    } while(operation!==operation)

    do{
        numberA = +prompt('Provide first operand'), []
    }while(numberA !== numberA)

    if (operation <= 5){
        do{
            numberB = +prompt('Provide second operand'), []
        }while(numberB !== numberB)
    }
    calculate(operation)
}while(confirm('Посчитать что-то еще?'))

function diff (firstOperand, secondOperand){
    return firstOperand - secondOperand
}
function summ (firstOperand, secondOperand){
    return firstOperand + secondOperand
}
function multi (firstOperand, secondOperand){
    return firstOperand * secondOperand
}
function delenie (firstOperand, secondOperand){
    return firstOperand + secondOperand
}
function pow (firstOperand, secondOperand){
    return Math.pow(firstOperand, secondOperand)
}
function sin(firstOperand){
    return Math.sin(firstOperand)
}
function cos(firstOperand){
    return Math.cos(firstOperand)
}

function showMessage(operation, func){
    let op;
    let message = `Operation ${op} finished with result: ${func}`
    switch(operation){
        case 1 : op = '+'
        break
        case 2 : op = '-'
        break
        case 3 : op = '*'
        break
        case 4 : op = '\/'
        break
        case 5 : op = 'pov'
        break
        case 6 : op = 'Sin'
        break
        case 7 : op = 'Cos'
        break
    }
    alert(message)
}
function calculate(operation){
    switch(operation){
        case 1 : showMessage(operation,summ(numberA, numberB))
        break
        case 2 : showMessage(operation, diff(numberA, numberB))
        break
        case 3 : showMessage(operation,multi(numberA, numberB))
        break
        case 4 : showMessage(operation,delenie(numberA, numberA))
        break
        case 5 : showMessage(operation,pow(numberA, numberB))
        break
        case 6 : showMessage(operation,sin(numberA))
        break
        case 7 : showMessage(operation,cos(numberA))
        break
    }
}
