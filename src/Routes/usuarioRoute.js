const express = require ("express");
const router = express.Router();
const controller = require("../Controllers/usuarioController");

router.get("/usuarios", controller.getAllUsers)//http://localhost:3030/usuario/usuarios/
router.get("/nome", controller.getByName) // http://localhost:3030/usuario/nome
router.post("/cadastro", controller.addUser) //http://localhost:3030/usuario/cadastro/
router.delete("/delete", controller.deleteUser)//http://localhost:3030/usuario/delete/
router.put("/atualizar", controller.updateUser) //http://localhost:3030/usuario/atualizar7

module.exports = router;