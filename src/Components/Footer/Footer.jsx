"use client"

import { useState, useEffect, useRef } from "react"
import "./Footer.css"
import { Linkedin, Github, Twitter, ChevronUp } from "lucide-react" // Using Lucide React icons

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of the component is visible
    )

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true)
      } else {
        setShowScrollToTop(false)
      }
    }

    if (footerRef.current) observer.observe(footerRef.current)
    window.addEventListener("scroll", handleScroll)

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="footer" ref={footerRef}>
      {/* Background elements */}
      <div className="footer-background">
        <div className="floating-orb orb-footer-1"></div>
        <div className="floating-orb orb-footer-2"></div>
        <div className="shooting-star shooting-star-footer"></div>
      </div>

      <div className={`footer-content ${isVisible ? "animate-in" : ""}`}>
        {/* Top Section: Logo, Description, Socials */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-container">
              <div className="footer-logo-glow"></div>
              <div className="footer-logo">
                <span className="footer-logo-text">P</span>
              </div>
            </div>
            <p className="footer-description">
              Crafting digital experiences with passion and precision. Let's build something amazing together.
            </p>
          </div>

          <div className="footer-socials">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-wrapper"
            >
              <Linkedin size={24} className="social-icon" />
              <div className="social-icon-glow"></div>
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-wrapper"
            >
              <Github size={24} className="social-icon" />
              <div className="social-icon-glow"></div>
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-wrapper"
            >
              <Twitter size={24} className="social-icon" />
              <div className="social-icon-glow"></div>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section: Navigation & Copyright */}
        <div className="footer-bottom">
          <ul className="footer-nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer-nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Vidath Theekshana. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className={`scroll-to-top ${showScrollToTop ? "show" : ""}`} onClick={scrollToTop}>
        <ChevronUp size={28} />
        <div className="scroll-to-top-glow"></div>
      </button>
    </footer>
  )
}

export default Footer
