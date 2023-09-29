// various method to create object

// object literal notation

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};


// constructor object

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Alice", "Smith", 25);


// object.create method


const personPrototype = {
  greet: function() {
    return "Hello!";
  }
};

const person3 = Object.create(personPrototype);
// console.log(person3.greet())


// prototypal inheritance

const animal = {
    sound: "Animal sound",
    makeSound: function() {
      console.log(this.sound);
    }
  };
  
  const cat = Object.create(animal);
  cat.sound = "Meow";
  
  cat.makeSound(); // "Meow"
  