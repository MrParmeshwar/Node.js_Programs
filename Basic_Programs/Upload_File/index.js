// Below Is the Code For Upload And Download File Using Express Server.
// You Have To Use POSTMAN To Send The Request .

const express=require('express');
const app=express();
const upload=require('./upload');
let cors=require('cors')
app.use(cors())
app.use(express.json())


// set up a route for file upload s

app.post('/uploads',upload.single('file'),(req,res)=>{
    // Handle The Uploaded File 
    res.json({message:'file Uploaded Successfully..!'});
});

//Below Is The Code For Download The File.

app.get('/downloads',(req,res)=>{
    const file=`${__dirname}/uploads/Letter of Recommendation.pdf`;
    res.download(file);
})

app.listen(3002,()=>{
    console.log("Server Is Running On Port No. 3002.")
})