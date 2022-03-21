const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name : {type:String, required:true},
},
{
    timestamps: true,
    versionKey: false
}
)
module.exports = mongoose.model('author',authorSchema);