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

let countinueTest = true;
const summText = "Operation + finished with result:";
const differenceText = "Operation - finished with result:";
const multiplicationText = "Operation * finished with result:";
const divisionText = "Operation / finished with result:";
let summArray = [];
let diffArray = [];
let multArray = [];
let divisArray = []; 
do{
    let chooseOp = +prompt(`
    Выбери операцию:
        1 +;
        2 -;
        3 *;
        4 /;
    `);
    if(chooseOp == chooseOp){
        let numberA = +prompt('Введи число А');
        let numberB = +prompt('Введи число B');
        let summSen = summ(numberA, numberB);
        let diffSen = summ(numberA, numberB);
        let multSen = summ(numberA, numberB);
        let divisSen = summ(numberA, numberB);
        if(chooseOp == 1){
            summArray.push(summSen);
            console.log(`${summText} ${summSen}`);
            alert(`${summText} ${summSen}`);
        } else if (chooseOp == 2){
            diffArray.push(diffSen);
            console.log(`${differenceText} ${difference(numberA, numberB)}`);
            alert(`${differenceText} ${difference(numberA, numberB)}`);
        } else if (chooseOp == 3){
            multArray.push(multSen);
            console.log(`${multiplicationText} ${multiplication(numberA, numberB)}`); 
            alert(`${multiplicationText} ${multiplication(numberA, numberB)}`); 
        } else if (chooseOp == 4){
            divisArray.push(divisSen);
            console.log(`${divisionText} ${division(numberA, numberB)}`); 
            alert(`${divisionText} ${division(numberA, numberB)}`); 
        } else{
            countinueTest = false;
        }
        if( confirm("Хотите посчитать что-то еще?") == true){
            countinueTest = true;
        } else{
            countinueTest = false;
        }
    } else{
        confirm("Не правильно указаны данные. Попробуй еще раз.") == false;
    } 
} while (countinueTest)
   
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

function summArrayfunction(arr){
    return arr;
}
function diffArrayfunction(arr){
    return arr;
}
function multArrayfunction(arr){
    return arr;
}
function divisArrayfunction(arr){
    return arr;
}

console.log(`
${summArrayfunction(summArray)}
${diffArrayfunction(diffArray)}
${multArrayfunction(multArray)}
${divisArrayfunction(divisArray)}
`);



