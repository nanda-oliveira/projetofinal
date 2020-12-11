const app = require("./src/app")
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT || 88


//app.listen(PORT,function(){
 //   console.log(`APP listening at http://localhost:${PORT}`)
//})

//module.exports =  app 

app.listen(process.env.PORT, '0.0.0.0', function(){
  console.log(`APP listening at http://localhost:${PORT}`)
})
