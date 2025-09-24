// src/Tournament.js
import React, { useState } from "react";
import "./Tournament.css";

const sampleTournaments = [
  { id: 1, name: "Battle Royale Showdown", description: "Join the ultimate Battle Royale challenge and win amazing prizes!", image: "https://picsum.photos/seed/battle/600/400" },
  { id: 2, name: "FPS Frenzy", description: "Compete with top shooters in fast-paced FPS tournaments.", image: "https://picsum.photos/seed/fps/600/400" },
  { id: 3, name: "MOBA Masters", description: "Show your skills in MOBAs and climb the leaderboard.", image: "https://picsum.photos/seed/moba/600/400" },
  { id: 4, name: "Racing Rivals", description: "High-speed racing tournaments with thrilling rewards.", image: "https://picsum.photos/seed/racing/600/400" },
  { id: 5, name: "Fighting Legends", description: "Show off your combat skills in epic fighting tournaments.", image: "https://picsum.photos/seed/fighting/600/400" },
  { id: 6, name: "Strategy Conquest", description: "Lead your team to victory in strategy and tactics tournaments.", image: "https://picsum.photos/seed/strategy/600/400" },
  { id: 7, name: "Arcade Clash", description: "Retro arcade action with modern competition flair.", image: "https://picsum.photos/seed/arcade/600/400" },
  { id: 8, name: "Sports Mania", description: "From soccer to basketball, prove your sports gaming skills!", image: "https://picsum.photos/seed/sports/600/400" },
  { id: 9, name: "Battle of Guilds", description: "Guild vs. Guild competition for ultimate supremacy.", image: "https://picsum.photos/seed/guild/600/400" },
  { id: 10, name: "Survival Arena", description: "Outlast your opponents in intense survival matches.", image: "https://picsum.photos/seed/survival/600/400" },
  { id: 11, name: "Card Duel Masters", description: "Prove your strategy in competitive card dueling games.", image: "https://picsum.photos/seed/card/600/400" },
  { id: 12, name: "Puzzle Showdown", description: "Solve puzzles under pressure and beat the clock!", image: "https://picsum.photos/seed/puzzle/600/400" },
];

function Tournament() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const filteredTournaments = sampleTournaments.filter((tournament) =>
    tournament.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (tournament) => setSelectedTournament(tournament);
  const closeModal = () => setSelectedTournament(null);

  const handleJoin = () => {
    setSelectedTournament(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="tournament-container">
      <h1>🎮 Tournaments</h1>

      {/* Search */}
      <div className="tournament-filters">
        <input
          type="text"
          placeholder="Search tournaments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tournament List */}
      <div className="tournament-list">
        {filteredTournaments.length > 0 ? (
          filteredTournaments.map((tournament) => (
            <div className="tournament-card" key={tournament.id}>
              <img src={tournament.image} alt={tournament.name} />
              <h3>{tournament.name}</h3>
              <p>{tournament.description}</p>
              <button onClick={() => openModal(tournament)}>Join</button>
            </div>
          ))
        ) : (
          <p style={{ color: "#ff77aa", textAlign: "center", width: "100%" }}>
            No tournaments found!
          </p>
        )}
      </div>

      {/* Modal */}
      {selectedTournament && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{selectedTournament.name}</h2>
            <p>{selectedTournament.description}</p>
            <div className="modal-buttons">
              <button className="btn-primary" onClick={handleJoin}>
                Confirm Join
              </button>
              <button className="btn-secondary" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="success-message">✅ Successfully Joined Tournament!</div>
      )}
    </div>
  );
}

export default Tournament;
