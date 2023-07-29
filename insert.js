const dbConnection = require('./mongodb')

const insert = async() =>{
    const db = await dbConnection()
    const result = db.insertOne({
        name:'Vivo V15 Pro',
        brand: 'Vivo',
        price : 18000
    })
}
insert()