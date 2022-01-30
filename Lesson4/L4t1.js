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
    let rezultArr = [];
    for (let index = 0; index < arr.length; index++) {
        rezultArr.push(fn(arr[index]));
    }
    return rezultArr;
}