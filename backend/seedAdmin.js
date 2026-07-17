import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import User from "./models/User.js";

dotenv.config();

const seedAdmin = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    const existingAdmin = await User.findOne({
      email: "admin@gmail.com",
    });

    if (existingAdmin) {

      console.log("Admin already exists.");

      process.exit();

    }

    const hashedPassword = await bcrypt.hash(
      "123456",
      10
    );

    await User.create({

      fullName: "Administrator",

      email: "admin@gmail.com",

      password: hashedPassword,

      role: "admin",

    });

    console.log("✅ Admin created successfully.");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};

seedAdmin();