// #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users  = [
    new User(1, 'Oleg', 'Olegovih', 'oleg007@gmail.com', '+380970000007' ),
    new User(2, 'Vasia', 'Vasilenko', 'vasia000@gmail.com', '+380970000000'),
    new User(3, 'Anna', 'Olegovna', 'olegovna007@gmail.com', '+380970070007' ),
    new User(4, 'Ira', 'Vasilenko', 'Ira000@gmail.com', '+380970020200' ),
    new User(5, 'lena', 'Kolos', 'Lena300@gmail.com', '+3809700450706' ),
    new User(6, 'Oleg', 'Kvas', 'Kvas22@gmail.com', '+380970870005' ),
    new User(7, 'Taras', 'Ignatenko', 'Taras777@gmail.com', '+380970068534' ),
    new User(8, 'Yra', 'Karp', 'Karp@gmail.com', '+380969538579' ),
    new User(9, 'Valera', 'Lisenko', 'Valera228@gmail.com', '+380970000228' ),
    new User(10, 'Anton', 'Plug', 'plug35@gmail.com', '+380970350035' )
];
console.log(users);

// #2ikXsE2WiKZ
//
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

let filterUsers = users.filter((user)=> user.id % 2 === 0);
console.log(filterUsers);

// #pOeHKct
//
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let usersK  = [
    new User(10, 'Oleg', 'Olegovih', 'oleg007@gmail.com', '+380970000007' ),
    new User(2, 'Vasia', 'Vasilenko', 'vasia000@gmail.com', '+380970000000'),
    new User(4, 'Anna', 'Olegovna', 'olegovna007@gmail.com', '+380970070007' ),
    new User(7, 'Ira', 'Vasilenko', 'Ira000@gmail.com', '+380970020200' ),
    new User(5, 'lena', 'Kolos', 'Lena300@gmail.com', '+3809700450706' ),
    new User(8, 'Oleg', 'Kvas', 'Kvas22@gmail.com', '+380970870005' ),
    new User(6, 'Taras', 'Ignatenko', 'Taras777@gmail.com', '+380970068534' ),
    new User(9, 'Yra', 'Karp', 'Karp@gmail.com', '+380969538579' ),
    new User(3, 'Valera', 'Lisenko', 'Valera228@gmail.com', '+380970000228' ),
    new User(1, 'Anton', 'Plug', 'plug35@gmail.com', '+380970350035' )
];

console.log(usersK);

function userSort (user1, user2) {
    return user1.id - user2.id;
}
console.log(usersK.sort(userSort));

// #nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

function Product(title, price) {
    this.title = title;
    this.price = price;
}

let clients  = [
    new Client(1, 'Oleg', 'Olegovih', 'oleg007@gmail.com', '+380970000007', [new Product('TV', 25000)] ),
    new Client(2, 'Vasia', 'Vasilenko', 'vasia000@gmail.com', '+380970000000', [new Product('Phone', 20000), new Product('TV', 25000)] ),
    new Client(3, 'Anna', 'Olegovna', 'olegovna007@gmail.com', '+380970070007', [new Product('TV', 25000), new Product('Appel Watch', 15000)] ),
    new Client(4, 'Ira', 'Vasilenko', 'Ira000@gmail.com', '+380970020200', [new Product('Phone', 20000), new Product('IPad', 23000), new Product('Appel Watch', 15000)] ),
    new Client(5, 'lena', 'Kolos', 'Lena300@gmail.com', '+3809700450706', [new Product('TV', 25000)] ),
    new Client(6, 'Oleg', 'Kvas', 'Kvas22@gmail.com', '+380970870005', [new Product('Phone', 20000), new Product('IPad', 23000), new Product('TV', 25000)]  ),
    new Client(7, 'Taras', 'Ignatenko', 'Taras777@gmail.com', '+380970068534', [new Product('TV', 25000)] ),
    new Client(8, 'Yra', 'Karp', 'Karp@gmail.com', '+380969538579', [new Product('Phone', 20000)] ),
    new Client(9, 'Valera', 'Lisenko', 'Valera228@gmail.com', '+380970000228', [new Product('Phone', 20000), new Product('TV', 25000), new Product('IPad', 23000), new Product('Appel Watch', 15000)]  ),
    new Client(10, 'Anton', 'Plug', 'plug35@gmail.com', '+380970350035', [new Product('Phone', 20000), new Product('IPad', 23000), new Product('Appel Watch', 15000)] )
];
console.log(clients);

// #8abtVjRv
//
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

let sortClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClients);

// #vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

/*function Car(model, producer, year, maxSpeed, engineVolume){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        for (let i in this) {
            console.log(i, this[i]);
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}*/

/*const cars = new Car('Master', 'Renault', '2012', 180, '2.3');


console.log(cars);
cars.drive();
cars.info();
cars.increaseMaxSpeed(50)
console.log(cars);
cars.changeYear("2014");
console.log(cars);
cars.addDriver({model: 'Trafic', producer: 'Renault', year: '2010'});*/

// #5kla3yMpgp
//
// – (Те саме, тільки через клас)
//
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car

class CaR {

    constructor(model, producer, year, maxSpeed, engineVolume){
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info () {
        for (let i in this) {
            console.log(i, this[i]);
        }
    };
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    changeYear (newValue) {
        this.year = newValue;
    };
    addDriver (driver) {
        this.driver = driver;
    };

}

const cars = new CaR('Master', 'Renault', '2012', 180, '2.3');


console.log(cars);
cars.drive();
cars.info();
cars.increaseMaxSpeed(50)
console.log(cars);
cars.changeYear("2014");
console.log(cars);
cars.addDriver({model: 'Trafic', producer: 'Renault', year: '2010'});

// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const cinderellas = [
    new Cinderella('Ira', 22, 35),
    new Cinderella('Anna', 30, 37),
    new Cinderella('Klava', 45, 42),
    new Cinderella('Vika', 27, 34),
    new Cinderella('Nastia', 33, 38),
    new Cinderella('Mira', 28, 36),
    new Cinderella('Alina', 18, 39),
    new Cinderella('Alla', 21, 40),
    new Cinderella('Zina', 35, 36.5),
    new Cinderella('Karina', 26, 37.5)
];

const prince = new Prince('Valera', 21, 42);

let myCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);

console.log(myCinderella);

// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter

// foreach
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
cinderellas.myForEach((el, index) => {
    console.log(`Індекс ${index + 1}: значення:`, el);
});

// filter
Array.prototype.myFilter = function(callback) {
    const filterCinderella = []; // Создаем новый массив для результатов

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filterCinderella.push(this[i]);
        }
    }
    return filterCinderella;
};

let qqq = cinderellas.myFilter(el => el.age < 30);
console.log(qqq);
