import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            {/* <h1 className="footer__title">Joyce C.</h1> */}

            {/* <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul> */}

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/joycehwchan/" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="uil uil-linkedin-alt"></i>
                </a>

                <a href="https://github.com/joycehwchan" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="uil uil-github-alt"></i>
                </a>

                <a href="https://www.instagram.com/joycehwchan/" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="uil uil-instagram"></i>
                </a>
            </div>

            <span className="footer__copy">
                &copy; joycehwchan
            </span>
        </div>
    </footer>
  )
}

export default Footer