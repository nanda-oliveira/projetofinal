
const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const db = require("./config/database");


db.connect();

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())


const index = require("../index");
const usuario = require ("./routes/usuarioRoute");
const postagem = require ("./routes/postagemRoute");
const aluno = require ("./routes/alunoRoute");

app.use("/", index);
app.use("/usuario", usuario);
app.use("/postagem", postagem);
app.use("/aluno",aluno);

module.exports = app
