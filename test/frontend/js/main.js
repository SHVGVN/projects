// Lesson 1 

// let numberA = +prompt('Число А');
// let numberB = +prompt('Число B');

// let formula1 = numberA + numberB;
// let formula2 = numberA - numberB;
// let formula3 = numberA * numberB;
// let formula4 = numberA / numberB;

// let finalResult = `Сумма: ${formula1} 
// Разница: ${formula2} 
// Умножение: ${formula3} 
// Деление: ${formula4}`;

// alert(finalResult);
// console.log(finalResult);


// Lesson 2 
const message = "Где то ошибка, пробуй еще.";
do{
    let operation = +prompt('Выберите цифру операции из списка ниже:\n1)+\n2)-\n3)/\n4)*\n5)сos\n6)sin');
    if( operation !== operation ){
        console.log("1"); 
        // alert(message);
        break;
    } 
    let numberA = +prompt('Число А');
    if(operation !== 5 && operation !== 6){
        let numberB = +prompt('Число B');
        switch(operation){
            case 1: {
                const formula1 = numberA + numberB;
                console.log(`Ваш ответ: ${formula1}`); 
                alert(`Ваш ответ: ${formula1}`);
            } break;
            case 2: {
                const formula2 = numberA - numberB;
                console.log(`Ваш ответ: ${formula2}`); 
                alert(`Ваш ответ: ${formula2}`);
            } break;
            case 3: { 
                const formula3 = numberA / numberB;
                console.log(`Ваш ответ: ${formula3}`); 
                alert(`Ваш ответ: ${formula3}`);
            } break;
            case 4: {
                const formula4 = numberA * numberB;
                console.log(`Ваш ответ: ${formula4}`); 
                alert(`Ваш ответ: ${formula4}`);
            } break;
        }
    } else { 
        switch(operation){
            case 5: { 
                const formula5 = Math.cos(numberA); 
                console.log(`Ваш ответ: ${formula5}`); 
                alert(`Ваш ответ: ${formula5}`);
            } break;
            case 6: { 
                const formula6 = Math.sin(numberA);
                console.log(`Ваш ответ: ${formula6}`); 
                alert(`Ваш ответ: ${formula6}`);
            } break;
        }
    }
} while(confirm('Хотите еще раз?'));


