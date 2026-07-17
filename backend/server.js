import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import connectDB from "./config/db.js";
import bcrypt from "bcryptjs";
import User from "./models/User.js";

import authRoutes from "./routes/authRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

dotenv.config();

// Connect MongoDB
connectDB();

// Initialize Express
const app = express();

/* ============================
   Middlewares
============================ */

app.use(cors());
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/patients", patientRoutes);
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* ============================
   API Routes
============================ */

// Authentication
app.use("/api/auth", authRoutes);

// Appointment APIs
app.use("/api/appointments", appointmentRoutes);

/* ============================
   Health Check
============================ */

app.get("/", (req, res) => {

  res.status(200).json({

    success: true,

    message: "🦷 SmileCraft Dental Clinic Backend Running",

  });

});


app.get("/seed-admin", async (req, res) => {

  try {

    // Secret key protection
    if (req.query.key !== "Smilecraft2026") {

      return res.status(401).json({

        success: false,
        message: "Unauthorized",

      });

    }

    const existingAdmin = await User.findOne({

      email: "admin@gmail.com",

    });

    if (existingAdmin) {

      return res.json({

        success: true,
        message: "Admin already exists",

      });

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

    res.json({

      success: true,
      message: "Admin created successfully",

    });

  } catch (err) {

    console.error(err);

    res.status(500).json({

      success: false,
      message: err.message,

    });

  }

});
/* ============================
   404 Handler
============================ */

app.use((req, res) => {

  res.status(404).json({

    success: false,

    message: "Route Not Found",

  });

});

/* ============================
   Global Error Handler
============================ */

app.use((err, req, res, next) => {

  console.error(err.stack);

  res.status(500).json({

    success: false,

    message: "Internal Server Error",

  });

});

/* ============================
   Start Server
============================ */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`🚀 Server Running on http://localhost:${PORT}`);

});