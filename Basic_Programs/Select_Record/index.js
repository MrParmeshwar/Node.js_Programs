//This is An Example of Selecting One Record From Mongodb.

const { MongoClient } = require('mongodb')
const password = "Rocky123"
const url = `mongodb+srv://kanherepamu1909:${password}@cluster0.tcx16gx.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(url)

client.connect()


const args={eid:300}

const result = client.db("Employee_db")
    .collection("Empdata")
    .findOne(args)
    
result.then((data)=>{
    if(data==null){
        console.log("Record Is Not Found")
    }
    else
    {
        console.log(data)
    }
    client.close
    
})
result.catch((err)=>{
    client.close()
})