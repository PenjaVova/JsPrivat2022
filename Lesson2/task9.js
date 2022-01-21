/*
#### Задача 9

Отсортировать массив по убыванию.

```javascript
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
```
*/
let arr = [1,2,3,4,5,6];

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] < arr[j + 1]) { //условие
            change(j);
        }
    }
}
//перестановка
function change(j) {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
}
//печать результат
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}