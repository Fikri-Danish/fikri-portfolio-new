// src/pages/ProjectDetail.js
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar, Footer, projectsData } from '../components/Components';

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the project by ID
  const project = projectsData.find(p => p.id === parseInt(id));

  // If project not found, redirect to projects page
  useEffect(() => {
    if (!project) {
      navigate('/projectList');
    }
  }, [project, navigate]);

  // Return null while redirecting
  if (!project) {
    return null;
  }

  return (
    <div className="project-detail-page">
      <Navbar />

      <div className="project-detail-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Projects
        </button>

        <div className="project-detail-hero">
          <img 
            src={project.image} 
            alt={project.title} 
            className="project-detail-image"
          />
          
          <div className="project-detail-header">
            <h1>{project.title}</h1>
            
            <div className="project-detail-meta">
              <div className="meta-item">
                <span>📁</span>
                <span>{project.type}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h2>Project Overview</h2>
          <p>{project.overview}</p>
          <p>{project.description}</p>
        </div>

        <div className="detail-section">
          <h2>Technologies Used</h2>
          <div className="tech-stack-detail">
            {project.technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <h2>Key Features</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h2>Challenges & Solutions</h2>
          <p>{project.challenges}</p>
        </div>

        <div className="detail-section">
          <h2>Project Outcome</h2>
          <p>{project.outcome}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProjectDetail;
