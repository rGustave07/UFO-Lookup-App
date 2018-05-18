const express = require("express");
// require statement end

const app = express();
const PORT = 5000;


app.get("/api/test", ( req, res ) => {
  let testData = {
    test: "Ritter is the shit yo"
  }
  res.json(testData)
});

app.listen( PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
