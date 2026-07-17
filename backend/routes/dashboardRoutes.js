import express from "express";

import verifyToken from "../middleware/verifyToken.js";
import isAdmin from "../middleware/isAdmin.js";

import {
  getDashboardStats,
} from "../controllers/dashboardController.js";

const router = express.Router();

router.get(

  "/",

  verifyToken,

  isAdmin,

  getDashboardStats

);

export default router;