import express from "express";
import AdvisorEnquiry from "../models/AdvisorEnquiry.js";

const router = express.Router();

// POST endpoint to submit an enquiry
router.post("/", async (req, res) => {
  try {
    const enquiry = await AdvisorEnquiry.create(req.body);
    res.status(201).json({
      statusCode: 201,
      message: "Enquiry submitted successfully",
      data: enquiry,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal Server Error",
      data: null,
    });
  }
});

export default router;
