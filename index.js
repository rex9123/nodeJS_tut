const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017";
const express = require('express')
const app = express()
const database = "ecomm";
const client = new MongoClient(url);

async function getData() {
    try {
      await client.connect();
      const db = client.db(database);
      const collection = db.collection("products");
      const response = await collection.find({}).toArray();
      return response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    } finally {
      client.close();
    }
  }
  
  app.get('/', async (req, res) => {
    try {
      const data = await getData();
      res.send(JSON.stringify(data));
    } catch (error) {
      res.status(500).send('Error retrieving data');
    }
  });
  
  app.listen(5500, () => {
    console.log('Server started on port 5500');
  });

