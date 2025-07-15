import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import about from '../../assets/about.PNG';

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={about} alt="Profile" className="image-two" />
        </div>

        <div className="about-right">
          <div className="about-content">
            <div className="about-para">
              <p>I'm an enthusiastic computer science undergraduate at SLIIT with a passion for frontend development.</p>
              <p>I enjoy creating responsive, user-friendly web interfaces using modern technologies like React and JavaScript.</p>
            </div>
</div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "65%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "45%" }} />
              </div>
              <div className="about-skill">
                <p>Next JS</p>
                <hr style={{ width: "60%" }} />
              </div>
            </div>
          </div>
    
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years of Experience</p>
          <hr />
        </div>
        <div className="divider" />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
          <hr />
        </div>
        <div className="divider" />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default About;