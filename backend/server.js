import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import connectDB from "./config/db.js";

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