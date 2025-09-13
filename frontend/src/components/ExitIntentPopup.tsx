import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, CheckCircle } from "lucide-react";

interface ExitIntentPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export const ExitIntentPopup = ({
  isVisible,
  onClose,
}: ExitIntentPopupProps) => {
  const [formData, setFormData] = useState({
    emailId: "",
    fullName: "",
    graduationYear: "",
    jobTitle: "",
    program: "",
    mobileNumber: "",
  });

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Email Validation
    if (!formData.emailId) {
      newErrors.emailId = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailId)) {
      newErrors.emailId = "Enter a valid email address";
    }

    // Full Name Validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }

    // Graduation Year Validation
    if (!formData.graduationYear) {
      newErrors.graduationYear = "Select your graduation year";
    }

    // Job Title Validation
    if (!formData.jobTitle) {
      newErrors.jobTitle = "Select your job title";
    }

    // Program Validation
    if (!formData.program) {
      newErrors.program = "Select a program";
    }

    // Mobile Number Validation
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else {
      // Remove non-digit characters (spaces, dashes, etc.)
      const cleanedNumber = formData.mobileNumber.replace(/\D/g, "");

      if (!/^[6-9]\d{9}$/.test(cleanedNumber)) {
        newErrors.mobileNumber = "Enter a valid 10-digit Indian mobile number";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError("");

    if (!validateForm()) return;

    try {
      setLoading(true);
      await axios.post(`${BASE_URL}/api/v1/adviser-enquiry`, formData); // ✅ replace with real API
      setSubmitted(true);
    } catch (err) {
      setApiError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <Card className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 border-0 shadow-2xl">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-20 text-white hover:bg-white/20 bg-black/20 border border-white/30 h-8 w-8"
          onClick={onClose}
        >
          <X className="h-4 w-4 stroke-2" />
        </Button>

        <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
          {/* Left Side - Content */}
          <div className="p-6 md:p-8 lg:p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-yellow-400/30 to-transparent"></div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                Talk to our Advisor
              </h2>
              <p className="text-sm md:text-base mb-8 opacity-90">AND GET</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-lg font-medium">
                    Personalized Career Roadmap
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-lg font-medium">
                    Free Career Counselling
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-lg font-medium">
                    Free Access to Scaler Events
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form or Success Message */}
          <div className="bg-white p-6 md:p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Thank you!
                </h3>
                <p className="text-gray-600">
                  Your request has been submitted. Our advisor will contact you
                  soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Id <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="emailId"
                    type="email"
                    placeholder="Enter your Email ID"
                    className="mt-1 border-gray-300 focus:border-blue-500"
                    value={formData.emailId}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        emailId: e.target.value,
                      }))
                    }
                  />
                  {errors.emailId && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.emailId}
                    </p>
                  )}
                </div>

                {/* Full Name + Graduation Year */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="fullName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your Full Name"
                      className="mt-1 border-gray-300 focus:border-blue-500"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          fullName: e.target.value,
                        }))
                      }
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="graduationYear"
                      className="text-sm font-medium text-gray-700"
                    >
                      Graduation Year <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          graduationYear: value,
                        }))
                      }
                    >
                      <SelectTrigger className="mt-1 border-gray-300 focus:border-blue-500">
                        <SelectValue placeholder="Year of Graduation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="before2020">Before 2020</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.graduationYear && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.graduationYear}
                      </p>
                    )}
                  </div>
                </div>

                {/* Job Title + Program */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="jobTitle"
                      className="text-sm font-medium text-gray-700"
                    >
                      Job Title <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, jobTitle: value }))
                      }
                    >
                      <SelectTrigger className="mt-1 border-gray-300 focus:border-blue-500">
                        <SelectValue placeholder="Select Job title" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="fresher">Fresher</SelectItem>
                        <SelectItem value="software-engineer">
                          Software Engineer
                        </SelectItem>
                        <SelectItem value="security-analyst">
                          Security Analyst
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.jobTitle && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.jobTitle}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="program"
                      className="text-sm font-medium text-gray-700"
                    >
                      Program <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, program: value }))
                      }
                    >
                      <SelectTrigger className="mt-1 border-gray-300 focus:border-blue-500">
                        <SelectValue placeholder="Select Program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cybersecurity-pro">
                          Cybersecurity Pro
                        </SelectItem>
                        <SelectItem value="ethical-hacking">
                          Ethical Hacking
                        </SelectItem>
                        <SelectItem value="web-security">
                          Web Security
                        </SelectItem>
                        <SelectItem value="mobile-security">
                          Mobile Security
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.program && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.program}
                      </p>
                    )}
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <Label
                    htmlFor="mobile"
                    className="text-sm font-medium text-gray-700"
                  >
                    Mobile Number <span className="text-red-500">*</span>
                  </Label>
                  {/* <div className="flex mt-1">
                    <div className="flex items-center px-3 border border-r-0 border-gray-500 bg-gray-50 rounded-l-md">
                      <span className="text-sm  text-gray-800 font-medium">
                        IN +91
                      </span>
                    </div>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="rounded-l-none border-gray-300 focus:border-blue-500"
                      value={formData.mobileNumber}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          mobileNumber: e.target.value,
                        }))
                      }
                    />
                  </div> */}
                  <div className="flex mt-1">
                    <div className="flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md">
                      <span className="text-sm font-medium whitespace-nowrap text-gray-800">
                        IN +91
                      </span>
                    </div>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="rounded-l-none border-gray-300 focus:border-black"
                      value={formData.mobileNumber}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          mobileNumber: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  {errors.mobileNumber && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.mobileNumber}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    You'll receive an OTP on this number for verification
                  </p>
                </div>

                {/* Terms */}
                <p className="text-xs text-gray-500">
                  By continuing, I have read and agree to Scaler's Terms and
                  Privacy Policy
                </p>

                {/* API error */}
                {apiError && (
                  <p className="text-sm text-red-600 font-medium">{apiError}</p>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 text-base disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Request a Call"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
