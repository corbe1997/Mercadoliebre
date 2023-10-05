//configuraciones del servidor "express"
const express = require("express");
const app = express();
const path = require("path"); //permite rutas parametrizadas
const PORT = 3030;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "index.html"))
);

app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "login.html"))
);

app.get("/register", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "register.html"))
);

app.listen(PORT, () => console.log("servidor iniciado"));
