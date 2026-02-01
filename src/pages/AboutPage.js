// src/pages/AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer, SkillsAbout, Education, WorkExperience } from '../components/Components';

import faceImage from '../images/profile.jpg';
import emailIcon from '../images/email-icon.png';
import mobileIcon from '../images/mobile-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';

export function AboutPage() {
  return (
    <div className="about-page-wrapper">
      <Navbar />

      <section className="about-page">
        <div className="about-layout">

          {/* LEFT COLUMN */}
          <div className="personal-info">
            <div className="image-container">
              <img src={faceImage} alt="Fikri" className="face-image" />
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <img src={emailIcon} alt="Email" className="contact-icon" />
                <p>mohammed.danish.fikri@gmail.com</p>
              </div>

              <div className="contact-item">
                <img src={mobileIcon} alt="Mobile" className="contact-icon" />
                <p>+65 82093990</p>
              </div>

              <div className="contact-item linkedin-container">
                <div className="linkedin-icon-wrapper">
                  <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
                </div>
                <p>
                  <a
                    href="https://www.linkedin.com/in/danish-fikri"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>

              <div className="contact-item github-container">
                <div className="github-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <p>
                  <a
                    href="https://github.com/Fikri-Danish"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="right-column">

            {/* About Section */}
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                I'm Fikri, a Digital Design & Development student who loves working with
                creativity and technology. I enjoy learning how to make designs that are fun
                and easy to use. On this site, you'll find my design ideas and projects.
                I try to keep things simple and interactive, always improving my skills to
                create better user experiences.
              </p>

              {/* Buttons Under About Me */}
              <div className="about-buttons">
                <a href="/FikriResume.pdf" download>
                  <button className="orange-btn">Download Resume</button>
                </a>

                <Link to="/projectList">
                  <button className="projects-btn">View My Projects</button>
                </Link>
              </div>
            </div>

            {/* Skills Section */}
            <div className="skills-section">
              <h3>My Skills</h3>
              <SkillsAbout />
            </div>

            {/* Education Section */}
            <div className="education-section">
              <h3>Education</h3>
              <Education />
            </div>

            {/* Work Experience Section */}
            <div className="work-experience-section">
              <h3>Work Experience</h3>
              <WorkExperience />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;
