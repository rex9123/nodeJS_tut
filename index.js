const dbConnection = require('./mongodb')
/*dbConnection().then((res) => {
  res.find().toArray().then(()=> {
    console.warn(data)
  })
})*/

const main = async () =>{
  let data = await dbConnection()
  data= await data.find().toArray()
  console.warn(data)

}
main()