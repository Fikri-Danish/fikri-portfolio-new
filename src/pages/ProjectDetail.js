// src/pages/ProjectDetail.js
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar, Footer } from '../components/Components';
import { projectsData } from '../data/projectsData';

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedMedia, setSelectedMedia] = useState(0);
  const thumbnailContainerRef = useRef(null);
  
  // Find the project by ID
  const project = projectsData.find(p => p.id === parseInt(id));

  // If project not found, redirect to projects page
  useEffect(() => {
    if (!project) {
      navigate('/projectList');
    }
  }, [project, navigate]);

  // Get media array (could be images, videos, or both)
  // Support both 'media' array and legacy 'images' array, fallback to single 'image'
  const mediaItems = project?.media || project?.images || (project?.image ? [{ type: 'image', src: project.image }] : []);
  
  // Normalize media items to always have type and src
  const normalizedMedia = mediaItems.map(item => {
    if (typeof item === 'string') {
      // Legacy format - just a string path
      return { type: 'image', src: item };
    }
    return item;
  });

  // Check if we have multiple media items
  const hasMultipleMedia = normalizedMedia.length > 1;

  // Scroll to selected thumbnail when changed
  useEffect(() => {
    if (thumbnailContainerRef.current && hasMultipleMedia) {
      const selectedThumb = thumbnailContainerRef.current.children[selectedMedia];
      if (selectedThumb) {
        selectedThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [selectedMedia, hasMultipleMedia]);

  // Return null while redirecting
  if (!project) {
    return null;
  }

  // Helper function to extract YouTube video ID from various URL formats
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    
    // If it's already just an ID (11 characters), return it
    if (url.length === 11 && !url.includes('/') && !url.includes('?')) {
      return url;
    }
    
    // Handle various YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/
    ];
    
    for (let pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return match[1];
      }
    }
    
    return null;
  };

  // Helper function to render media (image or YouTube video)
  const renderMedia = (mediaItem, className, isThumb = false) => {
    if (mediaItem.type === 'youtube' || mediaItem.type === 'video') {
      const videoId = getYouTubeVideoId(mediaItem.src || mediaItem.youtubeId);
      
      if (isThumb) {
        // For thumbnails, show YouTube thumbnail image
        return (
          <>
            <img 
              src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
              alt="Video thumbnail"
              className={className}
            />
            <div className="video-indicator">▶</div>
          </>
        );
      } else {
        // For main display, show embedded YouTube player
        return (
          <div className="youtube-video-container">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="youtube-iframe"
            ></iframe>
          </div>
        );
      }
    } else {
      // Regular image
      return (
        <img 
          src={mediaItem.src} 
          alt={isThumb ? `Thumbnail ${selectedMedia + 1}` : project.title} 
          className={className}
        />
      );
    }
  };

  // Helper function to render text with paragraph breaks
  const renderTextWithParagraphs = (text) => {
    if (!text) return null;
    
    // Split by \n\n to create paragraphs
    const paragraphs = text.split('\n\n').filter(p => p.trim());
    
    return paragraphs.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
  };

  return (
    <div className="project-detail-page">
      <Navbar />

      <div className="project-detail-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Projects
        </button>

        <div className="project-detail-hero">
          {/* Media Gallery Section */}
          <div className="image-gallery-section">
            {/* Main Media Display */}
            <div className="main-image-container">
              {renderMedia(normalizedMedia[selectedMedia], 'main-image')}
            </div>

            {/* Thumbnail Gallery - Only show if multiple media items */}
            {hasMultipleMedia && (
              <div className="thumbnail-scroll-wrapper">
                <div className="thumbnail-container" ref={thumbnailContainerRef}>
                  {normalizedMedia.map((mediaItem, index) => (
                    <div 
                      key={index}
                      className={`thumbnail ${selectedMedia === index ? 'active' : ''}`}
                      onClick={() => setSelectedMedia(index)}
                    >
                      {renderMedia(mediaItem, mediaItem.type === 'youtube' || mediaItem.type === 'video' ? 'thumbnail-video' : 'thumbnail-image', true)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="project-detail-header">
            <h1>{project.title}</h1>
            
            <div className="project-detail-meta">
              <span className="project-type-badge">{project.type}</span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h2>Project Overview</h2>
          {renderTextWithParagraphs(project.overview)}
          {project.description && <p>{project.description}</p>}
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
          {renderTextWithParagraphs(project.challenges)}
        </div>

        <div className="detail-section">
          <h2>Project Outcome</h2>
          {renderTextWithParagraphs(project.outcome)}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="detail-section">
            <h2>Project Links</h2>
            <div className="project-links">
              {project.links.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  {link.title}
                  <span className="link-icon">→</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default ProjectDetail;
