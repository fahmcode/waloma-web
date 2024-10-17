import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavbarLayout from "./layouts/nav.layout";
import Listings from "./components/listings";
import ProducDetail from "./components/ProductDetails";
import ProfilePage from "./components/profile";
import ProductReviewPage from "./components/ratings";
import Login from "./routes/login";
import Register from "./routes/register";
import Messages from "./routes/apps/messages";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    index: "/",
    element: <NavbarLayout />,
    children: [
      { index: true, element: <Listings /> },
      { path: "listings/:listId", element: <ProducDetail /> },
      { path: "listings/:listId/review", element: <ProductReviewPage /> },

      { path: "app/profile", element: <ProfilePage /> },
      { path: "app/messages", element: <Messages /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
