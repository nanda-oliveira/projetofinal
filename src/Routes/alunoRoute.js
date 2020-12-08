const express = require("express");
const router = express.Router();
const controller = require("../controllers/alunoController")


router.post("/criar", controller.addAluno)
router.delete("/delete", controller.deleteAluno)
router.patch("/atualizar", controller.updateAluno)

module.exports = router;