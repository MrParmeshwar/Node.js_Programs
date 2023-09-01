// This is An Example Of Middleware For All Requests.

const express = require('express');
const app = express()
let cors = require('cors');

// The Line No. 8,9,10 are Also a Middleware.
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {

    //In This Example Middleware will executed for all request May Be POST,PUT etc.
    console.log(`Got Request at ${Date.now()}`);
    next()
})

// Get Request.
app.get('/hello', (req, res) => {
    console.log("Get Request");
    res.send("Hello From Server..!")
})

app.get('/h1', (req, res) => {
    console.log("Got Requet From Server");
    res.send("Hi From Server")
})

const port = 3002
app.listen(port, () => {
    console.log(`Server IS Runnin On ${port} port no.`)
})