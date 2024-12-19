const mongoose = require('mongoose');
const fs = require('fs');
const Experience = require('./models/Experience'); // Import the Experience model
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB connected");
    seedDatabase();
  })
  .catch(err => console.log(err));

// Read mock data from JSON file
const mockData = JSON.parse(fs.readFileSync('mockData.json', 'utf-8'));

// Function to seed the database with mock data
const seedDatabase = async () => {
  try {
    await Experience.deleteMany(); // Remove all existing experiences
    console.log("Existing data cleared");

    await Experience.insertMany(mockData); // Insert the mock data
    console.log("Mock data inserted successfully");

    mongoose.connection.close(); // Close the MongoDB connection
  } catch (err) {
    console.error("Error inserting mock data:", err);
    mongoose.connection.close();
  }
};
