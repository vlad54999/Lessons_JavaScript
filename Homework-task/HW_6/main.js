// #dFeorS3m7u
//
// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’
// ‘lorem ipsum’
// ‘javascript is cool’

let q = 'hello world';
console.log(q.length);
let w = 'lorem ipsum';
console.log(w.length);
let e = 'javascript is cool';
console.log(e.length);

// #8lld9HMxXWB
//
// – Перевести до великого регістру наступні стрінгові значення
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
let q1 = q.toUpperCase();
console.log(q1)
let w1 = w.toUpperCase();
console.log(w1)
let e1 = e.toUpperCase();
console.log(e1)

// #ClDsAm7xba7
//
// – Перевести до нижнього регістру наступні стрінгові значення
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

let q2 = q1.toLowerCase();
console.log(q2)
let w2 = w1.toLowerCase();
console.log(w2)
let e2 = e1.toLowerCase();
console.log(e2)

// #0b89BkYZwu
//
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.

let str = ` dirty string   `;
let str1 = str.trim();
console.log(str1)
console.log(str.length);
console.log(str1.length);

// #bfoJuse4ZzP
//
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = ‘Ревуть воли як ясла повні’;
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

let str2= 'Ревуть воли як ясла повні';

function stringToarray(str){
  if (str){
    return  str.split(' ');
  }
  return [''];
}

console.log(stringToarray(str2))

// #Rbr5kEQ
//
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.

let mas = [10,8,-7,55,987,-1011,0,1050,0];
let masString = mas.map(number => number + '');
console.log(mas);
console.log(masString);

// #5hqyKTfmc
//
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
//     let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]

let nums = [11,21,3];

function sortNums(array,direction) {
  if (direction === 'to-min') return array.sort((a,b) => b - a);
  if (direction === 'to-max') return array.sort((a,b) => a - b);
}

console.log(sortNums(nums, 'to-max'));
console.log(sortNums(nums, 'to-min'));

// #yo06d74c1C
//
// – є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'Java Complex', monthDuration: 6},
// ];
//
//  — відсортувати його за спаданням за monthDuration
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
 {title: 'JavaScript Complex', monthDuration: 5},
 {title: 'QA Complex', monthDuration: 4},
 {title: 'FullStack', monthDuration: 7},
 {title: 'Frontend', monthDuration: 4},
 {title: 'Python Complex', monthDuration: 6},
 {title: 'Java Complex', monthDuration: 6},
];

let mak = coursesAndDurationArray
    .sort((a,b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
      value.id = index + 1;
      return value;
    }
    );

console.log(mak);

// #4LJn7zBx
//
// взяти з arrays.js масив coursesArray
// –написати пошук всіх об’єктів, в яких в modules є sass
// –написати пошук всіх об’єктів, в яких в modules є docker

let coursesArray = [
 {
  title: 'JavaScript Complex',
  monthDuration: 5,
  hourDuration: 909,
  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
 },
 {
  title: 'Java Complex',
  monthDuration: 6,
  hourDuration: 909,
  modules: ['html',
   'css',
   'js',
   'mysql',
   'mongodb',
   'angular',
   'aws',
   'docker',
   'git',
   'java core',
   'java advanced']
 },
 {
  title: 'Python Complex',
  monthDuration: 6,
  hourDuration: 909,
  modules: ['html',
   'css',
   'js',
   'mysql',
   'mongodb',
   'angular',
   'aws',
   'docker',
   'python core',
   'python advanced']
 },
 {
  title: 'QA Complex',
  monthDuration: 4,
  hourDuration: 909,
  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
 },
 {
  title: 'FullStack',
  monthDuration: 7,
  hourDuration: 909,
  modules: ['html',
   'css',
   'js',
   'mysql',
   'mongodb',
   'react',
   'angular',
   'aws',
   'docker',
   'git',
   'node.js',
   'python',
   'java']
 },
 {
  title: 'Frontend',
  monthDuration: 4,
  hourDuration: 909,
  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
 }
];
let vv = coursesArray.filter(course => {
    return course.modules.includes('sass');
    }
);
console.log(vv);
let ff = coursesArray.filter(course => {
     return course.modules.includes('docker');
    }
);
console.log(ff);

// #bolvdlhP
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
// – знайти піковий туз
// – всі шістки
// – всі червоні карти
// – всі буби
// – всі трефи від 9 та більше
//
// Приклад моделі об’єкту карти:
// {
//  cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//  value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//  color:”, // ‘red’,’black’
// }

const cardSuit = [
 {suit: 'spade', color: 'blak'},
 {suit: 'diamond', color: 'red'},
 {suit: 'heart', color: 'red'},
 {suit: 'clubs', color: 'blak'},
];
const sizes = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const deck = [];  // Колода
for (let f of cardSuit) {
 for (let i of sizes) {
  deck.push({
   suit: f.suit,
   size: i,
   color: f.color
  });
 }
}
console.log(deck);
// – знайти піковий туз
let clubsAce = deck.find(h => h.suit === 'clubs' && h.size === 'ace');
console.log('Піковий туз:', clubsAce);
// – всі шістки
let sixs = deck.filter(h => h.size === '6');
console.log('Всі шістки:',  sixs);
// – всі червоні карти
let redColorCard = deck.filter(h => h.color === 'red');
console.log('Всі червоні карти:',  redColorCard);
// – всі буби
let diamondCard = deck.filter(h => h.suit === 'diamond');
console.log('Всі буби:',  diamondCard);
// – всі трефи від 9 та більше
let clubsCard = deck.filter(h => h.suit === 'clubs');
let indexNineClubsCart = clubsCard.findIndex(c => c.size === '9');
let afterNine = clubsCard.slice(indexNineClubsCart);

console.log('Всі трефи від 9 та більше:',  afterNine);

// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
// {
//  spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const packedDeck = deck.reduce((accumulator, currentCard) => {
 const suit = currentCard.suit;
 accumulator[suit].push(currentCard);
 return accumulator;
}, {
   spade: [],
   diamond: [],
   heart: [],
   clubs: []
});

console.log('Упакованная колода:', packedDeck);
