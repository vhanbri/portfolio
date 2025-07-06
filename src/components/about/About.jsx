import React from 'react';
import './about.css';
import AboutImg from '../../assets/VBV.jpg';
import CV from '../../assets/Villaso_VhanneBrian_Resume.pdf';
import Information from './Information';

const About = () => {
  return (
    <section className="about section" id="about">
        <div className="about__container container">
            {/* Hero Section */}
            <div className="about__hero">
                <div className="about__hero-content">
                    <span className="about__greeting">Hello, I'm Vhanne</span>
                    <h2 className="about__hero-title">
                        A passionate <span className="about__highlight">Software Engineer</span> crafting digital experiences
                    </h2>
                    <p className="about__hero-subtitle">
                        Transforming ideas into elegant, functional solutions that make a difference.
                    </p>
                </div>
                <div className="about__hero-image">
                    <div className="about__image-wrapper">
                        <img src={AboutImg} alt="Profile" className="about__img" />
                        <div className="about__image-decoration"></div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <Information />

            {/* About Content */}
            <div className="about__content">
                <div className="about__text">
                    <h3 className="about__content-title">My Story</h3>
                    <p className="about__description">
                        I'm a dedicated software engineer with expertise in modern web technologies and a passion for creating exceptional user experiences. My journey in tech began with curiosity and has evolved into a career focused on building scalable, efficient solutions.
                    </p>
                    <p className="about__description">
                        I specialize in full-stack development, UI/UX design, and performance optimization. Every project I work on is an opportunity to push boundaries and deliver results that exceed expectations. I believe in clean code, thoughtful design, and the power of collaboration.
                    </p>
                    <p className="about__description">
                        When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I'm always eager to take on new challenges and help businesses achieve their digital goals.
                    </p>
                </div>

                <div className="about__features">
                    <div className="about__feature">
                        <div className="about__feature-icon">
                            <i className="uil uil-code-branch"></i>
                        </div>
                        <h4 className="about__feature-title">Clean Code</h4>
                        <p className="about__feature-description">
                            Writing maintainable, scalable code that stands the test of time
                        </p>
                    </div>
                    <div className="about__feature">
                        <div className="about__feature-icon">
                            <i className="uil uil-palette"></i>
                        </div>
                        <h4 className="about__feature-title">Design Focused</h4>
                        <p className="about__feature-description">
                            Creating intuitive interfaces that users love to interact with
                        </p>
                    </div>
                    <div className="about__feature">
                        <div className="about__feature-icon">
                            <i className="uil uil-rocket"></i>
                        </div>
                        <h4 className="about__feature-title">Performance</h4>
                        <p className="about__feature-description">
                            Optimizing applications for speed and seamless user experience
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="about__cta">
                <div className="about__cta-content">
                    <h3 className="about__cta-title">Ready to work together?</h3>
                    <p className="about__cta-description">
                        Let's create something amazing together. Download my CV or get in touch to discuss your project.
                    </p>
                    <div className="about__cta-buttons">
                        <a download="" href={CV} className="button button--primary"> 
                            <i className="uil uil-download-alt button__icon"></i>
                            Download CV
                        </a>
                        <a href="#contact" className="button button--secondary">
                            <i className="uil uil-message button__icon"></i>
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
