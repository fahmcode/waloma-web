import { Heart, ShoppingCart, User } from "react-feather";

export default function ProductCard() {
  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img
          alt="Product Image"
          className="object-cover w-full h-48"
          height="200"
          src="../assets/car.jpg"
          style={{
            aspectRatio: "400/200",
            objectFit: "cover",
          }}
          width="400"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Modern Ergonomic Chair</h2>
        <p className="text-sm text-gray-600 mb-4">
          Sleek design meets ultimate comfort in this ergonomic office chair.
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-semibold">$299.99</span>
          <span className="text-sm text-gray-500">Posted on 14 Oct 2024</span>
        </div>
        <div className="flex space-x-2 mb-4">
          <button className="flex-1 bg-gray-900 hover:bg-black rounded-md text-white font-bold py-2 px-4 flex items-center justify-center transition-colors duration-300">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
          <button className="flex-1 bg-white hover:bg-gray-100 rounded-md text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow flex items-center justify-center transition-colors duration-300">
            <Heart className="w-4 h-4 mr-2" />
            Like
          </button>
        </div>
      </div>
      <div className="p-4 bg-gray-50 flex items-center space-x-4">
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full flex items-center justify-center">
          <User className="absolute w-6 h-6 text-gray-400" />
        </div>
        <div>
          <p className="text-sm font-medium">Jane Doe</p>
          <p className="text-xs text-gray-500">jane.doe@example.com</p>
        </div>
      </div>
    </div>
  );
}
