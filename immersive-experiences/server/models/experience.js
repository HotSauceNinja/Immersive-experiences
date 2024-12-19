// models/Experience.js
const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: String,
  date: String,
  imageUrl: String
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
