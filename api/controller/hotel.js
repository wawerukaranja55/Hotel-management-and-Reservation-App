import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

// showing all hotels
export const allHotels = async (req,res,next)=>{
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        res.status(500).json(err);
    }
}

// creating a new hotel
export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel (req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel);
    } catch(err) {
        next(err);
    }
}

// showing a hotel details
export const showHotel = async (req,res,next)=>{
    const failed=true;
    if (failed) return next(createError(404, "Record Not Found"));
    try {
        const hotel = await Hotel.findById();
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json(err);
    }
}

// delete a hotel record
export const deleteHotel = async (req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Record Deleted Successfully");
    } catch (err) {
        res.status(500).json(err);
    }
}

// update a hotel record
export const updateHotel = async(req,res,next)=>{
    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json(err);
    }
}
