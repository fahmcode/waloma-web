import { useState } from "react";
import { Link } from "react-router-dom";
import UserTypeForm from "../../layouts/user-type";
import ErrorMessage from "../../components/error-message";
import {
  User,
  Mail,
  Lock,
  Phone,
  Check,
  ArrowRight,
  Key,
  AtSign,
} from "react-feather";
import InputField from "../../components/input-field";
import axios from "axios";
import { baseUrl } from "../../context/constants";

export default function Register() {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userType, setUserType] = useState("broker");

  const handleUserTypeSubmit = (e) => {
    e.preventDefault();
    console.log(userType);

    setStep(2);
  };

  const handlePersonalInfoSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(`${baseUrl}/api/auth/register`, {
        email,
        username,
        first_name: firstname,
        last_name: lastname,
        password,
        phone_number: phone,
        user_type: userType,
      });

      if (response.data.success) {
        const { user, token } = response.data;
        console.log("Registration successful:", user, token);
        // request otp to verify
        const otpResponse = await axios.post(`${baseUrl}/api/auth/send-otp`, {
          email,
        });

        if (otpResponse.data.success) {
          console.log("OTP sent to:", email);
          setStep(3);
        } else {
          setError("Failed to send OTP. Please try again.");
        }
      } else {
        const { errors } = response.data;
        if (errors && errors.length > 0) {
          const fieldErrors = errors
            .map((err) => `${err.param}: ${err.msg}`)
            .join(", ");
          setError(fieldErrors);
        } else {
          setError(response.data.message || "Registration failed");
        }
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400 && error.response.data.errors) {
          const { errors } = error.response.data;
          if (errors && errors.length > 0) {
            const fieldErrors = errors.map((err) => `${err.msg}`).join(", ");
            setError(fieldErrors);
          } else {
            setError("Validation error. Please check the form and try again.");
          }
        } else if (error.response.status === 500) {
          setError("Internal Server Error. Please try again later.");
        } else {
          setError(error.response.data.message || "An error occurred.");
        }
      } else if (error.request) {
        setError(
          "No response received from the server. Please check your network."
        );
      } else {
        setError("An error occurred while setting up the request.");
      }
      console.error("Error:", error);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(`${baseUrl}/api/auth/verify-otp`, {
        email,
        otp_code: otp,
      });

      if (response.data.success) {
        console.log("OTP verification successful!");
        setStep(4);
      } else {
        setError(response.data.message || "OTP verification failed.");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400 && error.response.data.errors) {
          const { errors } = error.response.data;
          if (errors && errors.length > 0) {
            const fieldErrors = errors
              .map((err) => `${err.param}: ${err.msg}`)
              .join(", ");
            setError(fieldErrors);
          } else {
            setError("Validation error. Please check the form and try again.");
          }
        } else {
          setError(error.response.data.message || "An error occurred.");
        }
      } else if (error.request) {
        setError(
          "No response received from the server. Please check your network."
        );
      } else {
        setError("An error occurred while setting up the request.");
      }
      console.error("Error:", error);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <UserTypeForm
            userType={userType}
            setUserType={setUserType}
            handleUserTypeSubmit={handleUserTypeSubmit}
          />
        );

      case 2:
        return (
          <form onSubmit={handlePersonalInfoSubmit} className="space-y-6">
            <div className="flex gap-8">
              <InputField
                id="firstname"
                label="First Name"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Enter your first name"
                icon={User}
              />
              <InputField
                id="lastname"
                label="Last Name"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Enter your last name"
                icon={User}
              />
            </div>
            <div className="flex gap-8">
              <InputField
                id="username"
                label="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Set a username for yourself"
                icon={AtSign}
              />
              <InputField
                id="phone"
                label="Phone Number"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                icon={Phone}
              />
            </div>
            <InputField
              id="email"
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              icon={Mail}
            />
            <InputField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              icon={Lock}
            />

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
      <div className="bg-transparent p-8 rounded-2xl w-full max-w-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Register</h1>
          <p className="text-gray-600">Join us today and get started</p>
        </div>
        {error && (
          <ErrorMessage message={error} onClose={() => setError(null)} />
        )}

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
