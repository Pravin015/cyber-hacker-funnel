import AdvisorEnquiry from "../models/AdvisorEnquiry.js";
import { asyncHandler } from "../utils/asyncHandeler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const submitAdvisorEnquiry = asyncHandler(async (req, res) => {
  const { emailId, fullName, graduationYear, jobTitle, program, mobileNumber } =
    req.body;

  // Validate required fields
  if (
    !emailId ||
    !fullName ||
    !graduationYear ||
    !jobTitle ||
    !program ||
    !mobileNumber
  ) {
    throw new ApiError(400, "Please fill all required fields.");
  }

  // Create new enquiry record
  const newEnquiry = await AdvisorEnquiry.create({
    emailId,
    fullName,
    graduationYear,
    jobTitle,
    program,
    mobileNumber,
  });

  // Send success response
  res
    .status(201)
    .json(new ApiResponse(201, newEnquiry, "Enquiry submitted successfully"));
});

export { submitAdvisorEnquiry };
