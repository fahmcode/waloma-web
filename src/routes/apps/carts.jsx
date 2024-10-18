import React from "react";
import { Minus, Plus, Trash2, ShoppingBag, Phone } from "react-feather";

// Simulated cart data
const cartItems = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 79.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Portable Charger",
    price: 49.99,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
];

export default function Carts() {
  const [items, setItems] = React.useState(cartItems);

  const updateQuantity = (id, change) => {
    setItems(
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Your Cart</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {items.map((item) => (
              <li
                key={item.id}
                className="p-4 sm:p-6 flex flex-col sm:flex-row items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md mb-4 sm:mb-0 sm:mr-6"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-medium text-gray-900">
                    {item.name}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center mt-4 sm:mt-0">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="mx-2 w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <Plus size={20} />
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, -item.quantity)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="p-4 sm:p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-gray-900">Total</span>
              <span className="text-2xl font-semibold text-gray-900">
                ${total.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <button className="w-full sm:w-auto bg-gray-800 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 flex items-center justify-center">
                <ShoppingBag size={20} className="mr-2" />
                Proceed to Checkout
              </button>
              <button className="w-full sm:w-auto border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center justify-center">
                <Phone size={20} className="mr-2" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
