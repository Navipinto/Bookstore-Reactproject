const express = require('express')
const Book = require('../models/Book')
const router = express.Router();


router.get('/getallbooks', [
], async (req, res) => {

    try {
        const books=await Book.find()
        if(books)
            {
                res.status(200).json(books);
            }
    } catch (error) {
        console.error(error = error.message)
        res.status(500).send("Internal Server Error")
    }
})

module.exports=router