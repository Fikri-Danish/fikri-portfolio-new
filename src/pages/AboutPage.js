// src/pages/AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer, SkillsAbout, Education, WorkExperience } from '../components/Components';

import faceImage from '../images/profile.jpg';
import emailIcon from '../images/email-icon.png';
import mobileIcon from '../images/mobile-icon.png';
import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github-icon.png';

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
                  <img src={githubIcon} alt="GitHub" className="contact-icon" />
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
