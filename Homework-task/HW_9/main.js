// #8Nmt60ZT
//
// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.

const blok = document.createElement('div');
blok.classList.add('collapse');
blok.classList.add('beta')
blok.classList.add('alpha');
blok.classList.add('wrap');

document.body.appendChild(blok);
const blokClone = blok.cloneNode(true);
document.body.appendChild(blokClone);
blok.classList.add('clone_1')

// #OPLI89c9G
//
// – Є масив:
//  [‘Main’,’Products’,’About us’,’Contacts’]
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const xxx = ['Main','Products','About us','Contacts'];

const menu = document.createElement('ul');
menu.classList.add('menu');

for (let i of xxx){
    let li = document.createElement('li');
    li.innerText = i;
    menu.appendChild(li);
}

document.body.appendChild(menu);

// #jeBqHV525U5
//
// – Є масив
// let coursesAndDurationArray = [
// {title: ‘JavaScript Complex’, monthDuration: 5},
// {title: ‘Java Complex’, monthDuration: 6},
// {title: ‘Python Complex’, monthDuration: 6},
// {title: ‘QA Complex’, monthDuration: 4},
// {title: ‘FullStack’, monthDuration: 7},
// {title: ‘Frontend’, monthDuration: 4}
// ];
//
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
{title: 'JavaScript Complex', monthDuration: 5},
{title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
{title: 'FullStack', monthDuration: 7},
{title: 'Frontend', monthDuration: 4}
];

for (let rrr of coursesAndDurationArray){
    let div = document.createElement('div');
    div.innerText = `${rrr.title} -- ${rrr.monthDuration}`
    document.body.appendChild(div);
}

// #Kx1xgoKy8
//
// – Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
//     Завдання робити через цикли.

for (let kkk of coursesAndDurationArray){
    const nevDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerText = kkk.title;
    h1.classList.add('heading');
    const p = document.createElement('p');
    p.innerText = kkk.monthDuration;
    p.classList.add('description');

    nevDiv.append(h1, p)

    document.body.appendChild(nevDiv);
}

// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

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

console.log(coursesArray);

for(let cours of coursesArray){
    const blokCours = document.createElement('div');
        const titleCours = document.createElement('h2');
        titleCours.innerText = cours.title;
        titleCours.classList.add('titleCours');
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
            const coursMonthDuration = document.createElement('p');
            coursMonthDuration.innerText = cours.monthDuration;
            const coursHourDuration = document.createElement('p');
            coursHourDuration.innerText = cours.hourDuration;
        wrapper.append(coursMonthDuration, coursHourDuration);
        const coursBlokModules = document.createElement('ul');
        coursBlokModules.classList.add('coursBlokModules');
            for(let item of cours.modules){
                const liModules = document.createElement('li');
                liModules.innerText = item;
                coursBlokModules.appendChild(liModules);
            }

            blokCours.append(titleCours, wrapper, coursBlokModules);

    document.body.appendChild(blokCours);
}