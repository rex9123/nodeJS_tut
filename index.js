const express = require('express')
const app = express()
const reqFilter = require('./middleware')
const route = express.Router();

route.use(reqFilter)
app.get('/',(req,res) => {
    res.send('<h1>Welcome to Home page</h1>')
})


app.get('/users',reqFilter,(req,res) => {
    res.send('<h1>Welcome to Users page </h1>')
})

route.get('/about',(req,res) => {
    res.send('<h1>Welcome to About page </h1>')
})

route.get('/contact',(req,res) => {
    res.send('<h1>Welcome to Contact page </h1>')
})


app.use('/',route)




app.listen(5500)
console.log("Server running on port 5500")