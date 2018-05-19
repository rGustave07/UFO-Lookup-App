const express = require("express");
const mongoose = require("mongoose")
// require statement end

const app = express();
const PORT = 5000;


// Mongoose Configuration and testing
mongoose.connect("mongodb://localhost/ufodb");
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () =>{
    console.log("Connected to Mongo Sucessfully.");
});

// db.collection("data").find({state: "ca"}, (err, cursor) =>{
//     cursor.toArray( (err, docs)=> {
//         console.log(docs);
//     })
// })
// Mongoose configuration and testing end

let createQueryObject = oldobj => {
    cleanedObj = {}
    for(let property in oldobj){
        if (oldobj[property] && property != "resultArr") {
            cleanedObj[property] = oldobj[property]
        }
    }
    return cleanedObj
}

app.get("/api/:data", ( req, res ) => {
    let userQuery = JSON.parse(req.params.data)
    let queryObj = createQueryObject(userQuery)
    console.log(queryObj);
    let returnArr;
    db.collection('data').find(queryObj, (err, cursor) =>{
        if (err) {
           console.log(err);
        } else {
           cursor.toArray( (err, docs) => {
               if (err) {
                  console.log(err);
              } else {
                  console.log(docs);
                  res.json(docs)
              }
           })
        }
    })
  });


app.listen( PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
