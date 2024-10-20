import React, { useState } from "react";
import {
  User,
  Briefcase,
  Mail,
  Lock,
  Phone,
  Check,
  ArrowRight,
  Key,
} from "react-feather";
import { Link } from "react-router-dom";

export default function PremiumRegistration() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("individual");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const handleUserTypeSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setStep(4);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleUserTypeSubmit} className="space-y-6">
            <div className="space-y-4">
              <button
                type="button"
                onClick={() => setUserType("individual")}
                className={`w-full p-4 text-left rounded-lg border ${
                  userType === "individual"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-300"
                } hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out`}
              >
                <div className="flex items-center">
                  <User
                    className={`mr-3 ${
                      userType === "individual"
                        ? "text-indigo-500"
                        : "text-gray-400"
                    }`}
                    size={24}
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Individual
                    </h3>
                    <p className="text-sm text-gray-500">
                      Personal account for individual use
                    </p>
                  </div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setUserType("business")}
                className={`w-full p-4 text-left rounded-lg border ${
                  userType === "business"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-300"
                } hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out`}
              >
                <div className="flex items-center">
                  <Briefcase
                    className={`mr-3 ${
                      userType === "business"
                        ? "text-indigo-500"
                        : "text-gray-400"
                    }`}
                    size={24}
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Business
                    </h3>
                    <p className="text-sm text-gray-500">
                      Business account for professional use
                    </p>
                  </div>
                </div>
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out transform hover:scale-105"
            >
              Continue
            </button>
          </form>
        );
      case 2:
        return (
          <form onSubmit={handlePersonalInfoSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                  placeholder="Enter your full name"
                />
                <User
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                  placeholder="Enter your email"
                />
                <Mail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                  placeholder="Create a password"
                />
                <Lock
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                  placeholder="Enter your phone number"
                />
                <Phone
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out transform hover:scale-105"
            >
              Continue
            </button>
          </form>
        );
      case 3:
        return (
          <form onSubmit={handleOtpSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Enter OTP
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                  placeholder="Enter the OTP sent to your email"
                />
                <Key
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out transform hover:scale-105"
            >
              Verify OTP
            </button>
          </form>
        );
      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
              <Check className="text-green-600" size={32} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Registration Successful
            </h2>
            <p className="text-gray-600">
              Your account has been successfully created. You can now log in
              with your email and password.
            </p>
            <Link
              to="/login"
              className="inline-block w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out transform hover:scale-105"
            >
              Go to Login
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100">
      <div className="bg-transparent p-8 rounded-2xl w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Register</h1>
          <p className="text-gray-600">Join us today and get started</p>
        </div>

        {renderStep()}

        {step < 4 && (
          <div className="mt-8 flex items-center justify-between">
            <div className="text-sm text-gray-500">Step {step} of 3</div>
            <div className="text-sm text-indigo-600 font-medium flex items-center">
              {step === 1 && "Personal Info"}
              {step === 2 && "Verify Email"}
              {step === 3 && "Finish"}
              <ArrowRight className="ml-1" size={16} />
            </div>
          </div>
        )}

        {step < 4 && (
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log in
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
