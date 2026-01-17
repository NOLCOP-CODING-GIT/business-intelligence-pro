import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BarChart3,
  Home,
  GraduationCap,
  Store,
  X,
  Menu,
  User,
  LogOut,
  Settings,
} from "lucide-react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Simulation de données utilisateur
  const user = {
    name: "Jean Dupont",
    email: "jean.dupont@email.com",
    avatar: "JD",
    isAuthenticated: sessionStorage.getItem("dashboardAuth") === "true",
  };

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("dashboardAuth");
    setIsProfileOpen(false);
    navigate("/");
  };

  const handleProfile = () => {
    setIsProfileOpen(false);
    // Navigation vers la page profil (à créer)
    navigate("/profile");
  };

  const handleSettings = () => {
    setIsProfileOpen(false);
    // Navigation vers la page paramètres (à créer)
    navigate("/settings");
  };

  return (
    <header className="bg-gray-800 shadow-sm border-b border-gray-700 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Business Intelligence Pro"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-lg"
              />
              <span className="text-xl font-bold text-white hidden sm:block">
                Business Intelligence Pro
              </span>
              <span className="text-xl font-bold text-white sm:hidden">
                BIP
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive("/")
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <Home className="w-4 h-4 mr-2" />
              Accueil
            </Link>
            <Link
              to="/dashboard"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive("/dashboard")
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Dashboard
            </Link>
            <Link
              to="/formations"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive("/formations")
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Formations
            </Link>
            <Link
              to="/marketplace"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive("/marketplace")
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <Store className="w-4 h-4 mr-2" />
              Marketplace
            </Link>
          </nav>

          {/* Profile Section */}
          {user.isAuthenticated && (
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white focus:outline-none"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                  {user.avatar}
                </div>
                <span className="hidden sm:block">{user.name}</span>
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <button
                    onClick={handleProfile}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Mon Profil
                  </button>
                  <button
                    onClick={handleSettings}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Paramètres
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Déconnexion
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-700">
              <Link
                to="/"
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/")
                    ? "text-blue-400 bg-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                <Home className="w-4 h-4 inline mr-2" />
                Accueil
              </Link>
              <Link
                to="/dashboard"
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/dashboard")
                    ? "text-blue-400 bg-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                <BarChart3 className="w-4 h-4 inline mr-2" />
                Dashboard
              </Link>
              <Link
                to="/formations"
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/formations")
                    ? "text-blue-400 bg-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                <GraduationCap className="w-4 h-4 inline mr-2" />
                Formations
              </Link>
              <Link
                to="/marketplace"
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/marketplace")
                    ? "text-blue-400 bg-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                <Store className="w-4 h-4 inline mr-2" />
                Marketplace
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
