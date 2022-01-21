/*
Задача 2

Напишите функцию `f` которая возвращает сумму всех параметров.
Количество параметров может быть любым. Данная функция должна обязательно содержать
 проверку входных параметров, потому что принимать она может только числа.
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
 */

function f () {
let arr = arguments;
let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        const element = arr[i];

        if (typeof element === 'number') {
            sum+= element;
        } else {
            throw new Error('all parameters type should be a Number');
        }       
    }
    console.log(sum);
}

f(1,2,3); // 6

f(1,1,1,1,1,1,1,1); // 8

f(1,2,'s',4); // Error: all parameters type should be a Number
