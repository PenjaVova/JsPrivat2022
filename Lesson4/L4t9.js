/*
Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]
*/

function arrayFill(obj,count) {

    if (typeof obj !== 'number' &&
        typeof obj !== 'string' &&
        typeof obj !== 'object' &&
        !Array.isArray(obj) ) {
            throw new Error ("1st param error");
        }

    if (typeof count !== 'number') {
            throw new Error ("2nd param error")
        }


    let rez = [];

    while (count>0){
        rez.push(obj)
        count--
    }    
    return rez;
}

let arr = arrayFill('t',3);

console.log(arr.toString());