// In This Example We Are Going Ro Create A Server By Using Express Librarry

//load express library 
const express=require('express')
//Lets Create a object of express 
const app=express() //Here We Crated a app object of express

//Lets Call The get Function 
app.get('/',(request,response)=>{
    response.send("Hello This Message Is From Express Server")
})

app.listen(3000,()=>{
    console.log("server Has been Started")
})