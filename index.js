//db id paass
//id = "krkJ29BV147hiUnb",
//pass = krkJ29BV147hiUnb"


db_uri = "mongodb+srv://atlas-sample-dataset-load-67ff58c7d1936a267cf9e47f:krkJ29BV147hiUnb@cluster0.sqzstra.mongodb.net/";


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())


// Routes
const authRoutes = require('./routes/auth');
const roomRoutes = require('./routes/roomRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/rooms', roomRoutes);

console.log(process.env.MONGO_URI)
// Connect to MongoDB
mongoose.connect("mongodb+srv://darshika:Darsdhika%401234@cluster0.sqzstra.mongodb.net/")
.then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
})
.catch((err) => console.error('DB connection error:', err));

