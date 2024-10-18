import React, { useState, useEffect, useRef } from "react";
import { Search, Send, Phone, Video, MoreVertical } from "react-feather";

// Mock data for users and messages
const users = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "offline",
  },
  {
    id: 3,
    name: "Charlie Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
  },
  {
    id: 4,
    name: "David Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "away",
  },
  {
    id: 5,
    name: "Eva Martinez",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
  },
];

const initialMessages = [
  {
    id: 1,
    senderId: 2,
    text: "Hey there! How's your day going?",
    timestamp: "10:00 AM",
  },
  {
    id: 2,
    senderId: 1,
    text: "'Hi Bob! It's going well, thanks for asking. How about yours?'",
    timestamp: "10:02 AM",
  },
  {
    id: 3,
    senderId: 2,
    text: "'Pretty good! I just finished a big project at work.'",
    timestamp: "10:05 AM",
  },
  {
    id: 4,
    senderId: 1,
    text: "'That's fantastic! Congratulations on completing it. 🎉'",
    timestamp: "10:07 AM",
  },
  {
    id: 5,
    senderId: 2,
    text: "'Thanks! It was challenging but rewarding. Want to grab coffee this weekend and catch up?'",
    timestamp: "10:10 AM",
  },
];

export default function Messages() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const messagesEndRef = useRef(null);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        senderId: 1, // Assuming current user's ID is 1
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-1 bg-gray-50">
      {/* User list sidebar */}
      <div className="w-1/4 bg-white border-r border-gray-200 shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Chats</h2>
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
        <div className="overflow-y-auto flex-grow">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                selectedUser.id === user.id ? "bg-gray-100" : ""
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-12 w-12 rounded-full border-2 border-white shadow-sm"
                />
                <span
                  className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                    user.status === "online"
                      ? "bg-green-500"
                      : user.status === "away"
                      ? "bg-yellow-500"
                      : "bg-gray-500"
                  }`}
                />
              </div>
              <div className="ml-3">
                <p className="font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message room */}
      <div className="flex flex-col w-3/4">
        {/* Chat header */}
        <div className="p-4 border-b border-gray-200 bg-white shadow-sm flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={selectedUser.avatar}
              alt={selectedUser.name}
              className="h-10 w-10 rounded-full mr-3"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {selectedUser.name}
              </h2>
              <p className="text-sm text-gray-500">{selectedUser.status}</p>
            </div>
          </div>
        </div>

        {/* Messages area */}
        <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex mb-4 ${
                message.senderId === 1 ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-md p-3 rounded-lg shadow-sm ${
                  message.senderId === 1
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <span className="text-xs opacity-75 mt-1 block">
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <form
            onSubmit={handleSendMessage}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="p-2 bg-gray-700 text-white rounded-md hover:bg-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              <Send size={20} />
              <span className="sr-only">Send message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
