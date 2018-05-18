const express = require("express");
// require statement end

const app = express();
const PORT = 5000;


app.get("/api/:data", ( req, res ) => {
  let userQuery = req.params.data
  console.log(userQuery);
  res.json({data: `${userQuery}`})
});

app.listen( PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
