import styles from 'src/styles/ProjectsStyles/ProjectsContainer.module.css';
import React from 'react';


function ProjectsContainer({ project }) {
    return (
      <div>
        {project.title}
        {project.excerpt}
      </div>
    );
  }

export default ProjectsContainer;