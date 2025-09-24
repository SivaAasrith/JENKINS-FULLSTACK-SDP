import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>About GamePortal</h1>
          <p>Your gateway to the world of competitive gaming and esports.</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            GamePortal is a premier online platform dedicated to bringing gamers
            together from all over the globe. We host exciting tournaments that
            cater to players of all skill levels, from casual gamers to esports
            professionals.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To build a thriving community where passion for gaming meets
            competition, innovation, and camaraderie. We aim to empower gamers
            to showcase their skills and achieve greatness.
          </p>
        </div>

        <div className="about-section">
          <h2>Join the Revolution</h2>
          <p>
            Ready to elevate your gaming experience? Join GamePortal tournaments,
            connect with like-minded players, and step into the spotlight.
            Together, we redefine competitive gaming.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
