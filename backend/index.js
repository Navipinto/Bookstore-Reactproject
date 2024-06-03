const ConnectToMongoose=require('./databasecon')
const express = require('express')
const app = express()
const cors = require("cors");
const port = 4000
ConnectToMongoose();

app.use(cors());
app.use(express.json())
app.use("/api/authentication", require('./router/authentication'))
app.use("/api/Books", require('./router/Books'))

app.listen(port, () => {
    console.log(`Bookstore app listening on port http://localhost:${port}`)
})