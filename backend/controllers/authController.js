import User from "../models/User.js";
import bcrypt from "bcryptjs";
import validator from "validator";
import jwt from "jsonwebtoken";

// Register User
export const registerUser = async (req, res) => {
  try {

    const { fullName, email, password } = req.body;

    // Required fields

    if (!fullName || !email || !password) {

      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });

    }

    // Email validation

    if (!validator.isEmail(email)) {

      return res.status(400).json({
        success: false,
        message: "Invalid email address.",
      });

    }

    // Password length

    if (password.length < 6) {

      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters.",
      });

    }

    // Check existing user

    const existingUser = await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        success: false,
        message: "User already exists.",
      });

    }

    // Hash password

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user

    const user = await User.create({

      fullName,

      email,

      password: hashedPassword,

      role: "patient",

    });

    // Remove password

    const userData = user.toObject();

    delete userData.password;

    res.status(201).json({

      success: true,

      message: "Registration Successful 🎉",

      user: userData,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error",

    });

  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter email and password.",
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password.",
      });
    }

    // Create JWT Token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // Remove password from response
    const userData = user.toObject();
    delete userData.password;

    res.status(200).json({
      success: true,
      message: "Login Successful 🎉",
      token,
      user: userData,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};