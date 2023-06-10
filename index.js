const express = require('express')
const app = express();

app.get('',(req,res) => {
    res.send('Hello , this is Home Page')
})

app.get('/help',(req,res) => {
  res.send('Hello , this is Help Page')
})

app.listen(5500)