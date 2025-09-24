import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginnp.css";

function Loginnp({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:9090/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        onLogin(userData); // save logged-in user
        alert("Login successful!");
        navigate("/home");
      } else {
        const errText = await response.text();
        alert("Login failed: " + errText);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error connecting to server. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>

      <div className="login-content">
        <div className="image-section">
          <div className="gaming-image"></div>
          <div className="game-icons">
            <div
              className="game-icon"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&q=80')",
              }}
            ></div>
            <div
              className="game-icon"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=300&q=80')",
              }}
            ></div>
            <div
              className="game-icon"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=300&q=80')",
              }}
            ></div>
          </div>
        </div>

        <div className="login-box">
          <div className="logo">
            <img
              src="https://images.unsplash.com/photo-1614294149710-32eec425a251?auto=format&fit=crop&w=100&q=80"
              alt="Gaming Portal Logo"
            />
          </div>
          <h2>
            Welcome Back <span className="game-emoji">🎮</span>
          </h2>
          <p>Login to access your gaming dashboard</p>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>

          <div className="divider">
            <span>Or continue with</span>
          </div>

          <div className="social-login">
            <button className="social-btn google">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
              />
              Google
            </button>
            <button className="social-btn discord">
              <img
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62595384e89d1d54d704ece2_343002cded587546a2b5fc07c650f945.svg"
                alt="Discord"
              />
              Discord
            </button>
          </div>

          <p className="signup-text">
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loginnp;
