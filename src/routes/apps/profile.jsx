import axios from "axios";
import { useState } from "react";
import { User, Shield, Activity, Eye, EyeOff } from "react-feather";
import { useAuth } from "../../context/auth-context";
import { baseUrl } from "../../context/constants";

const TabButton = ({ icon, label, active, onClick }) => (
  <button
    className={`flex items-center px-4 py-2 rounded-md ${
      active
        ? "bg-black text-white"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </button>
);
export default function Profile() {
  const { user, setUser } = useAuth();
  const [activeTab, setActiveTab] = useState("general");
  const [showPassword, setShowPassword] = useState(false);

  const [first_name, setFirstName] = useState(user?.first_name || "");
  const [last_name, setLastName] = useState(user?.last_name || "");
  const [bio, setBio] = useState(user?.bio || "");

  const [new_password, setNewPassword] = useState("");
  const [current_password, setCurrentPassword] = useState("");
  const [new_password_confirm, setNewPasswordConfirm] = useState("");

  const handleChangePassword = async () => {
    if (new_password !== new_password_confirm) {
      alert("Passwords do not match.");
      return;
    }

    if (!user || !user.id) {
      alert("Please login to access this page.");
      return;
    }

    try {
      const response = await axios.put(
        `${baseUrl}/api/users/${user.id}/change-password`,
        {
          current_password,
          new_password,
        },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      if (response.status === 200) {
        alert("Password updated successfully!");
        setCurrentPassword("");
        setNewPassword("");
        setNewPasswordConfirm("");
      }
    } catch (error) {
      console.error(error);
      alert(
        "Failed to update password. Please check your current password and try again."
      );
    }
  };

  const handleUserInfoChange = async () => {
    if (!user || !user.id) {
      alert("Please login to access this page.");
      return;
    }

    try {
      const response = await axios.put(
        `${baseUrl}/api/users/${user.id}`,
        {
          first_name,
          last_name,
          bio,
        },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      if (response.data && response.data.success) {
        alert("User information updated successfully!");
        setUser(response.data.user);
      }
    } catch (error) {
      console.error(error);
      alert(
        "Failed to update user information. Please check your inputs and try again."
      );
    }
  };

  return (
    <div className="flex-1 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48 bg-gradient-to-r from-primary to-primary-dark">
            <img
              src={`https://robohash.org/${user.username}`}
              alt={user.username}
              className="absolute bottom-0 left-6 transform translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
            />
          </div>
          <div className="pt-16 px-6 pb-6">
            <h1 className="text-2xl font-bold">{user.username}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <div className="px-6 pb-6 flex space-x-4">
            <TabButton
              icon={<User size={18} />}
              label="General"
              active={activeTab === "general"}
              onClick={() => setActiveTab("general")}
            />
            <TabButton
              icon={<Shield size={18} />}
              label="Security"
              active={activeTab === "security"}
              onClick={() => setActiveTab("security")}
            />
          </div>
          <div className="px-6 pb-6">
            {activeTab === "general" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Profile Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Forst Name
                      </label>
                      <input
                        type="text"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={user.email}
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                      </label>
                      <input
                        type="text"
                        value={user.username}
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900"
                    onClick={handleUserInfoChange}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
            {activeTab === "security" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Security Settings
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Password
                      </label>
                      <div className="relative">
                        <input
                          value={current_password}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          type={showPassword ? "text" : "password"}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary pr-10"
                        />
                        <button
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <input
                        value={new_password}
                        onChange={(e) => setNewPassword(e.target.value)}
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        value={new_password_confirm}
                        onChange={(e) => setNewPasswordConfirm(e.target.value)}
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900"
                    onClick={handleChangePassword}
                  >
                    Update Security Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
