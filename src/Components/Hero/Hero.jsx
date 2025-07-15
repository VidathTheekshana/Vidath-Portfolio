import React, { useState, useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile.JPG';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      {/* Floating particles around profile */}
      <div className="hero-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>

      {/* Interactive glow effect */}
      <div 
        className="hero-glow" 
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(74, 144, 226, 0.1) 0%, transparent 50%)`
        }}
      ></div>

      {/* Profile Image with enhanced effects */}
      <div className="profile-container">
        <div className="profile-ring ring-1"></div>
        <div className="profile-ring ring-2"></div>
        <div className="profile-ring ring-3"></div>
        <div className="profile-glow"></div>
        <img src={profile_img || "/placeholder.svg"} alt="Profile" className="profile-image" />
        <div className="profile-stars">
          <div className="profile-star star-1">✦</div>
          <div className="profile-star star-2">✧</div>
          <div className="profile-star star-3">✦</div>
          <div className="profile-star star-4">✧</div>
        </div>
      </div>

      {/* Enhanced Typography */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">
            <span className="word-highlight">I'm</span>
            <span className="name-highlight">Vidath Theekshana,</span>
          </span>
          <span className="title-line">
            <span className="role-text">frontend developer</span>
            <span className="location-text">based in Sri Lanka.</span>
          </span>
        </h1>

        <p className="hero-description">
          I am an undergraduate at 
          <span className="university-highlight"> SLIIT</span>, currently pursuing a degree in 
          <span className="degree-highlight"> Computer Science</span>.
        </p>

        {/* Enhanced Action Buttons */}
        <div className="hero-action">
          <button className="hero-connect">
            <span className="button-text">Connect With Me</span>
            <div className="button-glow"></div>
            <div className="button-particles">
              <span className="btn-particle"></span>
              <span className="btn-particle"></span>
              <span className="btn-particle"></span>
            </div>
          </button>
          
          <button className="hero-resume">
            <span className="button-text">My Resume</span>
            <div className="button-border"></div>
            <div className="button-shine"></div>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>Scroll to explore</p>
      </div>
    </div>
  );
};

export default Hero;
