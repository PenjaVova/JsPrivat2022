/*
Дано число `n=1000`. Делите его на 2 столько раз, пока результат деления не станет меньше 50. 
Какое число получится? 
Посчитайте количество итераций, 
необходимых для этого (итерация - это проход цикла), и запишите его в переменную `num`.
*/
function recursion (n,count) {
    n=n/2;
    count++;
    if (n>50){
        return recursion (n,count);
    } else {
        console.log(n);
        return count;
    }
};
var a = 1000;
var b = 0;

var num = recursion(a,b);

console.log('num = ' + num);
