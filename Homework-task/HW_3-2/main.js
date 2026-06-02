// JS. Додаткові ДЗ по масивах та циклах
//
// #WpkK0ZH1
//
// –створити масив з:
// – з 5 числових значень
// – з 5 стічкових значень
// – з 5 значень стрічкового, числового та булевого типу
// – та вивести його в консоль

let w = [
    [2, 4, 6, 7, 8],
    ['dsgs', 'ehrth', 'eggs', 'ddngs', 'dshhmgy',],
    ['kjtr', 1, true, 'kjttktr', 2, false, 'kjsdgtr', 3, true, 'kjkuuiltr', 4, false, 'kjryjtr', 5, true,]
];

console.log(w);

// #4aDbSgh
//
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль

let wp = [];

wp[0] = 45;
wp[1] = 'sdfsdvsdv';
wp[2] = 6;
wp[3] = true;

console.log(wp);

// #qLQLJSeN7i
//
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число, кратне 3, на слово “okten”
// 8. вивести масив у зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)

let wpe = [2,17,13,6,22,31,45,66,100,-18]
// // 1. перебрати його циклом while
// i = 0;
// while (i < wpe.length){
//     console.log(wpe[i]);
//     i++;
// }
// 2. перебрати його циклом for
// for (i = 0; i < wpe.length; i++){
//     console.log(wpe[i])
// }
// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let ii = 1
// while (ii < wpe.length){
//     console.log(wpe[ii])
//     ii += 2
// }
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (r = 1; r < wpe.length; r += 2){
//     console.log(wpe[r])
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 1;
// while (i < wpe.length) {
//     if (i % 2 === 0) {
//         console.log(wpe[i]);
//     }
//     i++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 1; i < wpe.length; i++) {
//     if (i % 2 === 0) {
//         console.log(wpe[i]);
//     }
// }
// 7. замінити кожне число, кратне 3, на слово “okten”
for (let i = 1; i < wpe.length; i++) {
    if (i % 3 === 0) {
        let ll = 'okten';
        console.log(ll);
    } else {
        console.log(wpe[i]);
    }
}
// 8. вивести масив у зворотньому порядку.
wpe.reverse();
console.log(wpe);
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
//-------------------------------------1
// i = 0;
// while (i < wpe.length){
//     console.log(wpe[i]);
//     i++;
// }
//------------------------------------2
// for (i = 0; i < wpe.length; i++){
//     console.log(wpe[i])
// }
// -----------------------------------3
// let ii = 1
// while (ii < wpe.length){
//     console.log(wpe[ii])
//     ii += 2
// }
//-----------------------------------4
// for (r = 1; r < wpe.length; r += 2){
//     console.log(wpe[r])
// }
// let ia = 1;
//----------------------------------5
// let i = 1;
// while (i < wpe.length) {
//     if (i % 2 === 0) {
//         console.log(wpe[i]);
//     }
//     i++;
// }
//---------------------------------6
// for (let i = 1; i < wpe.length; i++) {
//     if (i % 2 === 0) {
//         console.log(wpe[i]);
//     }
// }
//---------------------------------7
// for (let i = 1; i < wpe.length; i++) {
//     if (i % 3 === 0) {
//         let ll = 'okten';
//         console.log(ll);
//     } else {
//         console.log(wpe[i]);
//     }
// }
//
// // #yHAwJOyiC
// //
// // – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let ui = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let yy = 0; yy < ui.length; yy++) {
//     console.log(ui[yy]);
// }
//
// //     #GamKju89ob
// //
// // – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
//
// let uc = ['lorem', 'one', 'two', 'three',  'four',  'five', 'six', 'seven', 'eight', 'nine'];
// for (let x = 0; x < uc.length; x++) {
//     console.log(uc[x]);
// }
//
// //     #Bm76xmg
// //
// // – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let lor = ['one', 'two', 'three', 321, true, 'gsfs', 456, false, 'nine', NaN];
// for (let x = 0; x < lor.length; x++) {
//     console.log(lor[x]);
// }
//
// //     #u3vmD0YJXh
// //
// // – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let lore = ['one', false, 'three', 321, true, 'gsfs', 456, false, 'nine', true]
//
// for (let xl = 0; xl < lore.length; xl++) {
//     if (typeof lore[xl] === 'boolean') {
//         console.log(lore[xl]);
//     } else {
//         console.log('Error');
//     }
// }
//
// // #9stMq2ou
//
// // – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
// for (let xle = 0; xle < lore.length; xle++) {
//     if (typeof lore[xle] === 'number') {
//         console.log(lore[xle]);
//     } else {
//         console.log('Error');
//     }
// }
//
// // #mK4pmM4
// //
// // – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// for (let xle = 0; xle < lore.length; xle++) {
//     if (typeof lore[xle] === 'string') {
//         console.log(lore[xle]);
//     } else {
//         console.log('Error');
//     }
// }
//
// // #0pm3EyTKy9
// //
// // – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
// let my = [];
// my[0] = 13;
// my[1] = "Hello";
// my[2] = true;
// my[3] = null;
// my[4] = undefined;
// my[5] = { name: "Oleg", age: 25 };
// my[6] = [1, 2, 3];
// my[7] = NaN;
// my[8] = "apple";
// my[9] = 765;
//
// for (let xt = 0; xt < my.length; xt++) {
//     console.log(my[xt]);
// }
//
// //     #mDMWMW5a
// //
// // – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let z = 1; z <= 10; z++){
//     console.log("Поточний крок: " + z);
//     document.write("Поточний крок: " + z + "<br>");
// }
//
// // #4sXhaa5YMM
// //
// // – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let zx = 1; zx <= 100; zx++){
//     console.log("Поточний крок: " + zx);
//     document.write("Поточний крок: " + zx + "<br>");
// }
//
// // #s24slNyz7
// //
// // – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (let zix = 1; zix <= 100; zix += 2){
//     console.log("Поточний крок: " + zix);
//     document.write("Поточний крок: " + zix + "<br>");
// }
//
// // #zananT5FR1
// //
// // – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let zux = 1; zux <= 100; zux++){
//     if (zux % 2 === 0) {
//         console.log("Поточний крок: " + zux);
//         document.write("Поточний крок: " + zux + "<br>");
//     }
// }
//
// // #Tfrwls7FM
// //
// // – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let ztux = 1; ztux <= 100; ztux++){
//     if (ztux % 2 !== 0) {
//         console.log("Поточний крок: " + ztux);
//         document.write("Поточний крок: " + ztux + "<br>");
//     }
// }

// #reLkOkTB29Q
//
// створити масив книжок (назва, кількість сторінок, автори , жанри).
//
// – знайти найбільшу книжку.
// – знайти книжку/ки з найбільшою кількістю жанрів
// – знайти книжку/ки з найдовшою назвою
// – знайти книжку/ки, які писали 2 автори
// – знайти книжку/ки, які писав 1 автор

// let books = [
//     {
//         title: "Дюна",
//         pages: 412,
//         authors: ["Френк Герберт"],
//         genres: ["Наукова фантастика", "Пригоди"]
//     },
//     {
//         title: "Володар перснів: Братство Персня",
//         pages: 736,
//         authors: ["Джон Р. Р. Толкін"],
//         genres: ["Фентезі", "Епос", "Пригоди"]
//     },
//     {
//         title: "Блакитні троянди",
//         pages: 240,
//         authors: ["Леся Українка"],
//         genres: ["Драма"]
//     },
//     {
//         title: "Добрі передвісники",
//         pages: 400,
//         authors: ["Нілл Ґейман", "Террі Пратчетт"],
//         genres: ["Фентезі", "Гумор", "Сатира"]
//     },
//     {
//         title: "1984",
//         pages: 328,
//         authors: ["Джордж Орвелл"],
//         genres: ["Антиутопія", "Політична фантастика"]
//     }
// ];
//
// // ------Чесно кажучи сам не догадався і списав відповіді з інтернету------
// // – знайти найбільшу книжку.
// let maxpages = books[0];
// for (let yt = 1; yt < books.length; yt++) {
//     if (books[yt].pages > maxpages.pages) {
//         maxpages = books[yt];
//     }
// }
// console.log("Найбільша книжка: " + maxpages.title + " кількість сторінок: " + maxpages.pages);
// // – знайти книжку/ки з найбільшою кількістю жанрів
// let maxGenresCount = 0;
// let booksWithMaxGenres = [];
// for (let i = 0; i < books.length; i++) {
//     if (books[i].genres.length > maxGenresCount) {
//         maxGenresCount = books[i].genres.length;
//         booksWithMaxGenres = [books[i]];
//     } else if (books[i].genres.length === maxGenresCount) {
//         booksWithMaxGenres.push(books[i]);
//     }
// }
// console.log("Книжки з найбільшою кількістю жанрів:", booksWithMaxGenres.map(b => b.title));
// // – знайти книжку/ки з найдовшою назвою
// let longestTitleLength = 0;
// let booksWithLongestTitle = [];
// for (let i = 0; i < books.length; i++) {
//     if (books[i].title.length > longestTitleLength) {
//         longestTitleLength = books[i].title.length;
//         booksWithLongestTitle = [books[i]];
//     } else if (books[i].title.length === longestTitleLength) {
//         booksWithLongestTitle.push(books[i]);
//     }
// }
// console.log("Книжки з найдовшою назвою:", booksWithLongestTitle.map(b => b.title));
//
// // – знайти книжку/ки, які писали 2 автори
// let booksWithTwoAuthors = [];
// for (let i = 0; i < books.length; i++) {
//     if (books[i].authors.length === 2) {
//         booksWithTwoAuthors.push(books[i]);
//     }
// }
// console.log("Книжки, які писали 2 автори:", booksWithTwoAuthors.map(b => b.title));
//
// // – знайти книжку/ки, які писав 1 автор
// let booksWithOneAuthor = [];
// for (let i = 0; i < books.length; i++) {
//     if (books[i].authors.length === 1) {
//         booksWithOneAuthor.push(books[i]);
//     }
// }
// console.log("Книжки, які писав 1 автор:", booksWithOneAuthor.map(b => b.title));

// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
// 2. Вивести за допомогою console.log кожен третій елемент
// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.

// 1. Створити пустий масив та:
// 1-a Заповнити масив 50 парними числами
// let pp = [];
// for (let i = 1; i <= 50; i++) {
//     pp.push(i * 2);
// }
// console.log(pp);
// // 1-b Заповнити масив 50 непарними числами
// let np = [];
// for (let i = 0; i < 50; i++) {
//     np.push(i * 2 + 1);
// }
// // 1-c Заповнити масив 20-ма рандомними числами
// let rr = [];
// for (let i = 0; i < 20; i++) {
//     rr.push(Math.round(Math.random() * 10));
// }
// console.log(rr);
// // 1-d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let Rmin = 8;
// let Rmax = 732;
// let Rand = [];
// for (let i = 0; i < 20; i++) {
//     let Rnum = Math.round(Math.random() * (Rmax - Rmin + 1)) + Rmin;
//     Rand.push(Rnum);
// }
// console.log(Rand)
//
// // 2. Вивести за допомогою console.log кожен третій елемент
// console.log(Rand);
// for (let i = 2; i < Rand.length; i +=3) {
//     console.log(Rand[i]);
// }
// // 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
// console.log(Rand);
// for (let i = 2; i < Rand.length; i +=3) {
//     if (Rand[i] % 2 === 0) {
//         console.log(Rand[i]);
//     }
// }
// // 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
// console.log(Rand);
// let newmas = [];
//
// for (let i = 2; i < Rand.length; i +=3) {
//     if (Rand[i] % 2 === 0) {
//         console.log(Rand[i]);
//         newmas.push(Rand[i]);
//     }
// }
// console.log(newmas);
// // 5. Вивести кожен елемент масиву, сусід справа якого є парним
// // EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
// let exampleArray = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0; i < exampleArray.length - 1; i++) {
//     if (exampleArray[i + 1] % 2 === 0) {
//         console.log(exampleArray[i]);
//     }
// }
// // 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// const prices = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
//
// for (let i = 0; i < prices.length; i++) {
//     sum += prices[i];
// }
// const average = sum / prices.length;
// console.log("Середній чек:", average);
// // 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let yte = [2, 7, 11, 4, 15]; // Рандомний масив
// const NEWyte = [];
//
// for (let i = 0; i < yte.length; i++) {
//     NEWyte.push(yte[i] * 5);
// }
// console.log(NEWyte);
// // 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.
// let rundomMas = ["apple", 42, true, 105, "js", 7, null, 23];
// let NewRundomMas = [];
//
// for (let i = 0; i < rundomMas.length; i++) {
//     if(typeof rundomMas[i] === "number") {
//         NewRundomMas.push(rundomMas[i]);
//     }
// }
// console.log(NewRundomMas);



// – Дано 2 масиви з рівною кількістю об’єктів.
//
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ]
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
//Записати цей об’єкт в новий масив
// Example:
//     let usersWithCities = [
//     {
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {
//         user_id: 1,
//         country: 'Ukraine',
//         city: 'Ternopil'
//         }
//     },
// ]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    let user = usersWithId[i];
    let userAddress = null;

    for (let j = 0; j < citiesWithId.length; j++) {
        if (citiesWithId[j].user_id === user.id) {
            userAddress = citiesWithId[j];
            break; // Місто знайдено, зупиняємо внутрішній цикл
        }
    }
    usersWithCities.push({
        id: user.id,
        name: user.name,
        age: user.age,
        status: user.status,
        address: userAddress
    });
}

console.log(usersWithCities);


// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let ber = [12, 5, 8, 23, 14, 9, 4, 11, 30, 7];

for (let i = 0; i < ber.length; i++) {
    if (ber[i] % 2 === 0) {
        console.log(ber[i]);
    }
}

// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let mer = [];
for (let j = 0; j < ber.length; j++) {
    mer.push(ber[j]);
}
console.log(mer);
// – Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
const letters = ['a', 'b', 'c'];
let word = '';

for (let i = 0; i < letters.length; i++) {
    word += letters[i];
}
console.log(word);
// – Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let i = 0;
while (i < letters.length) {
    word += letters[i];
    i++
}
console.log(word);
// – Дано масив: [ 'a', ‘b’, 'c'] . За допомогою циклу for of зібрати всі букви в слово.
for (let poiu of letters) {
    word += poiu;
}
console.log(word);