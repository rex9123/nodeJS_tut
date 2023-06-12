const express = require('express')
const app = express();

app.get('',(req,res) => {
    res.send(`<input type = "text" placeholder = "User name" value= " ${req.query.name}" />
    <button>Click</button>
    <a href = "/help" >Go to help page</a>`)
})

app.get('/help',(req,res) => {
  res.send(`<h1>Any help</h1>`)
})

app.listen(5500)