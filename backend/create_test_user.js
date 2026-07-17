import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import User from './models/User.js';

dotenv.config();

const run = async () => {
  try {
    await connectDB();
    const id = new mongoose.Types.ObjectId('64d1b2c3d4e5f67890123456');
    const existing = await User.findById(id);
    if (existing) {
      console.log('Test user already exists:', existing.email);
      process.exit(0);
    }

    const user = new User({
      _id: id,
      fullName: 'Test User',
      email: 'testuser@example.com',
      password: 'password123',
      role: 'patient',
      isVerified: true,
    });

    await user.save();
    console.log('Created test user with id', user._id.toString());
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();
