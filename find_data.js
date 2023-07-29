const dbConnection = require('./mongodb')

const reading = async () =>{
    let data = await dbConnection()
    data = await data.find({name:'SamsungM32 5G'}).toArray()
    console.log(data);
}

reading()