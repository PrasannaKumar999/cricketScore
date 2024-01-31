import express from "express";
import cors from "cors";
import "express-async-errors";
import router from "./routes/routes.mjs";

import { Server } from 'socket.io';
import http from 'http';

const PORT = 5050;
const app = express();

app.use(cors({
    origin:'https://cricket-score-frontend.vercel.app',
    methods:['GET','POST'],
    credentials:true
}));
app.use(express.json());

// Load the /posts routes
app.use("/", router);

// Global error handling
app.use((err, _req, res, next) => {
    // console.log(err, _req);
    res.status(500).send(err)
})

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});


const server = http.createServer(app);
const io = new Server(server , {
    cors:{
        origin:"http://localhost:3000"
    }
});


io.on('connection',(socket) => {
    socket.on('match_details',(data) => {
        socket.broadcast.emit('recieved',data)
    })
})

server.listen(3001, () =>{
    console.log('local host running');
})
