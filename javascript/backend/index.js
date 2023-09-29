const express = require('express')
const { connection } = require('./db')
const { userRoute } = require('./Routes/user.route')

const app= express()

app.use(express.json())

app.get('/',async(req,res)=>{
  res.send("hi abha")
})

app.use("/user",userRoute)

app.listen(3000,async(req,res)=>{
    try{
        await connection
        console.log("started")
    }
    catch(err){
        console.log(err)
    }
})

