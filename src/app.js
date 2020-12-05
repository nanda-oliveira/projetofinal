
const express = require('express');
const app = express();
const cors = require("cors");


const db = require("./Models/Repository");
const index = require("./Routes/index");
const usuario = require ("./Routes/usuarioRoute");
const postagem = require ("./Routes/postagemRoute");

db.connect();

app.use(cors());
app.use(express.json());



app.use("/", index);
app.use("/usuario", usuario);
app.use("/postagem", postagem);

module.exports = app
