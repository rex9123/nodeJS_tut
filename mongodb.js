const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017";
const express = require('express')
const app = express()
const database = "ecomm";
const client = new MongoClient(url);

async function dbConnection() {
      await client.connect();
      const db = client.db(database);
      return db.collection("products");
  
      client.close();
    }

module.exports = dbConnection