/*
Пропущен срок сдачи
####Задача 7

Написать код который посчитает сумму всех четных элементов в массиве.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/
let arr = [1,2,3,4];

let sum = 0;

for (let index = 0; index < arr.length; index++) {
    
    let elem = arr[index];
    
    if(elem%2==0){
        sum += arr[index];
    }
    
}
console.log(sum);