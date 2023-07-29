const dbConnection = require('./mongodb')

const updateData =async () =>{
    let data = await dbConnection()
    let result = data.updateOne(
        {name:'Redmi9A'},{
            $set : {name : 'SamsungM32 5G'}
        }
    )
}
updateData();