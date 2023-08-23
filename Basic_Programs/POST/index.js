const express = require('express');
const app = express();
const port = 3002;
const { MongoClient } = require('mongodb');
// This is An Demo Of POST Request Which Is Use To Send Data.
app.use(express.json()) //This Will Help Us To Send Data In Json Format.

//[Note: When You Are Trying To Send Data Then You Have To Use POSTMAN Software From POSTMAN //You Have To Send Data in  Json Format Then Only You Will Get Data Other Wise You Will Get //Blamk ({ }) Data only.]

async function savedata(row) {
    const password = "0987654321";
    const url = `mongodb+srv://kanherepamu1909:${password}@cluster0.tcx16gx.mongodb.net/Employee_db`;
    const client = new MongoClient(url);
    client.connect();

    const result=client.db("Employee_db").collection("Empdata").insertOne(row)
    client.close()
}
app.post('/student',(req,res)=>{
    console.log("Got Data")

    const row=req.body
    console.log(row)
    savedata(row)
    res.send("Record Saved")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
