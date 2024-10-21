import { useState } from "react";
import {
  Star,
  Heart,
  Share2,
  ArrowLeft,
  MapPin,
  Calendar,
  DollarSign,
  Briefcase,
  Home,
  Truck,
  ShoppingBag,
  Book,
  ChevronLeft,
  ChevronRight,
  Airplay,
} from "react-feather";
import { Link, useNavigate } from "react-router-dom";

// This would typically come from a database or API
const item = {
  id: 3,
  title: "Luxury Sedan",
  description:
    "Experience unparalleled comfort and style with our latest luxury sedan. This elegant vehicle combines cutting-edge technology with exquisite craftsmanship to deliver a driving experience like no other. Features include leather interior, panoramic sunroof, advanced driver assistance systems, and a powerful yet efficient engine.",
  price: 45000,
  images: [
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1543796076-c8a1e1f3b6c5?w=1200&h=600&fit=crop",
  ],
  category: "Cars",
  rating: 4,
  reviews: 12,
  location: "New York, NY",
  datePosted: "2023-05-15",
  features: [
    "3.0L V6 Twin-Turbo Engine",
    "All-Wheel Drive",
    "10-inch Touchscreen Infotainment System",
    "Premium Sound System",
    "Adaptive Cruise Control",
    "Lane Keeping Assist",
  ],
  postedBy: {
    name: "Mike Johnson",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
    email: "mike@example.com",
  },
};

const getCategoryIcon = (category) => {
  switch (category) {
    case "Electronics":
      return <Airplay className="w-6 h-6" />;
    case "Clothing":
      return <ShoppingBag className="w-6 h-6" />;
    case "Cars":
      return <Truck className="w-6 h-6" />;
    case "Real Estate":
      return <Home className="w-6 h-6" />;
    case "Jobs":
      return <Briefcase className="w-6 h-6" />;
    case "Books":
      return <Book className="w-6 h-6" />;
    default:
      return null;
  }
};

export default function ListingDetails() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative w-full h-[50vh] bg-gray-200">
        <img
          src={item.images[currentImageIndex]}
          alt={`${item.title} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {item.images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentImageIndex
                  ? "bg-white"
                  : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <button
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Listings
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-2">
              {getCategoryIcon(item.category)}
              <span className="ml-2 bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {item.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < item.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill={i < item.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-gray-600">({item.reviews} reviews)</span>
            </div>
            <p className="text-2xl font-bold mb-4">
              ${item.price.toLocaleString()}
            </p>
            <p className="text-gray-700 mb-6">{item.description}</p>

            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 mr-2 text-gray-500" />
              <span>{item.location}</span>
            </div>
            <div className="flex items-center mb-6">
              <Calendar className="w-5 h-5 mr-2 text-gray-500" />
              <span>Posted on {item.datePosted}</span>
            </div>
          </div>

          <div>
            <div className="flex space-x-4 mb-6">
              <button className="flex-1 bg-black text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-gray-900">
                <DollarSign className="mr-2 h-4 w-4" /> Make an Offer
              </button>
              <Link
                to="review"
                className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center justify-center hover:bg-gray-100"
              >
                <Star className="mr-2 h-4 w-4" /> Review this Product
              </Link>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="grid grid-cols-2 gap-2">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">About the Seller</h2>
          <div className="flex items-center">
            <img
              src={item.postedBy.avatar}
              alt={item.postedBy.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4">
              <p className="font-semibold">{item.postedBy.name}</p>
              <p className="text-gray-600">{item.postedBy.email}</p>
            </div>
            <button className="ml-auto border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
