const arr = [{
    id: 1,
    name: "Rocky",
    Phone: 11111111
},
{
    id: 2,
    name: "Ramu",
    Phone: 99999999
},
{
    id: 3,
    name: "Rock",
    Phone: 4444444
},
{
    id: 4,
    name: "Rakesh",
    Phone: 222222
},
{
    id: 5,
    name: "Raju",
    Phone: 666666
}

]

//Lets Load express library
const express = require('express');
//Lets Create an Object of Express().
const app = express()
app.get('/users', (request, response) => {
    response.json(arr)
})
app.get('/user/:id', (request, response) => {
    const sid = Number(request.params.id)
    const user1 = arr.find((n) =>
        n.id === sid
    )
    response.json(user1)
})
app.listen(3000, () => {     //Here We Use The Port No 3000 To Run Our Program.
    console.log("Server Started ..!!!!")
})