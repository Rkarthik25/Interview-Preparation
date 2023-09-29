let array=['abha','janani','shalini']

function datas(array,cb){

   for(let i=0;i<array.length;i++){
      cb(array[i])
   }
}


datas(array,(arr)=>{
    console.log(arr)
})





