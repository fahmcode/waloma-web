import { useEffect, useState } from "react";
import {
  User,
  LogOut,
  Activity,
  ChevronDown,
  MessageSquare,
  ShoppingCart,
} from "react-feather";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const links = [
  { to: "/jobs", label: "Jobs" },
  { to: "/cars", label: "Cars" },
  { to: "/homes", label: "Homes" },
];

const app_links = [
  { to: "/app/messages", label: "View Messages", icon: MessageSquare },
  { to: "/app/carts", label: "Carts", icon: ShoppingCart },
];

export default function NavbarLayout() {
  const { user, setUser } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col h-full w-full bg-gray-50">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <nav className="bg-white border-b border-gray-100">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <span className="text-2xl font-bold text-gray-900 mr-8">
                    Waloma
                  </span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {links.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        isActive
                          ? "text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-gray-900 text-sm font-medium"
                          : "text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium"
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Right side icons and profile */}
              {user ? (
                <div className="flex items-center">
                  {/* Messages, Profile, Carts */}
                  {app_links.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                      <span className="sr-only">{link.label}</span>
                      <link.icon className="h-5 w-5" />
                    </NavLink>
                  ))}

                  {/* Vertical separator */}
                  <div className="ml-3 h-6 w-px bg-gray-200"></div>

                  {/* Profile dropdown */}
                  <div className="ml-3 relative">
                    <div>
                      <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        id="user-menu"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <span className="ml-2 text-gray-700 font-medium">
                          {user.username}
                        </span>
                        <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                    {isProfileOpen && (
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <NavLink
                          to="/app/profile"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          <User className="mr-3 h-4 w-4" /> Profile
                        </NavLink>
                        <a
                          href="#"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          <Activity className="mr-3 h-4 w-4" /> Activities
                        </a>
                        <div className="border-t border-gray-100 my-1"></div>
                        <button
                          className="w-full flex items-center px-4 py-2 text-sm text-red-700 hover:bg-red-100"
                          role="menuitem"
                          onClick={() => setUser(null)}
                        >
                          <LogOut className="mr-3 h-4 w-4" /> Sign out
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center">
                  <Link
                    to="/login"
                    className="py-2 px-6 bg-indigo-500 text-white rounded-md font-bold"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
