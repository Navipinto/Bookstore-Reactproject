
const mongoose=require('mongoose')

const mongooseURI = "mongodb+srv://navishaun13:navishaun13@bookstore.vtxfk71.mongodb.net/?retryWrites=true&w=majority&appName=Bookstore"

const ConnectToMongoose=()=>{
    mongoose.connect(mongooseURI)
    .then((success)=>console.log("Connected to the database successfully"))
    .catch((error)=>console.log(error.message))
}

module.exports=ConnectToMongoose