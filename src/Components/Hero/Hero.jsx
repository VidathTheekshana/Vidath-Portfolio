import React, { useState, useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile.JPG';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='hero'>
      {/* Particle Glow Background */}
      <div className="hero-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      <div
        className="hero-glow"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(74, 144, 226, 0.15) 0%, transparent 50%)`
        }}
      ></div>

      {/* Profile Presentation */}
      <div className="profile-container">
        {[1, 2, 3].map(i => <div key={i} className={`profile-ring ring-${i}`}></div>)}
        <div className="profile-glow"></div>
        <img src={profile_img || "/placeholder.svg"} alt="Profile" className="profile-image" />
        <div className="profile-stars">
          {['✦', '✧', '✦', '✧'].map((star, i) => (
            <div key={i} className={`profile-star star-${i + 1}`}>{star}</div>
          ))}
        </div>
      </div>

      {/* Hero Text Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">
            <span className="word-highlight">Hey! I'm</span>
            <span className="name-highlight"> Vidath Theekshana</span>
          </span>
          <span className="title-line">
            <span className="role-text">Software Developer</span>
            <span className="location-text"> love for clean code and UX</span>
          </span>
        </h1>

        <p className="hero-description">
          Currently an undergraduate at
          <span className="university-highlight"> SLIIT</span>, passionate about building
          <span className="degree-highlight"> immersive digital experiences</span>.
        </p>

        {/* Buttons */}
        <div className="hero-action">
          <button className="hero-connect">
            <span className="button-text">Connect With Me</span>
            <div className="button-glow"></div>
            <div className="button-particles">
              {[...Array(3)].map((_, i) => <span key={i} className="btn-particle"></span>)}
            </div>
          </button>

          <button className="hero-resume">
            <span className="button-text">Download CV</span>
            <div className="button-border"></div>
            <div className="button-shine"></div>
          </button>
        </div>
      </div>

      {/* Scroll Prompt */}
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          {[...Array(3)].map((_, i) => <span key={i}></span>)}
        </div>
        <p>Scroll to explore more</p>
      </div>
    </div>
  );
};

export default Hero;