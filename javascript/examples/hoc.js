//  a higher-order function is a function that takes one or more
//  functions as arguments, returns a function, or both

let arr=[5,4,3,10,4,5,7,0,1,20]

// 1. forEach function 

 arr.forEach((el)=>{
    // console.log(el)
})

// 2. map function

 let ans= arr.map((el)=>{
    return el 
 })

//  console.log(ans)

//  3. filter function

let res= arr.filter((el)=>{
   return el>=10
})
// console.log(res)

// 4. reduce function

let soln = arr.reduce((a1,a2)=>{
  return a1+a2
},5)

// console.log(soln) 


