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

    if (!Array.isArray(arr)) {
        throw new Error("1st argument must be array-type");
    }
    if (typeof fn  != 'function') {
        throw new Error("2st argument must be function");
    }

    for (let index = 0; index < arr.length; index++) {
        if(!fn(arr[index])) {
            isOk = false;
            break;
        }
    }

    return isOk;
}

const arr = [1,2,3];

every (arr,word => elem > 0);