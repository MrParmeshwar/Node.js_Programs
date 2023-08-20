 //This is an First example of node js on create a server  


//const {createserver}=require('http')
const http = require('http') ; //Here We Load The http Library bu using require function.

// We Are Creating Server with following code
const app = http.createServer((request, response) => {
    console.log("Got Response From Server.!!!!!");
    response.end("Hello From The Server To Client") ;//End will End The Response From Server 
 });

// Let's Start The Server with follosing line
app.listen(3000)  ;//You Can Specify Any Port Number
console.log("Server Started At Port No. 3000");


// [NOTE: if We wrote this line "const {createserver}=require('http')" Then We Don't need to write http in line number 8

// else we can directly write like this "const app = http.createServer((request, response) =>{}" only 

//  when we haven't include "const {createserver}=require('http')" This line in our program .]

