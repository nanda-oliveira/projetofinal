const express = require("express")
const router = express.Router()

router.get("/", function(request,response){
    response.status(200).send({
        titulo : "Projeto Final",
        version: "1.0.0"
    })
})

module.exports = router 


/*const express = require("express")
const router = express.Router()

router.get('/', function (req, res) {
    res.send('Birds home page')
  })

module.exports = router*/
