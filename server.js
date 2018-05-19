const express = require("express");
const mongoose = require("mongoose")
// require statement end

const app = express();
const PORT = 5000;

mongoose.connect("mongodb://localhost/ufodb");
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () =>{
    console.log("Connected to Mongo Sucessfully.");
});

let createQueryObject = oldobj => {
    cleanedObj = {}
    for(let property in oldobj){
        if (oldobj[property]) {
            cleanedObj[property] = oldobj[property]
        }
    }
    return cleanedObj
}

// Query.prototype.find in mongo documentation
app.get("/api/:data", ( req, res ) => {
  let userQuery = JSON.parse(req.params.data)
  let queryObj = createQueryObject(userQuery)
  db.collection('data').find(queryObj, (err, docs) => {
      console.log(docs);
  });
  res.json({data: `${userQuery}`})
});



app.listen( PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
