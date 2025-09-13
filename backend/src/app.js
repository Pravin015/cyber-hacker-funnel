import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { ApiError } from "./utils/ApiError.js";

// Load environment variables
dotenv.config();

import advisorEnquiryRouter from "./routes/advisorEnquiry.routes.js";

export const app = express();

const adviserOrigin = process.env.CORS_ORIGIN; // Single origin for adviser enquiry

// CORS setup for one origin only
app.use(
  cors({
    origin: adviserOrigin, // only allow this origin
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

// Routes
app.use("/api/v1/adviser-enquiry", advisorEnquiryRouter); // only one route

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working ✅");
});

app.get("/test", (req, res) => {
  res.send("API is working");
});

// Handle CORS errors
app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    res.status(400).json({
      statusCode: 400,
      message: err.message,
      data: null,
    });
  } else {
    next(err);
  }
});

export default app;
