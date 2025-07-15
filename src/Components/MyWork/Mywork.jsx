"use client"

import { useState, useEffect, useRef } from "react"
import "./MyWork.css"
import mywork_data from "../data/mywork_data" // Using the new data file
import { ExternalLink } from "lucide-react" // Using Lucide React for external link icon

// Simple SVG for arrow icon (reused from Services.jsx)
const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
)

const MyWork = () => {
  const [isVisible, setIsVisible] = useState(false)
  const workRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }, // Trigger when 20% of the component is visible
    )

    if (workRef.current) observer.observe(workRef.current)

    return () => {
      if (workRef.current) observer.unobserve(workRef.current)
    }
  }, [])

  return (
    <div className="mywork" id="portfolio" ref={workRef}>
      {/* Floating background elements */}
      <div className="mywork-background">
        <div className="floating-orb orb-work-1"></div>
        <div className="floating-orb orb-work-2"></div>
        <div className="constellation-work"></div>
      </div>

      {/* Title Section */}
      <div className={`mywork-title ${isVisible ? "animate-in" : ""}`}>
        <div className="title-container">
          <h1 className="section-title">
            <span className="title-word">My latest</span>
            <span className="title-word highlight">Work</span>
          </h1>
          <div className="title-decoration">
            <div className="star-decoration">✦</div>
            <div className="line-decoration"></div>
            <div className="star-decoration">✧</div>
          </div>
        </div>
      </div>

      {/* Work Container */}
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <a
            key={index}
            href={work.w_link}
            target="_blank"
            rel="noopener noreferrer"
            className={`work-card ${isVisible ? "animate-in" : ""}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-inner">
              <div className="card-image-wrapper">
                <img src={work.w_img || "/placeholder.svg"} alt={work.w_name} className="card-image" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3 className="project-title">{work.w_name}</h3>
                    <p className="project-description">{work.w_desc}</p>
                    <div className="project-category">{work.category}</div>
                    <button className="view-project-button">
                      View Project <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-glow"></div>
              <div className="card-border-effect"></div>
            </div>
          </a>
        ))}
      </div>

      {/* Show More Button */}
      <div className={`mywork-showmore ${isVisible ? "animate-in" : ""}`}>
        <p>Show More</p>
        <ArrowIcon />
        <div className="showmore-glow"></div>
      </div>
    </div>
  )
}

export default MyWork
