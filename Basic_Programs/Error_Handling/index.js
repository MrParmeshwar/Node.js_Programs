// This is An Example Of Error Handling.
// Access This Url After Running This (http://localhost:3002/file) express server 
const express=require('express')
const app=express();
const path=require('path')


app.get('/file',(req,res,next)=>{
    let data=fs.readfile('/file-does-not-exist')
    res.send(data)
});

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Something broke')
})

const PORT=3002;
app.listen(PORT,()=>{
    console.log("Server Is Running On Port No :"+PORT)
})