const express= require("express")

const {userModel} = require("../Model/user.model")

const bcrypt= require("bcrypt")

const jwt=require("jsonwebtoken")

const userRoute=express.Router()

userRoute.post("/reg",async(req,res)=>{
    
     try{

        const {name,mail,pass}=req.body;

        const hashpass=await bcrypt.hash(pass,5)

        const user=new userModel({
            name,mail,pass:hashpass
        })
        await user.save()
        res.send("user registered")
     }
      
     catch(err){
         res.send(err)
     }
})


userRoute.post("/log",async(req,res)=>{
    try{
     const {mail,pass}=req.body

     const findMail=await userModel.find({mail})
     
     if(findMail && (await bcrypt.compare(pass,findMail.pass))){

        const token=jwt.sign({userID:findMail._id},"key",{
            expiresIn:"1h"
        })
        res.send(token)
     }

    }
    catch(err){
         console.log(err)
    }

})

module.exports={userRoute}


