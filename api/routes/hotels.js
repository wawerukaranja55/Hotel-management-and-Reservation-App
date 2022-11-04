import express from "express";
import { allHotels, createHotel, deleteHotel, showHotel, updateHotel } from "../controller/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

const router = express.Router();

// get all hotels in the database
router.get("/all", allHotels);

router.post("/create", createHotel);

router.get("/", showHotel);

// delete a specific hotel record
router.delete("/:id", deleteHotel);

// update a specific hotel record
router.put("/:id", updateHotel);



export default router;