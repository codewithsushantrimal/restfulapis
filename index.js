import express from "express";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";

// Single routing
const app = express();

//database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/", {
    dbName: "explorebackend",
  })
  .then(() => console.log("Database connected successfully"))
  .catch((e) => console.log("e"));

// User Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Message = mongoose.model("Message", contactSchema);
//view engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static(path.join("public")));
app.use(express.urlencoded({ extended: true }));

app.get("/add", async (req, res) => {
  await Message.create({
    name: "Sushant",
    email: "devcommunitynepal@gmail.com",
    message: "Hello, this is a test!",
  });
  res.send("hello!");
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/contact", async (req, res) => {
  await Message.create({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

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
