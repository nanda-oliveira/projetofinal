
const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

const db = require("./config/database");
const index = require("./routes/index");
const usuario = require ("./routes/usuarioRoute");
const postagem = require ("./routes/postagemRoute");
const aluno = require ("./routes/alunoRoute");

db.connect();

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}))


app.use("/", index);
app.use("/usuario", usuario);
app.use("/postagem", postagem);
app.use("/aluno",aluno);

module.exports = app
