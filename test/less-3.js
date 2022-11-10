// Lesson 3

// С помощью prompt, alert и console.log реализовать следующий сценарий:
// Просим пользователя выбрать операцию (+, -, *, /, sin).
// Просим ввести операнды, если пользователь вводит не число, просим повторно до тех пор, пока не введет число.
// Выводим результат в следующем виде:
// Operation имя_операции finished with result результат_операции

// Условия (95 баллов макс):
// Каждая операция должна быть оформлена как функция
// Результат выводим в alert

// Доп.условие (100 баллов):
// После вывода результата, спросить у пользователя - хочет ли он выполнить еще какие-либо расчеты (использовать функцию confirm)
// Результат каждой из операций нужно сохранять в массив и реализовать функцию вывода данного массива; 
// в список операций добавить операцию history, если пользователь выбирает данную опцию - выводить историю операций

let historyArr = [];
let numberA, numberB, chooseOp;
do{
    do{
        chooseOp = +prompt(`
        Выбери операцию:
            1) +;   
            2) -;   
            3) *;  
            4) /;
            5) ^;  6) sin;  7) cos;
            
            Your History: ${historyArr}
        `);
    } while (chooseOp != chooseOp);
    do{
        numberA = +prompt('Введи число А');
    } while( numberA != numberA);
    if(chooseOp <= 5){
        do{
            numberB = +prompt('Введи число B');
        } while(numberB != numberB);
    }
    showMess(chooseOp);
} while (confirm('Eще разок?'));
   
function summ(fNumber, sNumber){
    return fNumber + sNumber;
}
function difference(fNumber, sNumber){
    return fNumber - sNumber;
}
function multiplication(fNumber, sNumber){
    return fNumber * sNumber;
}
function division(fNumber, sNumber){
    return fNumber / sNumber;
}
function sin(fNumber){
    return Math.sin(fNumber);
}
function cos(fNumber){
    return Math.cos(fNumber);
}
function pownumb(fNumber, sNumber){
    return Math.pow(fNumber, sNumber);
}

function showMess(fNumber){
    
    let summText = `Operation ${fNumber} finished with result:`;
    switch(fNumber){
        case 1: {
            console.log(`${summText} ${summ(numberA, numberB)}`);
            alert(`${summText} ${summ(numberA, numberB)}`);
            historyArr.push(summ(numberA, numberB));
            break;
        };
        case 2: {
            console.log(`${summText} ${difference(numberA, numberB)}`);
            alert(`${summText} ${difference(numberA, numberB)}`);
            historyArr.push(difference(numberA, numberB));
            break;
        };
        case 3: {
            console.log(`${summText} ${multiplication(numberA, numberB)}`); 
            alert(`${summText} ${multiplication(numberA, numberB)}`); 
            historyArr.push(multiplication(numberA, numberB));
            break;
        };
        case 4: {
            console.log(`${summText} ${division(numberA, numberB)}`); 
            alert(`${summText} ${division(numberA, numberB)}`); 
            historyArr.push(division(numberA, numberB));
            break;
        };
        case 5: {
            console.log(`${summText} ${pownumb(numberA, numberB)}`); 
            alert(`${summText} ${pownumb(numberA, numberB)}`); 
            historyArr.push(pownumb(numberA, numberB));
            break;
        };
        case 6: {
            console.log(`${summText} ${sin(numberA)}`); 
            alert(`${summText} ${sin(numberA)}`); 
            historyArr.push(sin(numberA));
            break;
        };
        case 7: {
            console.log(`${summText} ${cos(numberA)}`); 
            alert(`${summText} ${cos(numberA)}`); 
            historyArr.push(cos(numberA));
            break;
        };
    }
    return fNumber;
}