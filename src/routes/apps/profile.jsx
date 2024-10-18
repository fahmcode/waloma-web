import React, { useState } from "react";
import {
  User,
  Shield,
  Activity,
  Edit,
  Camera,
  Lock,
  Key,
  Bell,
  CreditCard,
  LogOut,
  Trash2,
  Eye,
  EyeOff,
} from "react-feather";

const user = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  bio: "Product designer and developer based in New York City. Passionate about creating intuitive and beautiful user experiences.",
  location: "New York, NY",
  website: "https://janedoe.com",
  joinDate: "January 2020",
};

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

const IconButton = ({ icon, label }) => (
  <button className="flex flex-col items-center justify-center w-24 h-24 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
    <div className="p-3 bg-white rounded-full shadow-md mb-2">{icon}</div>
    <span className="text-sm text-gray-700">{label}</span>
  </button>
);

export default function Profile() {
  const [activeTab, setActiveTab] = useState("general");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex-1 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48 bg-gradient-to-r from-primary to-primary-dark">
            <img
              src={user.avatar}
              alt={user.name}
              className="absolute bottom-0 left-6 transform translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
            />
          </div>
          <div className="pt-16 px-6 pb-6">
            <h1 className="text-2xl font-bold">{user.name}</h1>
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
            <TabButton
              icon={<Activity size={18} />}
              label="Activities"
              active={activeTab === "activities"}
              onClick={() => setActiveTab("activities")}
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
                        Name
                      </label>
                      <input
                        type="text"
                        value={user.name}
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        value={user.location}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Website
                      </label>
                      <input
                        type="url"
                        value={user.website}
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
                    value={user.bio}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900">
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
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Two-Factor Authentication
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Add an extra layer of security to your account
                  </p>
                  <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900">
                    Enable 2FA
                  </button>
                </div>
                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900">
                    Update Security Settings
                  </button>
                </div>
              </div>
            )}
            {activeTab === "activities" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">
                  Recent Activities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <IconButton icon={<Edit size={24} />} label="Edit Profile" />
                  <IconButton
                    icon={<Camera size={24} />}
                    label="Update Photo"
                  />
                  <IconButton icon={<Lock size={24} />} label="Privacy" />
                  <IconButton icon={<Key size={24} />} label="Password" />
                  <IconButton icon={<Bell size={24} />} label="Notifications" />
                  <IconButton icon={<CreditCard size={24} />} label="Billing" />
                  <IconButton icon={<LogOut size={24} />} label="Sign Out" />
                  <IconButton
                    icon={<Trash2 size={24} />}
                    label="Delete Account"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Login History</h3>
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-left">Date</th>
                        <th className="px-4 py-2 text-left">IP Address</th>
                        <th className="px-4 py-2 text-left">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2">2023-05-15 10:30 AM</td>
                        <td className="px-4 py-2">192.168.1.1</td>
                        <td className="px-4 py-2">New York, USA</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2">2023-05-14 3:45 PM</td>
                        <td className="px-4 py-2">192.168.1.2</td>
                        <td className="px-4 py-2">Los Angeles, USA</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">2023-05-13 9:15 AM</td>
                        <td className="px-4 py-2">192.168.1.3</td>
                        <td className="px-4 py-2">Chicago, USA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
