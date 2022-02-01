/*
####Задача 1

Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
*/
function forEach (arr, fn) {

    if (!Array.isArray(arr)) {
        throw new Error("1st argument must be array-type");
    }
    if (typeof fn  !== 'function') {
        throw new Error("2st argument must be function");
    }

    //let rezultArr = [];

    for (let index = 0; index < arr.length; index++) {
        const val = fn(arr[index]);
    }
    //return rezultArr;
}

function x2 (elem) {
    let val = elem*2;
    console.log(val);
    return val;
};

const arr = [1,2,3];

 forEach (arr, x2);