const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/hello', (req, res, next) => {
    req.requestTime = Date.now();
    console.log(`Got Request at ${Date.now()}`);
    next();
});

// Get Request.
app.get('/hello', (req, res) => {
    console.log("Get Request");
    res.send(`Request Got At ${req.requestTime}`);
});

app.get('/h1', (req, res) => {
    console.log("Got Request From Server");
    res.send("Hi From Server");
});

const port = 3002;
app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
});
