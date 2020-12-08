
const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

const db = require("./config/repository");
const index = require("./routes/index");
const usuario = require ("./routes/usuarioRoute");
const postagem = require ("./routes/postagemRoute");

db.connect();

app.use(cors());
app.use(express.json());

app.use(
    bodyParser.urlencoded({
        extended:true
    })
)


app.use("/", index);
app.use("/usuario", usuario);
app.use("/postagem", postagem);

module.exports = app
