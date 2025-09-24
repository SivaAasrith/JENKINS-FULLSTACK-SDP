// src/Home.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import pubg from "./assets/images/pubg.jpeg";
import freefire from "./assets/images/freefire.jpeg";
import cod from "./assets/images/cod.jpeg";
import valorant from "./assets/images/valorant.jpeg";
import apex from "./assets/images/apex.jpeg";
import fortnite from "./assets/images/fortnite.jpeg";

function Home({ user }) {
  const navigate = useNavigate(); // For programmatic navigation

  const [selectedTournament, setSelectedTournament] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [newsletterMsg, setNewsletterMsg] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventSuccess, setShowEventSuccess] = useState(false);

  const tournaments = [
    { id: 1, name: "PUBG Mobile Showdown", description: "Squad battle – Winner takes all!", image: pubg },
    { id: 2, name: "Free Fire Clash", description: "Fast-paced survival tournament.", image: freefire },
    { id: 3, name: "COD Mobile Warfare", description: "Dominate the battlefield in COD style.", image: cod },
    { id: 4, name: "Valorant Masters", description: "Tactical shooters, bring your A-game.", image: valorant },
    { id: 5, name: "Apex Legends Arena", description: "Legends collide in this ultimate showdown.", image: apex },
    { id: 6, name: "Fortnite Frenzy", description: "Build, fight, and survive to victory.", image: fortnite },
  ];

  const upcomingEvents = [
    { id: 1, name: "PUBG Showdown", date: "Oct 5, 2025", description: "Intense squad battles await!" },
    { id: 2, name: "Valorant Clash", date: "Oct 12, 2025", description: "Tactical shooter tournament." },
    { id: 3, name: "Fortnite Frenzy", date: "Oct 20, 2025", description: "Build, fight, and survive!" },
    { id: 4, name: "COD Mobile Warfare", date: "Oct 25, 2025", description: "Dominate the battlefield." },
    { id: 5, name: "Apex Legends Arena", date: "Nov 2, 2025", description: "Legends collide for glory." },
    { id: 6, name: "Free Fire Clash", date: "Nov 10, 2025", description: "Fast-paced survival action." },
  ];

  const openModal = (tournament) => setSelectedTournament(tournament);
  const closeModal = () => setSelectedTournament(null);

  const handleRegister = () => {
    closeModal();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleEventRegister = (event) => {
    setSelectedEvent(event);
    setShowEventSuccess(true);
    setTimeout(() => setShowEventSuccess(false), 3000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setNewsletterMsg("✅ Subscribed successfully!");
      setEmail("");
      setTimeout(() => setNewsletterMsg(""), 3000);
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Welcome to GamePortal</h1>
          <p>Compete. Conquer. Celebrate.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate("/tournament")}>
              Join a Tournament
            </button>
            <button className="btn-secondary" onClick={() => navigate("/about")}>
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-card">
            <h2>500+</h2>
            <p>Active Players</p>
          </div>
          <div className="stat-card">
            <h2>50+</h2>
            <p>Ongoing Tournaments</p>
          </div>
          <div className="stat-card">
            <h2>1M+</h2>
            <p>Matches Played</p>
          </div>
        </div>
      </section>

      {/* Featured Tournaments */}
      <section className="tournaments">
        <h2>🔥 Featured Tournaments</h2>
        <div className="tournament-grid">
          {tournaments.map((tournament) => (
            <div key={tournament.id} className="tournament-card">
              <img src={tournament.image} alt={tournament.name} />
              <h3>{tournament.name}</h3>
              <p>{tournament.description}</p>
              <button onClick={() => openModal(tournament)}>Register</button>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events">
        <h2>🎮 Upcoming Events</h2>
        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.name}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p>{event.description}</p>
              <button className="btn-primary" onClick={() => handleEventRegister(event)}>
                Register
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Leaderboard */}
      <section className="leaderboard">
        <h2>🏆 Top Players</h2>
        <ul className="leaderboard-list">
          <li className="gold">1. ShadowSlayer – 980 pts</li>
          <li className="silver">2. QuickShot – 920 pts</li>
          <li className="bronze">3. VenomX – 870 pts</li>
          <li>4. NovaStar – 820 pts</li>
          <li>5. GhostHunter – 790 pts</li>
        </ul>
      </section>

      {/* Reviews, Partners & Newsletter */}
      <section className="reviews-partners">
        <h2>💬 Player Reviews</h2>
        <div className="reviews">
          <div className="review-card">
            <p>"GamePortal tournaments are so well organized! Loved the experience."</p>
            <span>- GamerPro99</span>
          </div>
          <div className="review-card">
            <p>"The competition was intense and the rewards were worth it!"</p>
            <span>- QuickScope</span>
          </div>
          <div className="review-card">
            <p>"I made new friends and improved my skills while playing."</p>
            <span>- PixelMaster</span>
          </div>
        </div>

        <h2>🤝 Our Partners</h2>
        <div className="partners">
          <div className="partner-card">🎧 <span>HyperX</span></div>
          <div className="partner-card">💻 <span>ASUS ROG</span></div>
          <div className="partner-card">🎮 <span>SteelSeries</span></div>
        </div>

        <h2>📧 Stay Updated</h2>
        <p>Subscribe to get the latest tournament updates and news.</p>
        <form className="newsletter" onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {newsletterMsg && <div className="success-message">{newsletterMsg}</div>}
      </section>

      {/* Modal for Tournament */}
      {selectedTournament && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{selectedTournament.name}</h2>
            <p>{selectedTournament.description}</p>
            <div className="modal-buttons">
              <button className="btn-primary" onClick={handleRegister}>
                Register Now
              </button>
              <button className="btn-secondary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Event Success */}
      {showEventSuccess && selectedEvent && (
        <div className="success-message">
          ✅ Successfully registered for "{selectedEvent.name}"!
        </div>
      )}

      {/* Registration Success */}
      {showSuccess && (
        <div className="success-message">✅ Registration Successfully Completed!</div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 GamePortal. All Rights Reserved.</p>
        <div className="socials">
          <a href="https://discord.gg/yourserver" target="_blank" rel="noopener noreferrer">Discord</a> |{" "}
          <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">YouTube</a> |{" "}
          <a href="https://twitch.tv/yourchannel" target="_blank" rel="noopener noreferrer">Twitch</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
