// Task 1

let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let i = 3.14;
let j = 2.7;
let k = 16;
let l = true;
let m = false;

let qwe = `${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m} `;
console.log(qwe);

// Task 2

let firstName = 'Владислав'
let middleName = 'Олександрович'
let lastName = 'Курінний'

let person = lastName + ' ' + firstName + ' ' + middleName;
console.log(person);

//Task 3

let aa = 100
console.log(typeof aa , aa);
let bb = '100'
console.log(typeof bb , bb);
let cc = true
console.log(typeof cc , cc);

//Task 4

// Отримуємо дані від користувача
let FirstName = prompt("Введіть ваше Ім'я:");
let patronymic = prompt("Введіть ваше По-батькові:");
let age = prompt("Введіть ваш вік (роки):");

// Виводимо отримані дані в консоль
console.log("Ім'я:", FirstName);
console.log("По-батькові:", patronymic);
console.log("Вік:", age);

let xxx = `Вітаємо вас ${FirstName} ${patronymic}, вам ${age} років?`;
console.log(xxx);