import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.png';

const Services = () => {
  return (
    <div className='services' id="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="decoration" className="title-pattern" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className='services-format'>
            <div className="service-number">
              <h3>{service.s_no}</h3>
            </div>
            <div className="service-content">
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="arrow" className="arrow-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;