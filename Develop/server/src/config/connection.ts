import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://hannahmyers510:<db_password>@cluster0.rbmqk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const db = mongoose.connection;

export default db;
