const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true
    },
    description: {
        type: String
    }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;