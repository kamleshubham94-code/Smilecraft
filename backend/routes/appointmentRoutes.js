import express from "express";

import {
  createAppointment,
  getPatientAppointments,
  getAllAppointments,
  updateAppointmentStatus,
  deleteAppointment,
} from "../controllers/appointmentController.js";

import verifyToken from "../middleware/verifyToken.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

/* ============================
   Patient Routes
============================ */

// Book Appointment
router.post(
  "/",
  verifyToken,
  createAppointment
);

// Logged-in Patient Appointments
router.get(
  "/my",
  verifyToken,
  getPatientAppointments
);

/* ============================
   Admin Routes
============================ */

// View All Appointments
router.get(
  "/",
  verifyToken,
  isAdmin,
  getAllAppointments
);

// Approve / Cancel / Complete
router.put(
  "/:id",
  verifyToken,
  isAdmin,
  updateAppointmentStatus
);

// Delete Appointment
router.delete(
  "/:id",
  verifyToken,
  isAdmin,
  deleteAppointment
);

export default router;