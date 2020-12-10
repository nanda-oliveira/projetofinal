const app = require("./src/app")
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT || 3030;

app.listen(PORT,function(){
    console.log(`APP listening at http://localhost:${PORT}`)
})

module.exports =  app 
