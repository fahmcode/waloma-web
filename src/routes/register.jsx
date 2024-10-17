import { useState } from "react";
import Stepper from "../components/Stepper";
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Lock,
  Mail,
  Shield,
  User,
  UserCheck,
} from "react-feather";

function Register() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    userType: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const steps = [
    { title: "User Type", description: "Select your user type" },
    { title: "Personal Info", description: "Enter your details" },
    { title: "Verify", description: "Verify your email" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep === 1) {
      // Simulate sending OTP
      console.log("Sending OTP to", formData.email);
    }
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically verify the OTP and submit the form data
    console.log("Form submitted:", formData);
    // For demo purposes, we'll just log the data
    alert("Registration successful!");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Individual", "Business", "Developer"].map((type) => (
              <button
                key={type}
                onClick={() => {
                  setFormData((prevData) => ({ ...prevData, userType: type }));
                  handleNext();
                }}
                className={`p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                  formData.userType === type
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200"
                }`}
              >
                {type === "Individual" && (
                  <User className="h-8 w-8 mb-2 mx-auto text-blue-500" />
                )}
                {type === "Business" && (
                  <Briefcase className="h-8 w-8 mb-2 mx-auto text-blue-500" />
                )}
                {type === "Developer" && (
                  <Shield className="h-8 w-8 mb-2 mx-auto text-blue-500" />
                )}
                <h3 className="text-lg font-medium">{type}</h3>
                <p className="text-sm text-gray-500">
                  Sign up as a {type.toLowerCase()} user
                </p>
              </button>
            ))}
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              We've sent a verification code to your email. Please enter it
              below to complete your registration.
            </p>
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700"
              >
                Verification Code
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserCheck className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="otp"
                  id="otp"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter 6-digit code"
                  value={formData.otp}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        <Stepper steps={steps} currentStep={currentStep} />
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {steps[currentStep].description}
          </h2>
          {renderStep()}
          <div className="mt-8 flex justify-between">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <ChevronLeft className="mr-2 h-5 w-5" />
                Previous
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Next
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Complete Registration
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
