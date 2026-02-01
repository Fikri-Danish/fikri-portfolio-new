// src/pages/ProjectDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar, Footer, projectsData } from '../components/Components';

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  
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

  const media = project.media || [{ type: 'image', src: project.image, alt: project.title }];
  const selectedMedia = media[selectedMediaIndex];

  const handleThumbnailClick = (index) => {
    setSelectedMediaIndex(index);
  };

  const handlePrevious = () => {
    setSelectedMediaIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedMediaIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-detail-page">
      <Navbar />

      <div className="project-detail-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Projects
        </button>

        <div className="project-detail-hero">
          {/* Main Media Display */}
          <div className="media-gallery-container">
            <div className="main-media-wrapper">
              {selectedMedia.type === 'image' ? (
                <img 
                  src={selectedMedia.src} 
                  alt={selectedMedia.alt || project.title}
                  className="project-detail-image"
                />
              ) : (
                <div className="video-wrapper">
                  <iframe
                    src={selectedMedia.src}
                    title={selectedMedia.alt || 'Project Video'}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="project-detail-video"
                  />
                </div>
              )}

              {/* Navigation Arrows - Only show if more than 1 media item */}
              {media.length > 1 && (
                <>
                  <button 
                    className="media-nav-arrow media-nav-left" 
                    onClick={handlePrevious}
                    aria-label="Previous media"
                  >
                    ‹
                  </button>
                  <button 
                    className="media-nav-arrow media-nav-right" 
                    onClick={handleNext}
                    aria-label="Next media"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery - Only show if more than 1 media item */}
            {media.length > 1 && (
              <div className="thumbnail-gallery">
                {media.map((item, index) => (
                  <div
                    key={index}
                    className={`thumbnail-item ${index === selectedMediaIndex ? 'active' : ''}`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    {item.type === 'image' ? (
                      <img 
                        src={item.src} 
                        alt={item.alt || `Thumbnail ${index + 1}`}
                      />
                    ) : (
                      <div className="video-thumbnail">
                        <span className="play-icon">▶</span>
                        <span className="video-label">Video</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="project-detail-header">
            <h1>{project.title}</h1>
            
            <div className="project-detail-meta">
              <span className="project-type-tag">{project.type}</span>
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
