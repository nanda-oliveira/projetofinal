const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postagemSchema = new Schema({
    _id : {
        type : mongoose.Schema.Types.ObjectId,
        auto : true,
        required: true
    },

    createdAt:{
        type: Date,
        default : Date.now
    },
     
    titulo : {
        type: String,
        required : true,
    },

    texto: {
        type : String,
        required : true
    }


}
)

 const postagemCollections = mongoose.model('postagem', postagemSchema)

 module.exports = postagemCollections