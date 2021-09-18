const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    name :
    {type:String,required:true},
    title:
    {type:String,required:true},
    description:
    {type:String,required:true},
}) 
 const user = mongoose.model('user', UserSchema)
 module.exports = user