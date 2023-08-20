//This is An Example of Selecting Many Records From Mongodb.

const { MongoClient } = require('mongodb')//Importing MongoDB: The code imports the MongoClient class from the 'mongodb' library, 
//which is necessary to interact with MongoDB.
async function manin() {
    const password = "Rocky123"  //Your Password Will Apperar Here & Your String Will Appear In Below Line.
    const url = `mongodb+srv://kanherepamu1909:${password}@cluster0.tcx16gx.mongodb.net/?retryWrites=true&w=majority`
    const client = new MongoClient(url)
    client.connect()
    const args = { salary: { $gt: 2000 } }//this line is use to the value is greater than 20000 is selectd form the database 
    const result = await client.db("employee_db").collection("empdata").find(args)
    //by using this line we are selecting multiple record 
    //by usign find funtion we can pass the condition which we want select the record 
    const arr = await result.toArray()//by using this line we are sotre the data in arr variable 
    arr.forEach((row) => {
        console.log(row)//by using this loop we are print the record in the cmd 
    })
    client.close()
}
manin()
