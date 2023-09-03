// This is An Example To Demonstrate The Example Of ejs Template Engine.

const express=require('express')
const app=express();
const path=require('path')

app.set ('view engine','ejs');
app.set ('views',path.join(__dirname,'views'));
// Here __dirname is indicating the current directory.

app.get('/',(request,response)=>{
    response.render('demo',{name:"Rocky", subject:"This is An Example Of (ejs) Template Engine",link:"https://www.linkedin.com/in/parmeshwar-kanhere-19605225b/"})
});

const PORT=3002;
app.listen(PORT,()=>{
    console.log("Server Is Running On Port No :"+PORT)
})