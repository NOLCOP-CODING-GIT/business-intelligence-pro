import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import BIDashboardPage from "./pages/BIDashboardPage";
import FormationsPage from "./pages/FormationsPage";
import Web3MarketplacePage from "./pages/Web3MarketplacePage";
import NotFoundPage from "./pages/NotFoundPage";
import PasswordPage from "./pages/PasswordPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";
import ArrowToTop from "./components/ArrowToTop";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col grow">
      <Router>
        <Routes>
          <Route path="/login" element={<PasswordPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/"
            element={
              <div className="min-h-screen flex flex-col grow">
                <Header />
                <main className="grow pt-16">
                  <HomePage />
                </main>
                <Footer />
              </div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <div className="min-h-screen flex flex-col grow">
                  <Header />
                  <main className="grow pt-16">
                    <BIDashboardPage />
                  </main>
                  <Footer />
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/formations"
            element={
              <div className="min-h-screen flex flex-col grow">
                <Header />
                <main className="grow pt-16">
                  <FormationsPage />
                </main>
                <Footer />
              </div>
            }
          />
          <Route
            path="/marketplace"
            element={
              <div className="min-h-screen flex flex-col grow">
                <Header />
                <main className="grow pt-16">
                  <Web3MarketplacePage />
                </main>
                <Footer />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <div className="min-h-screen flex flex-col grow">
                  <Header />
                  <main className="grow pt-16">
                    <ProfilePage />
                  </main>
                  <Footer />
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <div className="min-h-screen flex flex-col grow">
                  <Header />
                  <main className="grow pt-16">
                    <SettingsPage />
                  </main>
                  <Footer />
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
        <ArrowToTop />
        <Toaster position="top-right" />
      </Router>
    </div>
  );
}

export default App;
