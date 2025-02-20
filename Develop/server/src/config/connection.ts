import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

// Get the MongoDB URI from environment variables
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  console.error('MongoDB URI is not defined in the .env file');
  process.exit(1); 
}

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); 
  });

const db = mongoose.connection;

db.once('open', () => {
  console.log('MongoDB connection established');
});

// Log when there are connection errors
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

export default db;
