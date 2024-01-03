// const { MongoClient } = require('mongodb');
import { MongoClient } from "mongodb";

const uri = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let conn;
try {
    conn = await client.connect();
} catch (e) {
    console.error(e);
}

let db = conn.db("cricket");

export default db;