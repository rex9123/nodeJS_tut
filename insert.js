const dbConnect = require('./mongodb')

const insert = async () =>{
    const db = await dbConnect()
    const result = db.insert(
        {name : 'note 5' , brand : 'vivo' , price : 320 , category : 'mobile'}
        )
    console.log(result)
    }    
insert()
