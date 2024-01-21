// const { MongoClient } = require('mongodb');
import { MongoClient } from "mongodb";
// mongodb+srv://prasannakumar:Apple%40123@cluster0.drrzouu.mongodb.net/
const uri = 'mongodb+srv://prasannakumar:Apple%40123@cluster0.drrzouu.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let conn;
try {
    conn = await client.connect();
} catch (e) {
    console.error(e);
}

let db = conn.db("cricket");

export default db;