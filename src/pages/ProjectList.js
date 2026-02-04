// src/pages/ProjectList.js
import React, { useState } from 'react';
import { Navbar, Footer, ProjectItem, projectsData } from '../components/Components';

export function ProjectList() {
  const [filter, setFilter] = useState('All');

  // Filter the projects based on the selected category
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.type === filter);

  return (
    <div className="project-list-page">
      <Navbar />

      <section className="project-list">
        <div className="featured-title">
          <h2>MY PROJECTS</h2>
        </div>

        <div className="projects-title">
          <h3>A collection of my projects, showcasing my skills in design and development.</h3>
        </div>

        <div className="project-filters">
          <button 
            className={filter === 'All' ? 'active' : 'inactive'} 
            onClick={() => setFilter('All')}
          >
            All
          </button>
          <button 
            className={filter === 'Web App Development' ? 'active' : 'inactive'} 
            onClick={() => setFilter('Web App Development')}
          >
            Web App Development
          </button>
          <button 
            className={filter === 'Mobile App Development' ? 'active' : 'inactive'} 
            onClick={() => setFilter('Mobile App Development')}
          >
            Mobile App Development
          </button>
          <button 
            className={filter === 'Digital Design' ? 'active' : 'inactive'} 
            onClick={() => setFilter('Digital Design')}
          >
            Digital Design
          </button>
          <button 
            className={filter === 'Immersive Technology' ? 'active' : 'inactive'} 
            onClick={() => setFilter('Immersive Technology')}
          >
            Immersive Technology
          </button>
        </div>

        <div className="project-container">
          {filteredProjects.map((project) => (
            <ProjectItem 
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              project={project}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProjectList;
