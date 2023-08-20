const { MongoClient } = require('mongodb')
const password = "Rocky123"
const url = `mongodb+srv://kanherepamu1909:${password}@cluster0.tcx16gx.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(url)
//In This Example We Are Going To Insert Data In Mongodb One By One.

client.connect()
const emp = {
    eid: 100,
    name: "abc,",
    Salary: 2000
}

const result = client.db("Employee_db")
    .collection("Empdata")
    .insertOne(emp)
    
result.then((data)=>{
    console.log(`Rocords Inserted With Id ${data.insertedId}`)
})

client.close()