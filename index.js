const dbConnection = require('./mongodb')

//dbConnection.then((res) =>{
  //console.warn(res.find().toArray())
//})
//console.warn(dbConnection())
const main = async () => {
  let data = await dbConnection()
  data = await data.find().toArray()
  console.warn(data)

}
main()
