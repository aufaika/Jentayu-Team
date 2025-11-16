"use client";

import { useEffect, useState } from "react";
import LoginModal from "./components/login-modal";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem("admin_jwt_token");

    if (token) {
      try {
        const decoded = JSON.parse(atob(token));
        // Check if token is expired
        if (decoded.exp && decoded.exp > Date.now()) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("admin_jwt_token");
          setIsAuthenticated(false);
        }
      } catch (e) {
        localStorage.removeItem("admin_jwt_token");
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }

    setIsChecking(false);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginModal onLoginSuccess={handleLoginSuccess} />;
  }

  return <div>{children}</div>;
}
