// controllers/roomController.js
const Room = require('../models/Rooms');

// Create Room
exports.createRoom = async (req, res) => {
  try {
    const room = new Room(req.body);
    await room.save();
    res.status(201).json(room);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Rooms
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Single Room
exports.getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Room
exports.updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedRoom) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Room
exports.deleteRoom = async (req, res) => {
  try {
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);
    if (!deletedRoom) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// example setter requset  using curl request 
// curl -X POST -H "Content-Type: application/json" -d '{"temprature": 25, "lights": 1, "humidity": 60, "smoke": 0}' http://localhost:5000/api/rooms/roomId/setRoomDetail
exports.setRoomDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const { temprature, lights, humidity, smoke } = req.body;
    
        const room = await Room.findById(id);
        if (!room) return res.status(404).json({ message: 'Room not found' });
        room.temprature = temprature;
        room.lights = lights;
        room.humidity = humidity;
        room.smoke = smoke;
        await room.save();
        res.status(200).json(room);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }

}



exports.getRoomDetail = async (req, res) => {
    try {
        const { id } = req.params;
    
        const room = await Room.findById(id);
        if (!room) return res.status(404).json({ message: 'Room not found' });
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
