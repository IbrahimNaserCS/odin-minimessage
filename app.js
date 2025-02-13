const express = require("express");
const app = express();
const { iR, m } = require("./routes/index");
const newRouter = require("./routes/new");
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", iR);
app.use("/new", newRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});