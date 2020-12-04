const app = require("./src/app")
const PORT = 3030

app.listen(PORT,function(){
    console.log(`APP listening at http://localhost:${PORT}`)
})