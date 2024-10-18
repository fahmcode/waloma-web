import React, { useState } from "react";
import {
  User,
  Briefcase,
  Code,
  Mail,
  Lock,
  ChevronRight,
  ChevronLeft,
  Check,
  AtSign,
  Phone,
  ArrowRight,
} from "react-feather";
import { motion, AnimatePresence } from "framer-motion";
import Stepper from "../../components/Stepper";
import InputField from "../../components/input-field";

function Register() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    userType: "",
    firstName: "",
    lastName: "",
    phone: "",
    username: "",
    email: "",
    password: "",
    otp: "",
  });

  const steps = [
    { title: "Type", description: "Select user type" },
    { title: "Details", description: "Enter your information" },
    { title: "Verify", description: "Confirm your email" },
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
      console.log("Sending OTP to", formData.email);
    }
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Registration successful!");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full flex flex-col gap-2"
          >
            {[
              { type: "Job Seeker", icon: User },
              { type: "Employer", icon: Briefcase },
              { type: "Broker", icon: Code },
            ].map(({ type, icon: Icon }) => (
              <button
                key={type}
                onClick={() => {
                  setFormData((prevData) => ({ ...prevData, userType: type }));
                  handleNext();
                }}
                className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="flex gap-4">
                  <Icon className="h-6 w-6 mb-4 mx-auto text-gray-500" />
                  <h3 className="text-gray-500 font-medium">{type}</h3>
                </div>
                <ArrowRight className="text-gray-500 h-6 w-6" />
              </button>
            ))}
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6 flex flex-col w-full mt-8 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                icon={User}
                label="First Name"
                id="firstName"
                type="text"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <InputField
                icon={User}
                label="Last Name"
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                icon={AtSign}
                label="Username"
                id="username"
                type="text"
                name="username"
                placeholder="john.doe"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
              <InputField
                icon={Phone}
                label="Phone Number"
                id="phone"
                type="phone"
                name="phone"
                placeholder="+2519000000"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <InputField
              icon={Mail}
              label="Email"
              id="email"
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <InputField
              icon={Lock}
              label="Password"
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6 w-full flex flex-col"
          >
            <p className="text-gray-600">
              We've sent a verification code to your email. Please enter it
              below.
            </p>
            <InputField
              icon={Lock}
              label="Verification Code"
              id="otp"
              type="text"
              name="otp"
              placeholder="Enter 6-digit code"
              value={formData.otp}
              onChange={handleInputChange}
              required
            />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 lg:px-8">
      <div className="mt-8 sm:w-full sm:max-w-4xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Stepper steps={steps} currentStep={currentStep} />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="min-h-[300px] flex items-center">
              <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
            </div>
            <div className="flex items-center mt-8">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </button>
              )}
              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ml-auto"
                >
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ml-auto"
                >
                  Complete
                  <Check className="ml-2 h-4 w-4" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
