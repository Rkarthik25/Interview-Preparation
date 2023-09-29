// while loop is used when we dont know the exact number of iterations 
// until the condition is satisfied it will run the loop

let i=0;
while(i<5){
    console.log(i)
    i++
}

// for loops is used when we  know the exact number of iterations

// 1. for loop
  for(let i=0; i<5; i++){
    console.log(i)
  }

// 2. for of loop

let arr=[5,4,2,4,5]
for (i of arr){
    console.log("for of loop",i)
}

//  3. for in loop
let obj1={
    "a":2,
    "b":4,
    "c":5
}

let obj2=[5,2,3,4,5]

for (i in obj2){
    console.log("for in loop",obj2[i])
}

for (i in Object.keys(obj2)){
    console.log("for in loop another method",obj2[i])
}

//4. for each loop
let array=[9,5,4,3]
array.forEach(element => {
    console.log("for each ",element)
});

// 5 for await of loop 
 
//  this will help us to iterate over the promises using async and await 