function Animal(name) {
  this.name = name;
  this.speed = 0;
}

Animal.prototype.run = function () {
  alert(this.name + " бежит!");
};

// ----------RABBIT--------
function Rabbit(name) {
  Animal.apply(this, arguments);
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " подпрыгивает");
};

let rabbit = new Rabbit("Кролик");

// ----------DOG--------
function Dog(name) {
  Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " виляет хвостом");
};

let dog = new Dog("Пес");

// ----------CAT--------
function Cat(name) {
  Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " крадется");
};

let cat = new Cat("Кот");

// ----------COCK--------
function Cock(name) {
  Animal.apply(this, arguments);
}

Cock.prototype = Object.create(Animal.prototype);
Cock.prototype.constructor = Cock;

Cock.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " летит");
};

let cock = new Cock("Петух");

// ----------ELEPHANT--------
function Elephant(name) {
  Animal.apply(this, arguments);
}

Elephant.prototype = Object.create(Animal.prototype);
Elephant.prototype.constructor = Elephant;

Elephant.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " топает");
};

let elephant = new Elephant("Слон");

// ----------SNAKE--------
function Snake(name) {
  Animal.apply(this, arguments);
}

Snake.prototype = Object.create(Animal.prototype);
Snake.prototype.constructor = Elephant;

Snake.prototype.run = function () {
  alert(this.name + " ползет");
};

let snake = new Snake("Змея");

let animals = [rabbit, dog, cat, cock, snake, elephant];
for (let i = 0; i < animals.length; i++) {
  animals[i].run();
}
