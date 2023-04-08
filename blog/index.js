const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("combined"));
app.get("/tin-tuc", (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
