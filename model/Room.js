const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide name"]
    },
    amenities: {
        type: Array,
        trim: true,
        required: [true, "Please provide amenities"]
    },
    availableSeats: {
        type: Number,
        trim: true,
        required: [true, "Plaese provide available seats"]
    },
    price: {
        type: String,
        trim: true,
        required: [true, "Please provide price for 1hr"]
    },
    bookedStatus: {
        type: Boolean,
        trim: true
    }
},{timestamps: true});

const Room = mongoose.model("Room", roomSchema)
module.exports = Room;