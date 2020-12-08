const mongoose = require("mongoose")

const DB_URL = "mongodb://localhost:27017/projetofinal"

const connect = ()=>{
    mongoose.connect(DB_URL,
        {useNewUrlParser:true,
        useCreateIndex: true,
        useFindAndModify : false,
        useUnifiedTopology: true
    })
    
    const connection = mongoose.connection

    connection.on('error', ()=> console.error('Erro ao se conectar'))
    connection.once('open',()=> console.log('Conectamos no Mongo'))
}

module.exports = {connect}