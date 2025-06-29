const mongoose = require('mongoose');
const connectDB = require('../config/db');

const eventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true,
  },
  eventPostedBy: {
    type: String, // Name of the person who posted the event
    required: true,
  },
  eventDateTime: {
    type: Date, // Date and Time of the event
    required: true,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  attendeeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Event', eventSchema);