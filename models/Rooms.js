// models/Room.js

const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  roomType: {
    type: String,
    enum: ['bedroom', 'kitchen', 'livingroom', 'bathroom', 'garage'],
    required: true,
  },
    devices : {
        type: Number,
    },
    temprature : {
        type: Number,
        default: 0,
    },
    lights : {
        type: Number,
        default: 0,
    },
    humidity : {
        type: Number,
        default: 0,
    },
    smoke : {
        type: Number,
        default: 0,
    },

  configurations: {
    hardware: {
      type: [String],
      enum: ['esp', 'esp82', 'resbery82'],
      default: [],
    },
    connectionType: {
      type: String,
      enum: ['wifi', 'ethernet', 'bt'],
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Room', RoomSchema);
