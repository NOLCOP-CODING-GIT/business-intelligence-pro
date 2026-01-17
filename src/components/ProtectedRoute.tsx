import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem("dashboardAuth") === "true";
  });

  useEffect(() => {
    const checkAuth = () => {
      const auth = sessionStorage.getItem("dashboardAuth") === "true";
      setIsAuthenticated(auth);
    };

    // Vérifier l'authentification toutes les 100ms pour détecter les changements
    const interval = setInterval(checkAuth, 100);

    // Écouter les changements de stockage (pour les onglets multiples)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "dashboardAuth") {
        checkAuth();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
