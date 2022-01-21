/*
####Задача 6

Написать код который посчитает сумму всех элементов в масиве.

```js
var arr = [1,2,3,4];
```*/

let arr = [1,2,3,4];

let sum = 0;

for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
}
console.log(sum);