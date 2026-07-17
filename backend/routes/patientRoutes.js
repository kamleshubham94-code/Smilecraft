import express from "express";

import {

  getPatients,

  deletePatient,

} from "../controllers/patientController.js";

import verifyToken from "../middleware/verifyToken.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

// Get all patients

router.get(

  "/",

  verifyToken,

  isAdmin,

  getPatients

);

// Delete patient

router.delete(

  "/:id",

  verifyToken,

  isAdmin,

  deletePatient

);

export default router;