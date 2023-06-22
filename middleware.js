module.exports =  reqFilter = (req,res,next) =>{
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