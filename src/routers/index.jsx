import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "../views/auth/login";
import Dashboard from "../views/admin/dashboard/index";
import Layout from "../layout/layout";

// Scroll to Top when switching page
const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};
const token = localStorage.getItem("token");
const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          {/* Auth Routes  */}
          <Route path="/login" element={<Login />} />
          {/* Main Routes */}
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route
            path="/"
            element={token ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;