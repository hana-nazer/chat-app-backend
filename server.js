const express = require("express");
const dotenv = require('dotenv')
const app = express();


app.get("/", (req, res) => {
  res.send("running");
});

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log("server started");
});
