import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello WORLD!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>9599691880</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>hanish has 6 incher</h1>");
});

app.listen(port, () => {
  console.log(`Sever listening at ${port}`);
});
