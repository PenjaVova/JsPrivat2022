/*
Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
*/

function filter (arr, fn){

    if (!Array.isArray(arr)) {
        throw new Error("1st argument must be array-type");
    }
    if (typeof fn  != 'function') {
        throw new Error("2st argument must be function");
    }

    let rezultArr = [];

    for (let index = 0; index < arr.length; index++) {
        if (fn(arr[index])){
            rezultArr.push(arr[index]) ;
        }
    }
    return rezultArr;
};

function condition (elem) {
    let bool;
    if(elem %2!=0) {
        bool = true;
    } else {
        bool = false
    }
    return bool;
};
//test1
const arr = [1,2,3];

 let rez = filter (arr, condition);

 console.log(rez.toString());

 //test2
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = filter(words,word => word.length > 6);

console.log(result);