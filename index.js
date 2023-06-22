const express = require('express')
const app = express()
const reqFilter = (req,res,next) =>{
    //console.log('reqFilter')

    if(!req.query.age){
        res.send('Please provide age')
    }
    else if(req.query.age === 0 || req.query.age < 18){
        res.send('ACESS DENIED !')
    }
    else{
    next();
    }
}


app.use(reqFilter)

app.get('/',(req,res) => {
    res.send('<h1>Welcome to Home page</h1>')
})


app.get('/users',(req,res) => {
    res.send('<h1>Welcome to Users page </h1>')
})

app.listen(5500)