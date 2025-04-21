// routes/roomRoutes.js
const express = require('express');
const router = express.Router();
const roomController = require('../controller/roomController');

router.post('/', roomController.createRoom);
router.get('/', roomController.getAllRooms);
router.get('/:id', roomController.getRoomById);
router.put('/:id', roomController.updateRoom);
router.delete('/:id', roomController.deleteRoom);

router.post('/:id/setRoomDetail', roomController.setRoomDetail)
router.post('/:id/getRoomDetail', roomController.getRoomDetail)
module.exports = router;
