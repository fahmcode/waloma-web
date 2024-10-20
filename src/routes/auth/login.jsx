import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../context/constants";
import { Lock, Eye, EyeOff, User } from "react-feather";
import ErrorMessage from "../../components/error-message";
import { useAuth } from "../../context/auth-context";

export default function PremiumLogin() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(`${baseUrl}/api/auth/login`, {
        username,
        password,
      });

      if (response.data.success) {
        const { user, token } = response.data;
        setUser(user);
        navigate("/");
      } else {
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else if (error.request) {
        setError("No response received from the server");
      } else {
        setError("An error occurred while setting up the request");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100">
      <div className="bg-transparent p-8 rounded-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {error && (
          <ErrorMessage message={error} onClose={() => setError(null)} />
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                placeholder="Enter your username"
              />
              <User
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
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                placeholder="Enter your password"
              />
              <Lock
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="text-sm text-end">
            <Link
              to="/reset-password"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out transform hover:scale-105"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
