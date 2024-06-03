const mongoose = require('mongoose')
const { Schema } = mongoose

const BookSchema=new Schema(
    {
        id:String,
        title:String,
        description:String,
        price:String,
        category:String,
        image:String,
        content:String
    }
)

const Book= mongoose.model("book",BookSchema)
module.exports=Book