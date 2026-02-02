// src/components/Components.js
// ==============================================
// ALL COMPONENTS IN ONE FILE
// ==============================================

import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Import all images
import logo from '../images/logo.png';
import heroImage from '../images/profile.jpg';
import mobileSkill from '../images/mobile.png';
import webSkill from '../images/monitor.png';
import designSkill from '../images/design.png';
import emailIcon from '../images/email-icon.png';
import phoneIcon from '../images/mobile-icon.png';
import studentIcon from '../images/student-icon.png';
import workIcon from '../images/work-icon.png';
import certificateIcon from '../images/certificate-icon.png';

// Import project data from separate file
import { projectsData } from '../data/projectsData';

// Export it so other components can import from Components.js
export { projectsData };

// ==============================================
// SCROLL ANIMATION HOOK
// ==============================================

function useScrollAnimation() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return [elementRef, isVisible];
}

// ==============================================
// PROJECT MODAL COMPONENT
// ==============================================

export function ProjectModal({ project, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleViewDetails = () => {
    navigate(`/project/${project.id}`);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="project-modal-overlay" onClick={handleOverlayClick}>
      <div className="project-modal">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
        
        <div className="modal-layout">
          <div className="modal-image-container">
            <img src={project.image} alt={project.title} className="modal-image" />
          </div>
          
          <div className="modal-content">
            <h2>{project.title}</h2>
            <span className="project-type-badge">{project.type}</span>

            <div className="modal-section">
              <h3>Overview</h3>
              <p>{project.overview}</p>
            </div>

            <div className="modal-section">
              <h3>Technologies Used</h3>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-section">
              <h3>Key Features</h3>
              {project.features.slice(0, 3).map((feature, index) => (
                <p key={index}>• {feature}</p>
              ))}
            </div>

            <div className="modal-actions">
              <button className="view-details-btn" onClick={handleViewDetails}>
                View Full Details
              </button>
              <button className="close-modal-btn" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==============================================
// NAVBAR COMPONENT
// ==============================================

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="brand-name">Fikri</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projectList">Projects</Link></li>
        <li><Link to="/aboutPage">About Me</Link></li>
      </ul>

      <Link to="/contact">
        <button className="contact-btn">Contact Me</button>
      </Link>
    </nav>
  );
}

// ==============================================
// HERO COMPONENT
// ==============================================

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Mohammed Danish Fikri <br />Bin Mohammed Ridzuan</h1>
        <p>Blending design and code to craft intuitive digital products.</p>
        <div className="button-container">
          <Link to="/projectList">
            <button className="projects-button">View My Projects</button>
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Mohammed Danish Fikri" />
      </div>
    </section>
  );
}

// ==============================================
// SKILLS COMPONENT (Must be before About)
// ==============================================

