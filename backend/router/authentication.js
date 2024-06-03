const express = require('express')
const User = require('../models/User')
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_KEY = "Navibksd87";


router.post('/signup', [
    body("username").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10)
    const saltpass = await bcrypt.hash(req.body.password, salt);
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            res.json({"error":"this email already exists"})
        }
        else {
            user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: saltpass
            })
            res.json({"status":"true"})
        }
    }
    catch (error) {
        console.error(error = error.message)
        res.status(500).json({"error":"Internal Server Error"})
    }

})


router.post('/login', [
    body("email").isEmail(),
    body("password").isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.json({"error":"this email doesnt exists"})
        }
        else {
            const comparePass = await bcrypt.compare(req.body.password, user.password)
            if (!comparePass) {
                res.send("wrong password")
            }
            else {
                const data = {
                    user: {
                        id: user.id
                    }
                }

                const token = await jwt.sign(data, JWT_KEY)
                res.json({"token":token,"status":"true"})
            }
        }
    }
    catch (error) {
        console.error(error = error.message)
        res.status(500).json({"error":"Internal Server Error"})
    }

})

module.exports = router