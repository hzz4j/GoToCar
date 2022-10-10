const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("接收到了小程序的请求");
  res.send("Hello World! From Express Server");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
