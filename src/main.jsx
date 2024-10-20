import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavbarLayout from "./layouts/nav.layout";
import Profile from "./routes/apps/profile";
import Messages from "./routes/apps/messages";
import Listings from "./routes/listings";
import Cars from "./routes/listings/cars";
import Homes from "./routes/listings/homes";
import Jobs from "./routes/listings/jobs";
import ListingDetails from "./routes/listings/details";
import ListingReviews from "./routes/listings/ratings";
import Login from "./routes/auth/login";
import Register from "./routes/auth/register";
import Carts from "./routes/apps/carts";
import PasswordReset from "./routes/auth/reset-password";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/reset-password", element: <PasswordReset /> },
  {
    index: "/",
    element: <NavbarLayout />,
    children: [
      { index: true, element: <Listings /> },
      { path: "listings", element: <Listings /> },
      { path: "cars", element: <Cars /> },
      { path: "homes", element: <Homes /> },
      { path: "jobs", element: <Jobs /> },
      { path: "listings/:listId", element: <ListingDetails /> },
      { path: "listings/:listId/review", element: <ListingReviews /> },

      { path: "app/profile", element: <Profile /> },
      { path: "app/messages", element: <Messages /> },
      { path: "app/carts", element: <Carts /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
