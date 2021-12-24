// let fido = {
//     name: "Fido",
//     age: 4,
//     weight: 15,
//     breed: "mix",
//     bark: function () {
//         alert(this.name + " Гав!");
//     },
// };

// fido.bark();

// let fluffy = {
//     name: "Fluffy",
//     age: 4,
//     breed: "Poodle",
//     bark: function () {
//         alert(this.name" Гав!");
//     },
// };
// fluffy.bark();

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    let age = 0;
    this.speed = 0;
    this.bark = function () {
        if (this.weight < 25)
            alert(this.name + " сказал Тяф!");
        else
            alert(this.name + " сказал Гав!");
    };
    this.start = function () {
        this.speed = 1;
    };
    this.setAge = function (a) {
        if (a < 0)
            alert("Эта собака, очевидно, еще не появилась на свет...");
        else
            age = a;
    };

    this.getAge = function () {
        return age;
    };
    this.stop = function () {
        this.speed = 0;
    };
    this.changeSpeed = function (amount) {
        if (amount < 0)
            alert("Скорость не может быть отрицательной!");
        else {
            let newspeed = this.speed *= amount;
            if (this.weight < 25) {
                if (newspeed >= 4) {
                    alert("Максимальная скорость = 4!");
                    this.speed = 4;
                }
                else
                    this.speed = newspeed;
            }
            else {
                if (newspeed >= 20) {
                    alert("Максимальная скорость = 20!");
                    this.speed = 20;
                }
                else
                    this.speed = newspeed;
            }
        }
    };
    this.showSpeed = function () {
        alert(`Скорость ${this.name} = ${this.speed}`);
    }
    this.toString = function () {
        return ` ${this.name} : ${this.breed}  вес : ${this.weight}`;
    }
};

let fido = new Dog("Fido", "Mixed", 38);
let martha = new Dog("Martha", "Bobtail", 18);
let sunshine = new Dog("Sunshine", "Golden retriever", 23);

// fido.bark();
// martha.bark();
// sunshine.bark();
let dogs = [fido, martha, sunshine];
let coef = 0;
// for (let i = 0; i < dogs.length; i++) {
//     alert(dogs[i].name);
//     dogs[i].bark();
//     dogs[i].start();
//     coef = +prompt("Увеличить скорость в...")
//     dogs[i].changeSpeed(coef);
//     dogs[i].showSpeed();
//     alert(dogs[i]);
// }

alert(fido.getAge());

fido.setAge(10);
alert(fido.getAge());