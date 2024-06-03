
const mongoose=require('mongoose')

const mongooseURI = "mongodb://0.0.0.0:27017/bookstore"

const ConnectToMongoose=()=>{
    mongoose.connect(mongooseURI)
    .then((success)=>console.log("Connected to the database successfully"))
    .catch((error)=>console.log(error.message))
}

module.exports=ConnectToMongoose