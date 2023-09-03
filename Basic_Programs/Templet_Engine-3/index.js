// This is An Example To Demonstrate The Example Of Handlebar Template Engine.

const express=require('express')
const app=express();
const path=require('path')

app.set ('view engine','hbs');
app.set ('views',path.join(__dirname,'views'));

app.get('/',(request,response)=>{
    response.render('demo',{name:"Rocky", subject:"This is An Example Of Handlebar Template Engine",link:"https://www.linkedin.com/in/parmeshwar-kanhere-19605225b/"})
});

const PORT=3002;
app.listen(PORT,()=>{
    console.log("Server Is Running On Port No :"+PORT)
})