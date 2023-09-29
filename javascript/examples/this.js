// let obj={
//     "A":1,
//     "B":2,
//     "C":3,
//      soln:function(){
//         console.log(this['B'])
//      }
// }

// obj.soln()


// function Car(ans) {
//     this.ans = ans;
//   }
  
//   const myCar = new Car("audi");
//   console.log(myCar.ans); // "Toyota"
  
// currying

// Currying is the process of taking a function with multiple arguments and turning it into a
// sequence of functions each with only a single argument.

// Non-curried function
// function add(a, b, c) {
//     return a + b + c;
//   }
  
// const result = add(1, 2, 3);
//   console.log(result); // Output: 6
  
  // Curried version of the same function
  // function curriedAdd(a) {
  //   return function(b) {
  //     return function(c) {
  //       return a + b + c;
  //     };
  //   };
  // }
  
  // const curriedResult = curriedAdd(1)(2)(3);
//   console.log(curriedResult); // Output: 6


// Original object
// const originalObject = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     state: "NY"
//   }
// };

// Shallow copy using Object.assign
// const shallowCopy = Object.assign({}, originalObject);

// // Modify the shallow copy
// shallowCopy.name = "Alice";
// shallowCopy.address.city = "San Francisco";

// console.log(originalObject);
// console.log(shallowCopy);

// Original object
// const originalObject = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     state: "NY"
//   }
// };

// // Deep copy using JSON
// const deepCopy = JSON.parse(JSON.stringify(originalObject));

// // Modify the deep copy
// deepCopy.name = "Alice";
// deepCopy.address.city = "San Francisco";

// console.log(originalObject);
// console.log(deepCopy);



function greet() {
  console.log("Hello!");
}

// Schedule the function to run after 3 seconds
const timeoutId = setTimeout(greet, 8000);

// Later, cancel the scheduled function call using clearTimeout
clearTimeout(timeoutId);

console.log("Scheduled greeting canceled.");