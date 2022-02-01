/*
Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

const arr = [1,2,3];
some(arr, function(item, i, arr) {});
*/
function some (arr, fn){

    if (!Array.isArray(arr)) {
        throw new Error("1st argument must be array-type");
    }
    if (typeof fn  != 'function') {
        throw new Error("2st argument must be function");
    }

    let isOk = false;
    
    for (let index = 0; index < arr.length; index++) {
        if(fn(arr[index])) {
            isOk = true;
            break;
        }
    }

    return isOk;
}

const arr = [1,2,3];
//вызов
 console.log(some (arr,elem => elem > 5));