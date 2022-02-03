/*
####Задача 10

Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
*/

function reverse (arr) { 

    if(!Array.isArray(arr)||arr.length==0){
        throw new Error ("array must have elements")
    }

    let maxI = Math.floor(arr.length/2)

    for (let i = 0; i < arr.length; i++) {
        
        if (i==maxI) break;

            let tmp = arr[i];
            arr[i]= arr[arr.length-i-1];
            arr[arr.length-i-1] = tmp;

       
    }
    console.log(arr.toString());
}


const arr = [3,2,1];
reverse(arr);