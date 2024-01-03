
router.post("/savePlayers", async (req, res) => {
    // console.log(req.body);
    // let httpResult;
    try {
        if (db) {
            // console.log(db);
            let collection = await db.collection("player");
            let newDocument = req.body.player;
            // console.log(newDocument);
            for (const player of newDocument) {
                let result = await collection.insertOne(player);
                // res.send(result).status(200);
                // httpResult.push(result);
            }
        } else {
            const db = await connectToDb();
            let collection = await db.collection("player");
            let newDocument = req.body.player;
            // console.log(newDocument);
            for (const player of newDocument) {
                let result = await collection.insertOne(player);
                // res.send(result).status(200);
                // httpResult.push(result);
            }
            // res.status(200).json(results);
        }
    } catch (e) {
        // console.log(e);
        res.send(e).status(200);
    }
});


router.post("/saveTeams", async (req, res) => {
    try {
        if (db) {
            let collection = await db.collection("team");
            let newDocument = req.body.team;
            console.log(newDocument);
            for (const player of newDocument) {
                let result = await collection.insertOne(player);
            }
            let result = await collection.insertOne(newDocument[0]);
            res.send(result).status(200);
        } else {
            const db = await connectToDb();
            let collection = await db.collection("team");
            let newDocument = req.body.team;
            console.log(newDocument);
            for (const player of newDocument) {
                let result = await collection.insertOne(player);
                // res.send(result).status(200);
                // httpResult.push(result);
            }
        }
    } catch (e) {
        // console.log(e);
        res.send(e).status(200);
    }
});

router.post("/saveInnings", async (req, res) => {
    try {
        if (db) {
            let collection = await db.collection("innings");
            let newDocument = req.body.innings;
            console.log(newDocument);
            let result = await collection.insertOne(newDocument);
            res.send(result).status(200);
        } else {
            const db = await connectToDb();
            let collection = await db.collection("innings");
            let newDocument = req.body.innings;
            console.log(newDocument);
            let result = await collection.insertOne(newDocument);
        }
    } catch (e) {
        // console.log(e);
        res.send(e).status(200);
    }
});