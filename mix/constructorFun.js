//1
/*
function Phone(brand, model) {
  this.brand = brand;
  this.model = model;

  this.details = function () {
    console.log(`Phone: ${this.brand} ${this.model}`);
  };
}
const myPhone = new Phone("Apple", "16Pro");
console.log(myPhone.brand);
console.log(myPhone.model);
myPhone.details();
//2

function Rectangle(height, width) {
  this.width = width;
  this.height = height;
  this.area = function () {
    return width * height;
  };
}
const r = new Rectangle(4, 5);
console.log(r.area());
//3

function BankAccount(owner, balance) {
  this.balance = balance;
  this.owner = owner;
  this.deposit = function (amount) {
    this.balance += amount;
  };
  this.withdraw = function (amount) {
    this.balance -= amount;
  };
  this.checkBalance = function(){
    console.log(`Hi your balance is : ${this.balance}`);
}
}
const myAconte = new BankAccount("Yonatan", 1000);
myAconte.checkBalance();
myAconte.deposit(500);
myAconte.checkBalance();
myAconte.withdraw(100);
myAconte.checkBalance();
//4

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} make sound`);
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  bark() {
    console.log(`${this.name} barks`);
  }
}
const myDog = new Dog("Rocky");
myDog.speak();
myDog.bark();
//5

class Vehicle {
  constructor(type) {
    this.type = type;
  }
  describe() {
    console.log(`This is a ${this.type}`);
  }
}
class Car extends Vehicle {
  constructor(type,brand) {
    super(type);
    this.brand = brand;
  }
  info() {
    console.log(`This is a ${this.brand} ${this.type}`);
  }
}
const myCar = new Car("Car", "BMW");
myCar.describe();
myCar.info();
//6

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}
const myCircle = new Circle(3);
console.log(myCircle.area());

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side ** 2;
  }
}
const mySquare = new Square(4);
console.log(mySquare.area());
*/
