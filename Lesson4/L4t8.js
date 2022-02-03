/*
Задача 8

Напишите функцию `f` . Данная функция принимает один параметр: одноуровневый или многоуровневый массив. Возвращает данная функция сумму всех элементов на всех уровнях.

Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней не было найдено ни одного числа.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если на каком то уровне было найдено не число и не массив
 */
function f(arr) {

    let sum = 0;

    function inner (arr) {
        if(Array.isArray(arr)){
            arr.forEach(elem =>inner(elem))
        } else {
            if(typeof arr === 'number') {

                return sum+=arr;

            } else {
           
                throw new Error("wrong argument type");

            }
        }

        return sum;
    }
    return inner(arr);
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];

const arr2 = [[[[[1,2]]]]];

const arr3 = [[[[[1,2]]],2],1];

const arr4 = [[[[[]]]]];

const arr5 = [[[[[],3]]]];

 console.log(f(arr)); // 12
 console.log(f(arr2)); // 3
 console.log(f(arr3)); // 6
 console.log(f(arr4)); // 0
 console.log(f(arr5)); // 3