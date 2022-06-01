const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide name"]
    },
    date: {
        type: String,
        trim: true,
        required: [true, "Please provide date"]
    },
    startTime: {
        type: String,
        trim: true,
        required: [true, "Please provide start time"]
    },
    endTime: {
        type: String,
        trim: true,
        required: [true, "Please provide end time"]
    },
    roomId: {
        type: String,
        trim: true
    }
},{timestamps: true});

const Customer = mongoose.model("Customer", customerSchema)
module.exports = Customer;