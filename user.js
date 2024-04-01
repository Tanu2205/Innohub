const mongoose=require("mongoose");
const schema=mongoose.Schema;

const userschema=schema({
    name:{type:String},
    email:{
    type:String,
    required:true
    },
    password:{
        type:[schema.Types.Mixed]
    }
})

const user = mongoose.model('user', userschema);
module.exports={user};