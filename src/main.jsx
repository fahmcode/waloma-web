import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavbarLayout from "./layouts/nav.layout";
import Listings from "./components/listings";
import ProducDetail from "./components/ProductDetails";
import ProfilePage from "./components/profile";
import NotificationsPage from "./components/notifications";
import ProductReviewPage from "./components/ratings";

const router = createBrowserRouter([
  { path: "/login", element: <div>Login</div> },
  {
    index: "/",
    element: <NavbarLayout />,
    children: [
      { index: true, element: <Listings /> },
      { path: "listings/:listId", element: <ProducDetail /> },
      { path: "listings/:listId/review", element: <ProductReviewPage /> },

      { path: "profile", element: <ProfilePage /> },
      { path: "notifications", element: <NotificationsPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
