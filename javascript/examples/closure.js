function outer(){
   
    let a=2

    function inner(){
        // console.log(a)
       var a= 5
       a++
    //    console.log(a)
    }
// console.log(a)
    inner()
}
outer()


// event delegation :-
// event delegation is basically where we give the event listener to the parent 
// instead of giving the event listener to the each child separately



// event loop
// The event loop continuously checks the call stack and the callback queue.
//  If the call stack is empty, it takes the first function 
//  from the callback queue and pushes it to the call stack for execution.

function a(){
console.log("start")
}

function b(){
    setTimeout(()=>{
  console.log("event loop after 2000")
    },2000)
}

function c(){
    console.log("stop")
}

a()
b()
c()