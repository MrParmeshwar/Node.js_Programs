const express = require('express')
const app = express()
let cors = require('cors');
app.use(cors());
const { MongoClient } = require('mongodb');

//Below Is The Code For Getting Data From Database With it's Id 
async function getdata(x) {
    const password = "0987654321"
    const url = `mongodb+srv://kanherepamu1909:${password}@cluster0.tcx16gx.mongodb.net/?retryWrites=true&w=majority`
    const client = new MongoClient(url)
    client.connect()


    const args = { eid: x }
    const result = await client.db("Employee_db").collection("Empdata").findOne(args)

    if (result == null) {
        client.close()
        return "Record Not Found"
    }
    else {
        console.log(result)
    }
    client.close()
    return result;
}

app.get('/student/:id', async (req, res) => {
    const sid = Number(req.params.id)
    const row = await getdata(sid)
    res.send(row)
})

//Below Is The Code For Getting Data From Database With Salary.

async function getallrecords(sal) {
    const password = "0987654321"
    const url = `mongodb+srv://kanherepamu1909:${password}@cluster0.tcx16gx.mongodb.net/?retryWrites=true&w=majority`
    const client = new MongoClient(url)
    client.connect()

    const args = { Salary: { $gt: sal } }
    const result = await client.db("Employee_db").collection("Empdata").find(args).toArray()

    client.close()
    return result

}

app.get('/students/:sal', async (req, res) => {
    const salary = Number(req.params.sal)
    const rows = await getallrecords(salary)
    res.send(rows)
})

const Port = 3000
app.listen(Port, () => {
    console.log(`Server Is Running On ${Port}`)
})