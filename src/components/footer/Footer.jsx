import React from 'react'
import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          <div className="footer__social">
            <a 
              href="https://www.linkedin.com/in/vhanne-brian-villaso-213690231" 
              className="footer__social-link" 
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>

            <a 
              href="https://github.com/vhannbii" 
              className="footer__social-link" 
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="uil uil-github-alt"></i>
            </a>

            <a 
              href="https://www.facebook.com/vhanbri" 
              className="footer__social-link" 
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="uil uil-facebook-f"></i>
            </a>

            <a 
              href="mailto:vhanne.villaso@email.com" 
              className="footer__social-link" 
              aria-label="Email"
            >
              <i className="uil uil-envelope-alt"></i>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {currentYear} Vhanne Brian Villaso. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
