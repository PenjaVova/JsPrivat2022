/*
####Задача 5

Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc);
*/
function reduce(arr, fn, initVal){

    if(!arr.length) return null;

    let rez;
    let startIndex;
//проверка на наличие 3-го параметра
    if(initVal !== undefined) {
        startIndex = 0;
        rez = initVal;
    } else {
        startIndex = 1;
        rez = arr[0];
    }

    for (let i = startIndex; i < arr.length; i++) {
        rez = fn(rez,arr[i]);
    }

    return rez;
}