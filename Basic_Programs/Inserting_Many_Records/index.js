//This is An Example of Inserting Multiple Record In Mongodb.

const { MongoClient } = require('mongodb')
const password = "Rocky123"
const url = `mongodb+srv://kanherepamu1909:${password}@cluster0.tcx16gx.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(url)

client.connect()

const emp =[ {
    eid: 200,
    name: "xyz",
    Salary: 5000
},
{
    eid: 300,
    name: "pqr,",
    Salary: 6000
},
{
    eid: 400,
    name: "def,",
    Salary: 3000
}]

const result = client.db("Employee_db")
    .collection("Empdata")
    .insertMany(emp)
    
result.then((data)=>{
    console.log(`Rocords Inserted With Id ${data.insertedIds}`)
})

client.close()