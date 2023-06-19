const express = require('express')
const app = express();
const path = require('path')

const publicPath = path.join(__dirname,'public')

app.set('view engine' , 'ejs')

app.get('',(_,res) =>{
    res.sendFile(`${publicPath}/index.html`) 
})

app.get('/help',(_,res) =>{
    res.sendFile(`${publicPath}/help.html`)
})

app.get('/profile',(_,res) =>{

    const user = {
        name: 'Rex',
        email : 'rex@123test.com',
        city : 'Mumbai'
    }
    //res.json(user);
    res.render('profile',{user})
})

app.get('*',(_,res) =>{
    res.sendFile(`${publicPath}/nopage.html`)
})


app.listen(5500, () => {
    console.log('Server is running on port 5500');
  });