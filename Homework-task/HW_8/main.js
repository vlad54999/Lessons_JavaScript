// #iz6emEsP2BA
//
// – є масив
//
// let coursesAndDurationArray = [
// {title: ‘JavaScript Complex’, monthDuration: 5},
// {title: ‘Java Complex’, monthDuration: 6},
// {title: ‘Python Complex’, monthDuration: 6},
// {title: ‘QA Complex’, monthDuration: 4},
// {title: ‘FullStack’, monthDuration: 7},
// {title: ‘Frontend’, monthDuration: 4}
// ];
//
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
//
//     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції

let coursesAndDurationArray = [
{title: 'JavaScript Complex', monthDuration: 5},
{title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
{title: 'FullStack', monthDuration: 7},
{title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.map((mas, index) => ({...mas, id: index + 1})));

// #AiN5CoUQ
//
// Створити функцію, яка робить глибоку копію об’єкта.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

function cloner(obj) {
    if (obj) {
        let functions = [];

        for (let key in obj) {
            if (typeof obj[key] === 'function') {
                functions.push({
                    key: key,
                    func: obj[key].bind({})
                });
            }
        }
        let cloneObj = JSON.parse(JSON.stringify(obj));
        for (let item of functions) {
            cloneObj[item.key] = item.func;
        }

        console.log(cloneObj);
        return cloneObj;
    }

    throw new Error("!!!");
}

const www = {
    id: 324,
    name: 'Oleg',
    functionOne(){ console.log('Hello!') },
    functionTwo(){ console.log('Hi!') }
};

const clone = cloner(www);
clone.functionOne();
clone.functionTwo();
console.log(clone.name);
