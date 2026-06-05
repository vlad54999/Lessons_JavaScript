/*#I2XsG6f

– створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б*/

function squaer(a, b){
    const rezultat = a * b
    console.log(rezultat);
    return rezultat;
}

squaer(20, 15);

/*
#ETGAxbEn8l

– створити функцію, яка обчислює та повертає площу кола з радіусом r*/

function squaerR(radius){
    const result = 3.14 * radius * radius;
    console.log(result);
    return result;
}

squaerR(30);

/*
#Mbiz5K4yFe7

– створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r*/

function squaerCilinder(radius, height){
    const result = 2 * 3.14 * radius * height;
    console.log(result);
    return result;
}

squaerCilinder(30, 20);

/*
#SIdMd0hQ

– створити функцію, яка приймає масив та виводить кожен його елемент*/
let qwe = [1, 2, 3, 4];

function mas(t){
    for (let y of t) {
        console.log(y);
    }
}

mas(qwe);

/*
#59g0IsA

– створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент*/

function par(text){
    document.write(`<p>${text}</p>`);
}

par('lololololo');

/*#hOL6126

– створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий*/

function links(textLi){
    document.write(`<ul>
        <li>${textLi}</li>
        <li>${textLi}</li>
        <li>${textLi}</li>
    </ul>`);
}

links('Text')

/*
#0Kxco1edSN

– створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write*/

function Lik(text, quantity){
    document.write(`<ul>`);
    for (let g = 0; g < quantity; g++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

Lik('rorororo', 7);

// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function prim(PrimOb){
    document.write(`<ul>`);
    for (let f of PrimOb) {
        document.write(`<li>${f}</li>`);
    }
    document.write(`</ul>`);
}

prim([12, 30, 'dsfs', 564, false, true, 653]);

/*#bovDJDTIjt

– створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.*/

function ob(users){
    for (let k of users) {
        document.write(`<div>${k.id} ${k.name} ${k.age}</div>`);
    }
}

ob([
    {id:1, name: 'Oleg', age: 31},
    {id:2, name: 'Anna', age: 22},
    {id:3, name: 'Miha', age: 37},
    {id:4, name: 'Kola', age: 25},
    {id:5, name: 'Ira', age: 27},
])
/*#pghbnSB

– створити функцію яка повертає найменьше число з масиву*/

function MinNumber (numbers){
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

console.log(MinNumber([12, 56, 7, 84, 2, 13]));

/*
#EKRNVPM

– створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*/

function sum(arr){
    let basket = 0;
    for (let h of arr) {
        basket = basket + h;
    }
    return basket;
}

console.log(sum([1, 2, 10]));

/*
#kpsbSQCt2Lf

– створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/

function swap(arr, index1, index2){
    temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
document.write(swap([11,22,33,44],0,1))

/*
#mkGDenYnNjn.html

Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400*/

// function exchange(sumUAH,currencyValues,exchangeCurrency){
//     let b = currencyValues;
//     let w = exchangeCurrency;
//     for (let kl = 0; kl < b; kl++) {
//         if (b[kl].currency === w) {
//             document.write('True');
//         }
//     }
// }

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            let kl = sumUAH / currencyValues[i].value;
            return `Ваша сума ${kl} ${exchangeCurrency}.`;
        }
    }
    return 'Такої валюти немає!'

}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))

