// #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

const btnText = document.getElementById('btnText');
const btnTextOn = document.getElementById('btnTextOn');

btnText.onclick = function() {
    document.getElementById('text').style.display = 'none';
}

btnTextOn.onclick = function() {
    document.getElementById('text').style.display = 'block';
}
// спробував свій варіант

const text2 = document.getElementById('text2');
const btnTextOnOff = document.getElementById('btnTextOnOff');

btnTextOnOff.onclick = function() {
    if (text2.style.display === 'none') {
        text2.style.display = 'block';
    } else {
        text2.style.display = 'none';
    }
}

// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

const ageInput = document.getElementById('ageInput');
const checkBtnAge =  document.getElementById('checkBtnAge');

checkBtnAge.onclick = function() {
    const age = parseInt(ageInput.value);
    if (age < 0 || age > 100) {
        alert('Введи нормальний вік! ');
    } else if  (age < 18) {
        alert('Ви молодше 18 років');
    }  else {
        alert('Вітаю ви старше за 18 років');
    }
}


// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
const someForm = document.forms.someForm;
const target = document.getElementById('target');

someForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = someForm.name.value;
    const surnameValue = someForm.surname.value;
    const ageValue = someForm.age.value;
    let obj = {nameValue, surnameValue, ageValue};
    console.log(obj);
    target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
})

// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let xxx = +localStorage.getItem('number');
xxx += 1;
localStorage.setItem('number', xxx);
document.write(`Сторінку оновили: ${xxx}`);

// #LhSfdhM3
//
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

let sessionsList = [];

if (localStorage.getItem('sessionsList')) {
  sessionsList = JSON.parse(localStorage.getItem('sessionsList'));
}
sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const inputKonvert = document.getElementById('inputKonvert');
const result = document.getElementById('result');
inputKonvert.oninput = function() {
    result.innerText = +this.value * 2.2;
}

// #RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName, objToAdd) {
    const lsItem = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error('There is no such array');
    }

    const arr = JSON.parse(lsItem);
    if (typeof(objToAdd) === 'object') {
        arr.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(arr));

}

addToLocalStorage('sessionsList', {text: 'lolololo'});
// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

const table = document.getElementById('table');

const tabelGeneratorFrom =  document.forms['tabelGeneratorFrom'];

tabelGeneratorFrom.onsubmit = function(w) {
    w.preventDefault();
    const linesValue = +tabelGeneratorFrom.lines.value;
    const cellsValue = +tabelGeneratorFrom.cells.value;
    const dateValue = tabelGeneratorFrom.data.value;
    console.log(linesValue, cellsValue, dateValue);

    for(let i = 0; i < linesValue; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            let td = document.createElement('td');
            td.innerText = dateValue;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
};

// #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

const priceBlock = document.getElementById('priceBlock');

let currentPrice = Number(localStorage.getItem('savedPrice')) || 100;
let lastTime = localStorage.getItem('lastUpdateTime');
let currentTime = Date.now();

if (lastTime !== null) {
    let secondsPassed = (currentTime - +lastTime) / 1000;
    if (secondsPassed >= 10) {
        currentPrice = currentPrice + 10;
        localStorage.setItem('savedPrice', currentPrice);
        localStorage.setItem('lastUpdateTime', currentTime);
    }
} else {
    localStorage.setItem('savedPrice', currentPrice);
    localStorage.setItem('lastUpdateTime', currentTime);
}

priceBlock.innerText = currentPrice + 'грн';

// #NKB0tgWIK1G
//
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
//     При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів
const mas = [];
for (let i = 1; i <= 100; i++) {
    mas.push({ id: i, title: 'Елемент номер: ' +  i });
}
// console.log(mas);

const box = document.getElementById('box');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let page = 1;

function showPage() {
    box.innerHTML = '';

    let start = (page - 1) * 10;
    let end = start + 10;
    let tenItems = mas.slice(start, end);

    tenItems.forEach(item => {
        let p = document.createElement('p');
        p.innerText = item.title;
        box.appendChild(p);
    });
}
next.onclick = function() {
    if (page < 10) {
        page++;
        showPage();
    }
}

prev.onclick = function() {
    if (page > 1) {
        page--;
        showPage();
    }
}
showPage();