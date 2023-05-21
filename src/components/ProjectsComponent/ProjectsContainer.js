import styles from 'src/styles/ProjectsStyles/ProjectsContainer.module.css';
import React from 'react';


function ProjectsContainer({ project }) {
    return (
      <div>
        <a href={project.link} target ="_blank" rel="noopener noreferrer">
        </a>
        {project.title}
        {project.excerpt}
      </div>
    );
  }

export default ProjectsContainer;