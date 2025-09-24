// src/App.js
import React, { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Signup from "./Signup";
import Login from "./Loginnp"; // Fixed the import name
import Tournament from "./Tournament";
import Profile from "./Profile";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Store logged-in user info

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <div className="App">
      {/* Navbar visible only when logged in */}
      {isAuthenticated && (
        <nav className="navbar">
          <div className="logo-title">
            <span className="logo-text">🎮 GamePortal</span>
          </div>
          <ul className="nav-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/tournament">Tournaments</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}

      {/* Routes */}
      <Routes>
        {/* Login Page */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <Login
                onLogin={(userData) => {
                  setIsAuthenticated(true);
                  setUser(userData);
                }}
              />
            )
          }
        />

        {/* Signup Page */}
        <Route
          path="/signup"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <Signup
                onSignup={(userData) => {
                  setIsAuthenticated(true);
                  setUser(userData);
                }}
              />
            )
          }
        />

        {/* Home Page */}
        <Route
          path="/home"
          element={isAuthenticated ? <Home user={user} /> : <Navigate to="/" />}
        />

        {/* About Page */}
        <Route
          path="/about"
          element={isAuthenticated ? <About /> : <Navigate to="/" />}
        />

        {/* Tournament Page */}
        <Route
          path="/tournament"
          element={isAuthenticated ? <Tournament /> : <Navigate to="/" />}
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={isAuthenticated ? <Contact /> : <Navigate to="/" />}
        />

        {/* Profile Page */}
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile user={user} /> : <Navigate to="/" />}
        />

        {/* Catch-all route for unknown URLs */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
