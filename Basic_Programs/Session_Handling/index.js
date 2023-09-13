const express=require ('express')
const cors=require ('cors')
const session=require('express-session')
const cp=require('cookie-parser')
const app=express()
app.use(cors());
app.use(express.json());
// Client side for this server is present in react-session folder.
app.use(cp());

const oneday=1000*60*24;
// session Midalware

app.use(session({
    secret:"hsfewojfnvjnwvooe",
    saveUninitialized:true,
    cookie:{ maxAge:oneday},
    resave:false
}));

app.get('/users',(req,res)=>{
    let session=req.session
    console.log(session.username)
    res,send("username: "+session.username)
})

app.get('/user/:uname ',(req,res)=>{
    let un=req.params.uname 
    let session=req.session
    session.username=un
    res.send(`Hey There, Welcome`);
    
})
app.post('/users',(req,res)=>{
    let ob=req.body
    console.log(req.cookies)
    console.log(ob.cname)
    console.log(ob.cvalue)
    res.cookie(ob.cname,ob.cvalue)
    res.send("Got Request")
})

const Port=3002;
app.listen(Port,()=>{
    console.log(`Server Is Running On PORT NO.${Port}`)
})
