const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    first_name : {type:String, required:true , min:3,max:30},
    last_name : {type:String, min:3, max:30},
    age : {type:Number,required:true,min:1,max:150},
    email : {type:String , required : true, unique},
    profileImage : [{type:String , required:true}],
},
{
    timestamps: true,
    versionKey: false,
}
);

module.exports = mongoose.model('user',userSchema);
