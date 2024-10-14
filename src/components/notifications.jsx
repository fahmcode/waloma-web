import React, { useState } from "react";
import {
  Bell,
  Settings,
  Trash2,
  Mail,
  Briefcase,
  Home,
  ShoppingBag,
  Calendar,
  DollarSign,
  Star,
  AlertCircle,
} from "react-feather";

const notificationTypes = [
  { id: "all", label: "All Notifications", icon: <Bell size={18} /> },
  { id: "jobs", label: "Job Alerts", icon: <Briefcase size={18} /> },
  { id: "rentals", label: "Rental Updates", icon: <Home size={18} /> },
  { id: "orders", label: "Order Status", icon: <ShoppingBag size={18} /> },
  { id: "messages", label: "Messages", icon: <Mail size={18} /> },
  { id: "reminders", label: "Reminders", icon: <Calendar size={18} /> },
];

const notifications = [
  {
    id: 1,
    type: "jobs",
    title: "New job match: Senior Developer",
    description: "A new job matching your profile has been posted.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "rentals",
    title: "Apartment viewing scheduled",
    description:
      "Your viewing for 123 Main St. is confirmed for tomorrow at 2 PM.",
    time: "1 day ago",
    read: true,
  },
  {
    id: 3,
    type: "orders",
    title: "Order shipped",
    description:
      "Your order #12345 has been shipped and will arrive in 2-3 business days.",
    time: "3 days ago",
    read: false,
  },
  {
    id: 4,
    type: "messages",
    title: "New message from landlord",
    description: "You have a new message regarding your rental application.",
    time: "1 week ago",
    read: true,
  },
  {
    id: 5,
    type: "reminders",
    title: "Upcoming interview",
    description: "Don't forget your interview with Tech Co. tomorrow at 10 AM.",
    time: "1 week ago",
    read: false,
  },
];

const NotificationItem = ({ notification, onMarkAsRead, onDelete }) => (
  <div
    className={`p-4 border-b ${notification.read ? "bg-white" : "bg-blue-50"}`}
  >
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-3">
        {notification.type === "jobs" && (
          <Briefcase size={24} className="text-blue-500" />
        )}
        {notification.type === "rentals" && (
          <Home size={24} className="text-green-500" />
        )}
        {notification.type === "orders" && (
          <ShoppingBag size={24} className="text-purple-500" />
        )}
        {notification.type === "messages" && (
          <Mail size={24} className="text-yellow-500" />
        )}
        {notification.type === "reminders" && (
          <Calendar size={24} className="text-red-500" />
        )}
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{notification.title}</h3>
        <p className="text-gray-600">{notification.description}</p>
        <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
      </div>
      <div className="flex-shrink-0 ml-3">
        {!notification.read && (
          <button
            onClick={() => onMarkAsRead(notification.id)}
            className="text-blue-500 hover:text-blue-700"
          >
            Mark as read
          </button>
        )}
        <button
          onClick={() => onDelete(notification.id)}
          className="ml-2 text-red-500 hover:text-red-700"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  </div>
);

export default function NotificationsPage() {
  const [activeType, setActiveType] = useState("all");
  const [notificationList, setNotificationList] = useState(notifications);

  const filteredNotifications =
    activeType === "all"
      ? notificationList
      : notificationList.filter((n) => n.type === activeType);

  const handleMarkAsRead = (id) => {
    setNotificationList(
      notificationList.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleDelete = (id) => {
    setNotificationList(notificationList.filter((n) => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold">Notifications</h1>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-2">
                {notificationTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveType(type.id)}
                    className={`px-3 py-2 rounded-md flex items-center ${
                      activeType === type.id
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {type.icon}
                    <span className="ml-2">{type.label}</span>
                  </button>
                ))}
              </div>
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Settings size={18} className="mr-1" />
                Settings
              </button>
            </div>
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onMarkAsRead={handleMarkAsRead}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Notification Preferences</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Briefcase size={18} className="mr-2 text-blue-500" />
                  <span>Job Alerts</span>
                </div>
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" defaultChecked />
                    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Home size={18} className="mr-2 text-green-500" />
                  <span>Rental Updates</span>
                </div>
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" defaultChecked />
                    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ShoppingBag size={18} className="mr-2 text-purple-500" />
                  <span>Order Status</span>
                </div>
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" defaultChecked />
                    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Mail size={18} className="mr-2 text-yellow-500" />
                  <span>Messages</span>
                </div>
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" defaultChecked />
                    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <DollarSign size={18} className="mr-2 text-green-500" />
                  <span>Price Drops</span>
                </div>
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" defaultChecked />
                    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star size={18} className="mr-2 text-yellow-500" />
                  <span>New Reviews</span>
                </div>
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" defaultChecked />
                    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertCircle size={18} className="mr-2 text-red-500" />
                  <span>Security Alerts</span>
                </div>
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" defaultChecked />
                    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
