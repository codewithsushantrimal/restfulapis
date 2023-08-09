import express from "express";
import fs from "fs";

// Single routing
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(5000, (req, res) => {
  console.log("Server is listening");
});
