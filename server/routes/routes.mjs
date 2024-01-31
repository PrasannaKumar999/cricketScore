import express from "express";
import db from "../databaseConn/databaseCon.mjs";
import { ObjectId } from "mongodb";
import { MongoClient } from "mongodb";

const connectToDb = async () => {

    // const uri = 'mongodb://0.0.0.0:27017';
const uri = 'mongodb+srv://prasannakumar:Apple%40123@cluster0.drrzouu.mongodb.net/';

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    let conn;
    try {
        conn = await client.connect();
    } catch (e) {
        console.error(e);
    }

    let db = conn.db("cricket");

    return db;
}

const router = express.Router();

router.get("/", async (req, res) => {
    res.json('hello')
    // console.log('checkinggg');
    // try {
    //     let collection = await db.collection("match");
    //     let results = await collection.find({})
    //         .toArray();
    //     res.send(results).status(200);
    // } catch (e) {
    //     res.send(e).status(200);
    // }
});

router.get("/getData", async (req, res) => {
    try {
        let playercollection = await db.collection("player");
        let inningscollection = await db.collection("innings");
        let teamcollection = await db.collection("team");
        let matchcollection = await db.collection("match");


        let playerresults = await playercollection.find({}).toArray();
        let inningsresults = await inningscollection.find({}).toArray();
        let teamresults = await teamcollection.find({}).toArray();
        let matchresults = await matchcollection.find({}).toArray();
        let allResults = {
            players: playerresults,
            innings: inningsresults,
            teams: teamresults,
            match:matchresults,
        };

        res.send(allResults).status(200);
    } catch (e) {
        res.status(500).send("Internal Server Error");
    }
});

router.post("/saveMatch", async (req, res) => {
    console.log('logged');
    try {
        if (db) {
            // console.log(db);
            let collection = await db.collection("match");
            let newDocument = req.body.match;
            // newDocument.date = new Date();
            let result = await collection.insertOne(newDocument);
            res.send(result).status(200);
        } else {
            const db = await connectToDb();
            // console.log(db);
            let collection = await db.collection("match");
            let newDocument = req.body.match;
            // newDocument.date = new Date();
            let result = await collection.insertOne(newDocument);
            res.send(result).status(200);
        }
    } catch (e) {
        // console.log(e);
        res.send(e).status(200);
    }

});

router.get("/getMatchDetails/:matchId", async (req, res) => {
    try {
        const matchId = req.params.matchId ;
        let matchcollection = await db.collection("match");


        let matchresults = await matchcollection.find({_id:new ObjectId(matchId)}).toArray();
        let allResults = {
            match:matchresults,
        };

        res.send(allResults).status(200);
    } catch (e) {
        res.status(500).send("Internal Server Error");
    }
});

router.patch('/updateMatch/:matchId', async (req, res) => {
    console.log(req.body);
    try {
        if (db) {
            const query = { _id: req.params.matchId };
            console.log(query);
            const updateOperation = {
                $set: {
                    'teams': req.body.teams,
                    'score': req.body.score
                },
            };

            let collection = await db.collection("match");
            let result2 = await collection.updateOne({ _id: new ObjectId(req.params.matchId) }, updateOperation);

            res.send(result2).status(200);
        } else {
            const db = await connectToDb();
            const query = { _id: req.params.matchId };
            const updates = {
                $set: {
                    "type": req.body.type,
                }
            };

            let collection = await db.collection("match");
            let result = await collection.updateOne({ _id: new ObjectId(req.params.matchId) }, updates);

            res.send({ inningsResult: result2 }).status(200);
        }
    } catch (e) {
        console.error(e);
        res.send(e).status(500);
    }
});




export default router;