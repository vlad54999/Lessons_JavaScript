// #67kfznmiMl
//
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [22, 45, 'dfds', true, undefined, false, NaN, {van: 22}, 45, 70];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.

let book1 = {titel: 'AA', pageCount: 200, gerne: 'ss'};
let book2 = {titel: 'BB', pageCount: 250, gerne: 'kk'};
let book3 = {titel: 'CC', pageCount: 300, gerne: 'dd'};

console.log(book3, book2, book1);

// #sA3Gg1sCp
//
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.

let book4 = {
    titel: 'BB',
    pageCount: 250,
    gerne: 'kk',
    autots: [
        {name: 'Leon', age: 33},
        {name: 'Anna', age: 27}
    ]
};
let book5 = {
    titel: 'CB',
    pageCount: 257,
    gerne: 'ek',
    autots: [
        {name: 'Lena', age: 45},
        {name: 'Oleg', age: 50}
    ]
};
let book6 = {
    titel: 'BL',
    pageCount: 350,
    gerne: 'kn',
    autots: [
        {name: 'Vlad', age: 28},
        {name: 'Vika', age: 47}
    ]
};
console.log(book4, book5, book6);

// #jCHFnEbdmFd
//
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'John', username: 'faf1', password: '123'},
    {name: 'John1', username: 'afa', password: '124'},
    {name: 'John2', username: 'trn', password: '1234'},
    {name: 'John3', username: 'afa2', password: '1232'},
    {name: 'John4', username: 'asdsg', password: '2324'},
    {name: 'John5', username: 'afa3', password: '12896'},
    {name: 'John6', username: 'asdbk', password: '127987'},
    {name: 'John7', username: 'mkn', password: '787'},
    {name: 'John8', username: 'nxbmb', password: '8742'},
    {name: 'John9', username: 'suunn', password: '32667'}
];
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users[4]);
console.log(users[5]);
console.log(users[6]);
console.log(users[7]);
console.log(users[8]);
console.log(users[9]);

// #coYydZuaeEB
//
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let temps = [
    {day: 'monday', morningTemp: 15, dayTemp: 20, nightTemp: 17},
    {day: 'tuesday', morningTemp: 15, dayTemp: 20, nightTemp: 17},
    {day: 'wednesday', morningTemp: 15, dayTemp: 20, nightTemp: 17},
    {day: 'thursday', morningTemp: 15, dayTemp: 20, nightTemp: 17},
    {day: 'friday', morningTemp: 15, dayTemp: 20, nightTemp: 17},
    {day: 'saturday', morningTemp: 15, dayTemp: 20, nightTemp: 17},
    {day: 'sunday', morningTemp: 15, dayTemp: 20, nightTemp: 17}
];

console.log(temps[0]);
console.log(temps[1]);
console.log(temps[2]);
console.log(temps[3]);
console.log(temps[4]);
console.log(temps[5]);
console.log(temps[6]);

// #bAUsaq6LI
//
// – Є змінна х, якій ви надаєте довільне числове значення.
//
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 7
if (x !== 0){
    console.log('right');
} else {
    console.log('wrong');
}

// #3ckURgvs
//
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//
// (в першу, другу, третю або четверту частину години).

// let time = +prompt();
let time = 7
if (time >= 0 && time < 15) {
    console.log('1');
} else if (time >= 15 && time < 30) {
    console.log('2');
} else if (time >= 30 && time < 45){
    console.log('3');
} else if (time >= 45 && time < 60) {
    console.log('4');
}

// #UMoNq4biWGe
//
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 2
if (day >= 1 && day <= 10) {
    console.log('1 декада');
} else if (day > 10 && day <= 20) {
    console.log('2 декада');
} else if (day > 20 && day <= 31) {
    console.log('3 декада');
}

//  #KzrtqyQ
//
// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let key  = prompt('введи номер дня от 1 до 7');
let key = '6'
switch(key) {
    case '1':
        console.log('Algebra');
        console.log('Biology');
        console.log('English');
        break;
    case '2':
        console.log('Algebra');
        console.log('English');
        console.log('Biology');
        break;
    case '3':
        console.log('Physics');
        console.log('Geography');
        console.log('Geometry');
        break;
    case '4':
        console.log('Algebra');
        console.log('English');
        console.log('Biology');
        break;
    case '5':
        console.log('Physics');
        console.log('Geography');
        console.log('Geometry');
        break;
    case '6':
        console.log('Geometry');
        console.log('Physics');
        console.log('Geography');
        break;
    case '7':
        console.log('Physics');
        console.log('Geography');
        console.log('Geometry');
        break;

    default:
        console.log('?????');
}

// #uwsz1RnTQJ1
//
// – Користувач вводить або має два числа.
//
//     Потрібно знайти та вивести максимальне число з тих двох .
//
//     Також потрібно врахувати, коли введені рівні числа.


// let a = +prompt('Введи чило')
// let b = +prompt('Введи чило')

let a = 70
let b = 52

if (a > b){
    console.log(a);
} else if (b > a){
    console.log(b);
} else if (a === b){
    console.log("====");
}

// #iBvqtjEm
//
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

// Перший спосіб
// let xv = 0
// if (xv === 0 || xv === null || xv === undefined || xv === NaN || xv === '' || xv === false) {
//     xv = 'default'
// }

// Другий спосіб
let xv = 0;
if (!0){
    xv = 'default'
}

console.log(xv);