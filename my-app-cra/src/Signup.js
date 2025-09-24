import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !age || !contact || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    const userData = {
      firstName,
      lastName,
      age: parseInt(age, 10),
      contact,
      email,
      password,
      tournamentsPlayed: 0,
      wins: 0,
      points: 0,
    };

    try {
      setLoading(true);
      const response = await fetch("http://localhost:9090/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const savedUser = await response.json();
        console.log("User saved:", savedUser);
        alert(`Account created successfully!\nWelcome, ${savedUser.firstName}!`);
        navigate("/home");
      } else {
        const errText = await response.text();
        alert("Signup failed: " + errText);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Error connecting to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-background"></div>
      <div className="signup-card">
        <div className="logo">
          <img
            src="https://images.unsplash.com/photo-1614294149710-32eec425a251?auto=format&fit=crop&w=100&q=80"
            alt="Logo"
          />
        </div>
        <h2>Create Account 🎮</h2>
        <p>Sign up to access your gaming dashboard</p>

        <form onSubmit={handleSignup}>
          <div className="input-group">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="tel"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
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

          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

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

        <p className="redirect-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
