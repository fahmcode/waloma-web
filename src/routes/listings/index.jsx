import { useState } from "react";

import {
  Airplay,
  Book,
  Briefcase,
  Calendar,
  Check,
  Clock,
  Heart,
  Home,
  Search,
  Star,
  Truck,
  X,
} from "react-feather";
import { Link } from "react-router-dom";

const listings = [
  {
    id: 1,
    title: "Stylish Smartwatch",
    description: "Stay connected with this sleek smartwatch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=400&fit=crop",
    category: "Electronics",
    rating: 4,
    postedBy: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
      email: "john@example.com",
    },
  },
  {
    id: 2,
    title: "Leather Jacket",
    description: "Classic leather jacket for a timeless look",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=400&fit=crop",
    category: "Clothing",
    rating: 5,
    postedBy: {
      name: "Jane Smith",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
      email: "jane@example.com",
    },
  },
  {
    id: 3,
    title: "Luxury Sedan",
    description: "Elegant and powerful luxury sedan",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=400&fit=crop",
    category: "Cars",
    rating: 4,
    postedBy: {
      name: "Mike Johnson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
      email: "mike@example.com",
    },
  },
  {
    id: 4,
    title: "Modern Apartment",
    description: "Spacious city-center apartment with great views",
    price: 2000,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop",
    category: "Real Estate",
    rating: 4,
    postedBy: {
      name: "Sarah Lee",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
      email: "sarah@example.com",
    },
  },
  {
    id: 5,
    title: "Software Developer",
    description: "Exciting opportunity for an experienced developer",
    price: 80000,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop",
    category: "Jobs",
    rating: 5,
    postedBy: {
      name: "Tech Innovations Inc.",
      avatar:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=50&h=50&fit=crop",
      email: "jobs@techinnovations.com",
    },
  },
  {
    id: 6,
    title: "Vintage Book Collection",
    description: "Rare collection of classic literature",
    price: 500,
    image:
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=500&h=400&fit=crop",
    category: "Books",
    rating: 5,
    postedBy: {
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop",
      email: "emma@example.com",
    },
  },
  {
    id: 7,
    title: "Electric Scooter",
    description: "Eco-friendly urban transportation",
    price: 599.99,
    image:
      "https://images.unsplash.com/photo-1556036518-0f3751a52dfc?w=500&h=400&fit=crop",
    category: "Electronics",
    rating: 4,
    postedBy: {
      name: "Alex Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
      email: "alex@example.com",
    },
  },
  {
    id: 8,
    title: "Beachfront Villa",
    description: "Luxurious vacation home with ocean views",
    price: 5000000,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=400&fit=crop",
    category: "Real Estate",
    rating: 5,
    postedBy: {
      name: "Luxury Homes Realty",
      avatar:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=50&h=50&fit=crop",
      email: "info@luxuryhomes.com",
    },
  },
  {
    id: 9,
    title: "Marketing Manager",
    description: "Lead our marketing team to new heights",
    price: 75000,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
    category: "Jobs",
    rating: 4,
    postedBy: {
      name: "Global Brands Corp.",
      avatar:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=50&h=50&fit=crop",
      email: "careers@globalbrands.com",
    },
  },
  {
    id: 10,
    title: "Vintage Muscle Car",
    description: "Restored classic American muscle car",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=400&fit=crop",
    category: "Cars",
    rating: 5,
    postedBy: {
      name: "Classic Auto Enthusiasts",
      avatar:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=50&h=50&fit=crop",
      email: "sales@classicauto.com",
    },
  },
  {
    id: 11,
    title: "Designer Sunglasses",
    description: "Trendy sunglasses for the fashion-forward",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=400&fit=crop",
    category: "Clothing",
    rating: 4,
    postedBy: {
      name: "Olivia Taylor",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop",
      email: "olivia@example.com",
    },
  },
  {
    id: 12,
    title: "Graphic Design Course",
    description: "Master the art of graphic design",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=400&fit=crop",
    category: "Education",
    rating: 5,
    postedBy: {
      name: "Creative Academy",
      avatar:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=50&h=50&fit=crop",
      email: "info@creativeacademy.com",
    },
  },
];

const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Cars",
  "Real Estate",
  "Jobs",
  "Books",
  "Education",
];
const priceRanges = [
  "Any",
  "$0 - $100",
  "$100 - $1,000",
  "$1,000 - $10,000",
  "$10,000+",
];

export default function Listings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("Any");
  const [selectedRating, setSelectedRating] = useState(0);

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Electronics":
        return <Airplay className="w-4 h-4" />;
      case "Clothing":
        return <Clock className="w-4 h-4" />;
      case "Cars":
        return <Truck className="w-4 h-4" />;
      case "Real Estate":
        return <Home className="w-4 h-4" />;
      case "Jobs":
        return <Briefcase className="w-4 h-4" />;
      case "Books":
        return <Book className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const ListingCard = ({ listing }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={listing.image}
        alt={listing.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center mb-2">
          {getCategoryIcon(listing.category)}
          <span className="ml-2 text-sm text-gray-500">{listing.category}</span>
        </div>
        <h3 className="font-semibold text-lg mb-2">{listing.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{listing.description}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-lg">
            {listing.category === "Jobs"
              ? `$${listing.price.toLocaleString()}/year`
              : `$${listing.price.toLocaleString()}`}
          </span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                size={24}
                key={i}
                className={`w-4 h-4 ${
                  i < listing.rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill={i < listing.rating ? "currentColor" : "none"}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center mb-4">
          <img
            src={listing.postedBy.avatar}
            alt={listing.postedBy.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <p className="text-sm font-semibold">{listing.postedBy.name}</p>
            <p className="text-xs text-gray-500">{listing.postedBy.email}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <Link
            to="/listings/2"
            className="bg-black text-white px-4 py-2 rounded-md flex items-center"
          >
            View details
          </Link>
          <button className="text-gray-600 hover:text-primary">
            <Heart size={24} className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search
          size={24}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search listings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        {searchTerm && (
          <button
            onClick={handleClearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={24} className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filter Section */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md border ${
                selectedCategory === category
                  ? "bg-black text-white border-primary"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              } flex items-center`}
            >
              {getCategoryIcon(category)}
              <span className="ml-2">{category}</span>
              {selectedCategory === category && (
                <Check size={24} className="w-4 h-4 ml-2" />
              )}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {priceRanges.map((range) => (
            <button
              key={range}
              onClick={() => setSelectedPriceRange(range)}
              className={`px-4 py-2 rounded-md border ${
                selectedPriceRange === range
                  ? "bg-black text-white border-primary"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {range}
            </button>
          ))}
        </div>

        <button className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 flex items-center">
          <Calendar className="w-4 h-4 mr-2" size={24} />
          Date Posted
        </button>
      </div>

      {/* Listing Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <button className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 mr-2">
          Previous
        </button>
        <button className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100">
          Next
        </button>
      </div>
    </div>
  );
}