export function Skills() {
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();

  const skills = [
    {
      icon: mobileSkill,
      title: 'Mobile App Developer',
      description: 'Basic knowledge of creating mobile applications.',
      ref: ref1,
      isVisible: isVisible1
    },
    {
      icon: webSkill,
      title: 'Web App Developer',
      description: 'Basic understanding of web development.',
      ref: ref2,
      isVisible: isVisible2
    },
    {
      icon: designSkill,
      title: 'Digital Designer',
      description: 'Basic skills in UI/UX design and digital visuals.',
      ref: ref3,
      isVisible: isVisible3
    }
  ];

  return (
    <div className="skills">
      {skills.map((skill, index) => (
        <div 
          className={`skill-card fade-in ${skill.isVisible ? 'visible' : ''}`}
          key={index}
          ref={skill.ref}
        >
          <div className="skill-icon-container">
            <img src={skill.icon} alt={`${skill.title} Icon`} className="skill-icon" />
          </div>
          <div className="skill-text">
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ==============================================
// SKILLS ABOUT COMPONENT (About Page)
// ==============================================

export function SkillsAbout() {
  const skills = [
    'Database Management (SQL)',
    'Photoshop: Digital Imaging/Editing',
    'Canva: Graphic & Layout Design',
    'Python Basic: Programming',
    'JavaScript: Web Programming',
    'HTML: Web Development',
    'User Acceptance Testing'
  ];

  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div className="skill-box" key={index}>{skill}</div>
      ))}
    </div>
  );
}

// ==============================================
// ABOUT COMPONENT (Home Page)
// ==============================================

export function About() {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [textRef, textVisible] = useScrollAnimation();

  return (
    <section id="about">
      <div className={`featured-title fade-in ${titleVisible ? 'visible' : ''}`} ref={titleRef}>
        <h2>ABOUT ME</h2>
      </div>
      <div className={`projects-title fade-in ${titleVisible ? 'visible' : ''}`}>
        <h3>A Student with a Mission</h3>
      </div>
      <p className={`fade-in ${textVisible ? 'visible' : ''}`} ref={textRef}>
        I'm Fikri! A second-year Digital Design and Development student skilled
        in Photoshop, Illustrator, and web design. Experienced in Python,
        JavaScript, HTML, CSS, and SQL, seeking to apply technical and creative
        skills in a dynamic environment.
      </p>
      
      <Skills />
    </section>
  );
}

// ==============================================
// PROJECT CARD COMPONENT (Must be before Projects)
// ==============================================

export function ProjectCard({ title, description, image, project }) {
  const [ref, isVisible] = useScrollAnimation();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div 
        className={`project-card scale-in ${isVisible ? 'visible' : ''}`}
        ref={ref}
        onClick={handleClick}
      >
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      
      {showModal && (
        <ProjectModal 
          project={project} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
}

// ==============================================
// PROJECT ITEM COMPONENT
// ==============================================

export function ProjectItem({ title, description, image, project }) {
  const [ref, isVisible] = useScrollAnimation();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div 
        className={`project-item scale-in ${isVisible ? 'visible' : ''}`}
        ref={ref}
        onClick={handleClick}
      >
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
        <div className="project-info">
          <div className="project-type-badge">{project.type}</div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      {showModal && (
        <ProjectModal 
          project={project} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
}

// ==============================================
// PROJECTS COMPONENT
// ==============================================

export function Projects() {
  const [titleRef, titleVisible] = useScrollAnimation();

  // Show only first 3 projects for homepage
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="projects">
      <div className={`featured-title fade-in ${titleVisible ? 'visible' : ''}`} ref={titleRef}>
        <h2>FEATURED PROJECTS</h2>
      </div>

      <div className={`projects-title fade-in ${titleVisible ? 'visible' : ''}`}>
        <h3>Some of my favourite work</h3>
      </div>

      <div className="project-container">
        {featuredProjects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            project={project}
          />
        ))}
      </div>

      <div className="button-container">
        <Link to="/projectList">
          <button className="projects-button">View My Projects</button>
        </Link>
      </div>
    </div>
  );
}

// ==============================================
// EDUCATION COMPONENT
// ==============================================

export function Education() {
  const education = [
    {
      degree: 'Diploma in Digital Design and Development',
      institution: 'Republic Polytechnic',
      year: '2024 – Present'
    },
    {
      degree: 'Higher NITEC in IT Application Development',
      institution: 'ITE College West',
      year: '2022 – 2024'
    },
    {
      degree: 'NITEC in Infocomm Technology',
      institution: 'ITE College West',
      year: '2020 – 2021'
    }
  ];

  return (
    <div className="timeline">
      {education.map((edu, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-icon">
            <img src={studentIcon} alt="Education icon" />
          </div>

          <div className="timeline-content">
            <h4>{edu.degree}</h4>
            <p>{edu.institution}</p>
          </div>

          <div className="timeline-year">{edu.year}</div>
        </div>
      ))}
    </div>
  );
}

// ==============================================
// WORK EXPERIENCE COMPONENT
// ==============================================

export function WorkExperience() {
  const experience = [
    {
      title: 'Caregiver (Freelance)',
      company: 'Homage',
      year: 'Sep 2024 – Nov 2024',
      responsibilities: [
        'Provided care and companionship to elderly and disabled clients, improving comfort and well-being.',
        'Assisted clients with daily activities such as hygiene, mobility, and medication reminders.',
        'Communicated with families and healthcare professionals to ensure consistent care updates.'
      ]
    },
    {
      title: 'Technical Assistance (Intern)',
      company: 'Octopus 8',
      year: 'Apr 2023 – Sep 2023',
      responsibilities: [
        'Supported development and maintenance of a client-facing website using CiviCRM, ensuring smooth system performance.',
        'Assisted with User Acceptance Testing and resolved system issues before client delivery.',
        'Managed and cleaned client data in Excel, reducing errors and duplicates prior to import.'
      ]
    },
    {
      title: 'Desktop Assistance (Intern)',
      company: 'National Research Foundation',
      year: 'Jan 2021 – Jun 2021',
      responsibilities: [
        'Provided technical support for hardware, software, and network issues, reducing downtime.',
        'Supported IT team in managing software updates, asset inventory, and documentation.',
        'Assisted in the setup, configuration, and maintenance of workstation and devices.'
      ]
    }
  ];

  return (
    <div className="timeline">
      {experience.map((job, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-icon">
            <img src={workIcon} alt="Work icon" />
          </div>

          <div className="timeline-content">
            <h4>{job.title}</h4>
            <p><b>{job.company}</b></p>
            <ul>
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>

          <div className="timeline-year">{job.year}</div>
        </div>
      ))}
    </div>
  );
}

// ==============================================
// CERTIFICATIONS COMPONENT
// ==============================================

export function Certifications() {
  const certifications = [
      {
      title: "EDUSAVE MERIT BURSARY 2025",
      institution: 'Ministry of Education',
      year: '2025',
      description: 'For achieving good academic performance and demonstrating good conduct',
    },
    {
      title: "DIRECTOR'S LIST",
      institution: 'Institute of Tech. Education',
      year: '2023',
      description: 'Meritorious academic performance',
      academicYear: 'Academic Year 2022/2023'
    },
  ];

  return (
    <div className="timeline">
      {certifications.map((cert, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-icon">
            <img src={certificateIcon} alt="Certificate icon" />
          </div>

          <div className="timeline-content">
            <h4>{cert.title}</h4>
            <p><b>{cert.institution}</b></p>
            <p>{cert.description}</p>
            {cert.academicYear && <p className="academic-year">{cert.academicYear}</p>}
          </div>

          <div className="timeline-year">{cert.year}</div>
        </div>
      ))}
    </div>
  );
}

// ==============================================
// CONTACT COMPONENT
// ==============================================

export function Contact() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className={`contact fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="featured-title">
        <h2>GET IN TOUCH</h2>
      </div>
      <div className="contact-title">
        <h3>Let's build something amazing together</h3>
      </div>
      <p>Feel free to reach out.</p>
      <div className="contact-info">
        <div className="contact-item email">
          <img src={emailIcon} alt="Email Icon" className="contact-icon" />
          <p>mohammed.danish.fikri@gmail.com</p>
        </div>
        <div className="contact-item phone">
          <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
          <p>+65 82093990</p>
        </div>
      </div>
      <Link to="/contact">
        <button>Contact Us</button>
      </Link>
    </section>
  );
}

// ==============================================
// FOOTER COMPONENT
// ==============================================

export function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Mohammed Danish Fikri. All Rights Reserved.</p>
      <div className="social-links">
        <a href="mailto:mohammed.danish.fikri@gmail.com">Email</a>
        <a href="tel:+6582093990">Call</a>
        <a href="https://linkedin.com/in/danish-fikri" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
