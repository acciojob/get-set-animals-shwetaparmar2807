class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  bark() {
    console.log("woof");
  }
}

const myCat = new Cat("Siamese");
myCat.makeSound();
myCat.purr();      

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); 
myDog.bark();      
