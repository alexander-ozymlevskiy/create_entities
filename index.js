// Людина

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  personInfo() {
    console.log(`Ім'я: ${this.name}`);
    console.log(`Вік: ${this.age}`);
  }
}

// Автомобіль

class Car {
  constructor(brand, model, year, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
  }

  getOwner(owner) {
    if (owner.age > 18) {
      this.owner = owner;
    } else {
      console.log("Власник повинен бути старше 18 років.");
    }
  }

  carInfo() {
    if (this.owner) {
      console.log("Інформація про власника:");
      this.owner.personInfo();
    }
    console.log(`Марка: ${this.brand}`);
    console.log(`Модель: ${this.model}`);
    console.log(`Рік випуску: ${this.year}`);
    console.log(`Номерний знак: ${this.licensePlate}`);
  }
}

// Екземпляри класу людина

const personNazar = new Person("Назар", 10);
const personViktor = new Person("Віктор", 20);
const personFedir = new Person("Федір", 30);

// Екземпляри класу авто

const carBmw = new Car("BMW", "M5 F90", 2019, "ВН7777ВВ");
const carMersedes = new Car("Mersedes", "G63 AMG", 2023, "ВН6666ВВ");
const carFerrari = new Car("Ferrari", "F-40", 1991, "ВН4444ВВ");

// Присвоєння власників автомобілям

carFerrari.getOwner(personNazar);
carBmw.getOwner(personViktor);
carMersedes.getOwner(personFedir);

// Виведення інформації

carFerrari.carInfo();
carBmw.carInfo();
carMersedes.carInfo();
