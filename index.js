import express from "express";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";

const users = [];
// Single routing
const app = express();

//database connection
mongoose
  .connect(" mongodb://127.0.0.1:27017/", {
    dbName: "explorebackend",
  })
  .then((c) => console.log("Database connected successfully!"))
  .catch((e) => console.log("e"));

//view engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static(path.join("public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/success");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.listen(5000, (req, res) => {
  console.log("Server is listening");
});
