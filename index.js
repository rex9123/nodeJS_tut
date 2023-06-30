const express = require('express')
const app = express()

const route = express.Router()

app.get('',(req,res)=> {
    res.send('<h1>Welcome to home page</h1>')
})
app.listen(5500)
console.log("Server running on port 5500")