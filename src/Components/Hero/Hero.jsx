import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile.JPG';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1>
        <span>I'm Vidath Theekshana,</span> 
        frontend developer based in Sri Lanka.</h1>
      <p>I am an undergraduate at SLIIT, currently pursuing a degree in Computer Science.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;