const express = require('express')
const app = express();
const path = require('path')

const publicPath = path.join(__dirname,'public')

app.get('/index',(_,res) =>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/help',(_,res) =>{
    res.sendFile(`${publicPath}/help.html`)
})

app.get('*',(_,res) =>{
    res.sendFile(`${publicPath}/nopage.html`)
})


app.listen(5500)