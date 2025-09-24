// src/Profile.js
import React, { useState } from "react";
import "./Profile.css";

function Profile({ user }) {
  const [profileImage, setProfileImage] = useState(null);

  if (!user) return <p>Loading user data...</p>;

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Store image as base64
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <h2>👤 My Profile</h2>

      <div className="profile-card">
        {/* User Avatar */}
        <img
          src={profileImage || "https://via.placeholder.com/120"}
          alt="User Avatar"
          className="avatar"
        />

        {/* Upload Button */}
        <div style={{ margin: "15px 0" }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {/* User Info */}
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
        <p>Contact: {user.contact}</p>

        {/* Stats */}
        <div className="profile-stats">
          <div className="stat">
            <h4>{user.tournamentsPlayed}</h4>
            <p>Tournaments Played</p>
          </div>
          <div className="stat">
            <h4>{user.wins}</h4>
            <p>Wins</p>
          </div>
          <div className="stat">
            <h4>{user.points}</h4>
            <p>Points</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
