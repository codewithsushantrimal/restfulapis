import express from "express";
import fs from "fs";
import path from "path";

const users = [];
// Single routing
const app = express();

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
