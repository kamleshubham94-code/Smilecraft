import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {

  try {

    let token;

    // Check Authorization Header (robust: trim quotes and whitespace)
    if (req.headers.authorization) {
      // remove any surrounding quotes that some clients add
      const raw = req.headers.authorization.replace(/^["']|["']$/g, "");
      // expect format: 'Bearer <token>'
      if (raw.startsWith("Bearer ") || raw.startsWith("bearer ")) {
        token = raw.split(" ")[1];
      } else {
        // maybe the token was sent without the Bearer prefix
        token = raw;
      }
    }

    if (!token) {

      return res.status(401).json({
        success: false,
        message: "Not Authorized. No Token.",
      });

    }

    // Verify Token

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get User

    req.user = await User.findById(decoded.id).select("-password");

    next();

  } catch (error) {

    res.status(401).json({
      success: false,
      message: "Invalid Token",
    });

  }

};