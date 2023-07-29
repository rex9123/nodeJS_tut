const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017";
const database = "ecomm";
const client = new MongoClient(url);

async function dbConnection() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");
}

  module.exports = dbConnection