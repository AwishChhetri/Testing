const express=require('express');
const app=express();


app.get("/hello",(req,res)=>{
    res.send("Hello World")
});

app.listen(3000,()=>{
    console.log("Sever is running")
});