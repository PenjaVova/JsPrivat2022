/*
Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);
*/
function reduceRight(arr, fn, initVal){

    if (!Array.isArray(arr)) {
        throw new Error("1st argument must be array-type");
    }
    if (typeof fn  != 'function') {
        throw new Error("2st argument must be function");
    }

//проверка на наличие 3-го параметра
    if(initVal !== undefined && (typeof initVal ==='number' || typeof initVal ==='string')) {
        startIndex = 0;
        rez = initVal;
    } else {
        throw new Error("wrong 3st argument");
    }

    for (let i = arr.length-1; i >= startIndex; i--) {
        rez = fn(rez,arr[i]);
    }

    return rez;
}


const arr = [1,2,3];

const acc = 0;

let rezReduce= reduceRight (arr, function(numberA, numberB){
    return (numberA + numberB);
},acc);

console.log('rez reduce() = ' + rezReduce);