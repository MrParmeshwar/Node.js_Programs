// This is An Express Code For Middleware Logic

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const obj=require('./Middleware')
const obj2=require('./admin')

app.use('/students',obj)
app.use('/about',obj2)

const port = 3002;
app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
});

// When You Start This Server Then Please Visit Following Url To See The Output
// 1)http://localhost:3002/students/
// 2)http://localhost:3002/about/ 
