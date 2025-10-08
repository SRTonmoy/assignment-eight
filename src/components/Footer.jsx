import React from 'react'
import logo from '../assets/logo.png'
import { Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-section">
          <div className="footer-brand">
            <img src={logo} alt="HERO.IO Logo" className="footer-logo" />
            <div className="brand-text">
              <div className="brand-name">HERO.IO</div>
              <div className="brand-tagline">Building Tomorrow's Productivity Tools</div>
            </div>
          </div>
          <p className="footer-description">
            We create innovative apps designed to enhance productivity, focus, and personal growth. 
            Join millions of users who trust our applications.
          </p>
          <div className="footer-social">
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hello@hero.io" className="social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/apps">All Apps</a></li>
            <li><a href="/installation">My Installation</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3 className="footer-heading">App Categories</h3>
          <ul className="footer-links">
            <li><a href="/apps?category=productivity">Productivity</a></li>
            <li><a href="/apps?category=focus">Focus & Study</a></li>
            <li><a href="/apps?category=habits">Habit Tracking</a></li>
            <li><a href="/apps?category=meditation">Meditation</a></li>
            <li><a href="/apps?category=planning">Planning</a></li>
          </ul>
        </div>

        {/* Contact & Support */}
        <div className="footer-section">
          <h3 className="footer-heading">Support</h3>
          <ul className="footer-links">
            <li><a href="/help">Help Center</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/feedback">Feedback</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3 className="footer-heading">Stay Updated</h3>
          <p className="newsletter-text">Get the latest app updates and news</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button className="newsletter-btn">
              <Mail size={16} />
            </button>
          </div>
          <div className="app-stores">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="store-link">
              <img src="/assets/Google-play.png" alt="Google Play" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="store-link">
              <img src="/assets/Apple-store.png" alt="App Store" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            © 2025 HERO.IO. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy</a>
            <span className="separator">•</span>
            <a href="/terms">Terms</a>
            <span className="separator">•</span>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}