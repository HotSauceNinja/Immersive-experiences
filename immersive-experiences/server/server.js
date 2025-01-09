// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const Experience = require('./models/Experience');

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

  // Get all experiences
app.get('/experiences', async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

  // Get one experience
  app.get('/experiences/:id', async (req, res) => {
    try {
      const experience = await Experience.findById(req.params.id);
      if (!experience) {
        return res.status(404).send({ error: 'Experience not found' });
      }
      res.status(200).json(experience);
    } catch (err) {
      res.status(400).send(err);
    }
  });

// Create an experience
app.post('/experiences', async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).send(experience);
  } catch (err) {
    res.status(400).send(err);
  }
});
