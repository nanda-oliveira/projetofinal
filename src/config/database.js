const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const MONGO_URI = process.env.MONGO_URI 

const connect = ()=>{
    mongoose.connect(MONGO_URI,
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