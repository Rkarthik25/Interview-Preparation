// const person = {
//   name: "Alice",
//   sayHello: function() {
//     console.log(`Hello, ${this.name}!`);
//   }
// };

// const anotherPerson = {
//   name: "Bob"
// };

// // Using "call" to borrow the "sayHello" function
// person.sayHello.call(anotherPerson); // Output: "Hello, Bob!"

  

// function greet(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const person = {
//   name: "Alice"
// };

// // Using "apply" to pass arguments as an array
// greet.apply(person, ["Hi"]); // Output: "Hi, Alice!"


// const person = {
//   name: "Alice",
//   sayHello: function() {
//     console.log(`Hello, ${this.name}!`);
//   }
// };

// const greet = person.sayHello.bind(person);

// // Using "bind" to create a new function with a fixed context
// greet(); // Output: "Hello, Alice!"


  