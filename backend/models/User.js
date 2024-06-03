const mongoose=require('mongoose')
const {Schema}= mongoose

const Userschema= new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const User=mongoose.model('user',Userschema)
module.exports=User