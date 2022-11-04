import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// import authRoute from "./routes/auth.js";
// import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
dotenv.config();

const connect = async ()=>{
    try {
        mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb");
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("connected", ()=>{
    console.log("connected!")
})

app.use(cookieParser())
app.use(express.json())

app.use((req,res,next) =>{
    console.log("am a middleware")
    next()
})

app.use("/api/auth",authRoute)
// app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)

app.listen(8800,()=>{
    connect()
    console.log("server running!")
})
