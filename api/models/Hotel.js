import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    type: {
        type:String,
        required:true,
    },
    city: {
        type:String,
        required:true,
    },
    address: {
        type:String,
        required:true,
    },
    distance: {
        type:String,
        required:true,
    },
    meta_title: {
        type:String,
        required:true,
    },
    meta_description: {
        type:String,
        required:true,
    },
    rating: {
        type:Number,min:0,max:5,
    },
    cheapestPrice: {
        type:Number,
        required:true
    },
    rooms: {
        type:[String],
    },
    photos: {
        type:[String],
    },
    featured: {
        type:Boolean,
        default:false,
    }
});

export default mongoose.model("Hotel",HotelSchema)