import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(cookieParser());

// Setting a Cookie
app.get("/set-cookie", (req, res) => {
  res.cookie("username", "john", { maxAge: 3600000 }); // Cookie expires in 1 hour
  res.send("Cookie has been set.");
});

// Reading a Cookie
app.get("/get-cookie", (req, res) => {
  const username = req.cookies.username;
  res.send(`Username from cookie: ${username}`);
});

// Clearing a Cookie
app.get("/clear-cookie", (req, res) => {
  res.clearCookie("username");
  res.send("Cookie has been cleared.");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
