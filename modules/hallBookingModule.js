const Room = require('../model/Room');
const Customer = require('../model/Customer');

exports.room = async (req, res, next) => {
    const { name, amenities, availableSeats, price } = req.body;
    try {
        await Room.create({
            name,
            amenities,
            availableSeats,
            price,
            bookedStatus: false
        })
        return res.status(200).json({
            success: true,
            message: "Created Room Successfully"
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.message
        })
    }
}

exports.bookRoom = async (req, res, next) => {
    try {
        await Customer.create({
            name: req.body.name,
            date: req.body.date,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            roomId: req.params.roomId
        })
        await Room.findByIdAndUpdate(req.params.roomId, {
            bookedStatus: true
        })
        return res.status(200).json({
            success: true,
            message: "Room Booked Successfully"
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            error: error.message
        })
    }
}

exports.unbookedRoom = async (req, res, next) => {
    try {
        let unbookedRoom = await Room.find({
            bookedStatus: { $eq: false },
        }).exec();
        res.json(unbookedRoom);
    } catch (error) {
        return res.status(400).send("Error getting in unbooked room info");
    }
}

exports.roomData = async (req, res, next) => {
    try {
        let response = await Room.find();
        res.send(response);
    } catch (error) {
        res.send(error);
    }
}

exports.customerData = async (req, res, next) => {
    try {
        let response = await Customer.find();
        res.send(response);
    } catch (error) {
        res.send(error);
    }
}