/*
Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
*/
function every (arr, fn){

    if (!arr.length) return false;
    
    let isOk = true;

    for (let index = 0; index < arr.length; index++) {
        if(!fn(arr[index])) {
            isOk = false;
            break;
        }
    }

    return isOk;
}