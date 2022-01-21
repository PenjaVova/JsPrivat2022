/*
Задача 7

Сделайте функцию `getDivisors`, 
которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой). 
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.
*/

function getDivisors (n) {

    let arr = [];

    if(typeof n !== 'number'){
        throw new Error('parameter type is not a Number');
    } else if(n == 0) {
        throw new Error('parameter can\'t be a 0');
    } else {

        for (let i = n; i <= n && i >0 ; i--) {
            let tmp = n/i;
            if(Number.isInteger(tmp))
                arr.push(tmp);
        }
    }
    return arr;
}

console.log(getDivisors(12).toString());
console.log(getDivisors('Content').toString());
console.log(getDivisors(0).toString());

