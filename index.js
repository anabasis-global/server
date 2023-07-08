const express = require("express");
const usersRouter = require("./routes/users");
const app = express();
const port = 3000;

const axios = require("axios");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/fullscreen", (req, res) => {
  res.send("<img src='#' />");
});

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
