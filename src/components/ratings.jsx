import React, { useState } from "react";
import {
  Star,
  ThumbsUp,
  ThumbsDown,
  BarChart2,
  Filter,
  ChevronDown,
  ChevronUp,
} from "react-feather";

const product = {
  name: "Ergonomic Office Chair",
  image:
    "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=300&fit=crop",
  rating: 4.5,
  reviewCount: 1280,
  price: 199.99,
};

const reviews = [
  {
    id: 1,
    author: "John D.",
    rating: 5,
    date: "2023-05-01",
    title: "Best chair I've ever owned",
    content:
      "I've been using this chair for a month now and it has significantly improved my posture and reduced back pain. Highly recommended!",
    helpful: 45,
    notHelpful: 2,
  },
  {
    id: 2,
    author: "Sarah M.",
    rating: 4,
    date: "2023-04-15",
    title: "Great chair, but a bit pricey",
    content:
      "The chair is very comfortable and well-built. My only complaint is that it's a bit expensive compared to similar models.",
    helpful: 30,
    notHelpful: 5,
  },
  // Add more reviews here...
];

const RatingBar = ({ percentage, count }) => (
  <div className="flex items-center">
    <div className="w-48 bg-gray-200 rounded-full h-2.5 mr-2">
      <div
        className="bg-yellow-400 h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
    <span className="text-sm text-gray-600">{count}</span>
  </div>
);

const ReviewItem = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(review.helpful);
  const [notHelpfulCount, setNotHelpfulCount] = useState(review.notHelpful);

  return (
    <div className="border-b py-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">{review.title}</h3>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < review.rating ? "gold" : "none"}
                stroke={i < review.rating ? "gold" : "currentColor"}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              by {review.author} on {review.date}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setHelpfulCount(helpfulCount + 1)}
            className="flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ThumbsUp size={14} className="mr-1" /> {helpfulCount}
          </button>
          <button
            onClick={() => setNotHelpfulCount(notHelpfulCount + 1)}
            className="flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ThumbsDown size={14} className="mr-1" /> {notHelpfulCount}
          </button>
        </div>
      </div>
      <p className={`mt-2 text-gray-700 ${!isExpanded && "line-clamp-3"}`}>
        {review.content}
      </p>
      {review.content.length > 200 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-sm text-blue-600 hover:text-blue-800"
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default function ProductReviewPage() {
  const [sortBy, setSortBy] = useState("most_recent");
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-md mr-4"
              />
              <div>
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill={i < Math.floor(product.rating) ? "gold" : "none"}
                        stroke={
                          i < Math.floor(product.rating)
                            ? "gold"
                            : "currentColor"
                        }
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-xl font-semibold">
                    {product.rating}
                  </span>
                  <span className="ml-2 text-gray-600">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
                <p className="mt-1 text-lg font-semibold">${product.price}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3">
                <h3 className="text-lg font-semibold mb-2">Rating Breakdown</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center">
                      <span className="w-16">{stars} stars</span>
                      <RatingBar percentage={75} count={960} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border rounded-md px-2 py-1"
                    >
                      <option value="most_recent">Most Recent</option>
                      <option value="highest_rated">Highest Rated</option>
                      <option value="lowest_rated">Lowest Rated</option>
                    </select>
                    <select
                      value={filterBy}
                      onChange={(e) => setFilterBy(e.target.value)}
                      className="border rounded-md px-2 py-1"
                    >
                      <option value="all">All Stars</option>
                      <option value="5">5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="2">2 Stars</option>
                      <option value="1">1 Star</option>
                    </select>
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-800">
                    <Filter size={16} className="mr-1" />
                    More Filters
                  </button>
                </div>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <ReviewItem key={review.id} review={review} />
                  ))}
                </div>
                <div className="mt-6">
                  <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                    Load More Reviews
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">Write a Review</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-gray-300 hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
                    >
                      <Star size={24} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="review-title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="review-title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Summarize your review"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="review-content"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Review
                </label>
                <textarea
                  id="review-content"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your review here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
