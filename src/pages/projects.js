import Header from '../components/Header.js'
import Navigation from '../components/Navigation.js';
import ProjectsContainer from '../components/ProjectsComponent/ProjectsContainer.js';
import styles from '../styles/ProjectsStyles/Projects.module.css';

const projects = [
    {title: 'Jester: ', excerpt: 'A low code Jest testing suite generator'},
    {title: 'BookBeats: ', excerpt: 'An application to match your current book with a stylized playlist'},
    {title: 'WispN: ', excerpt: 'Let us Wisp you away to your next National Park journey!'},
    {title: 'PTC: ', excerpt: 'Having trouble scheduling those pesky Parent Teacher Conferences?'},
    {title: 'Snake 3000: ', excerpt: 'An early project to build a retro-styled snake game'},
    {title: 'Railbird: ', excerpt: 'A Freelanced Dashboard Template for Railbird, a sports contract market'}
]
const headerContent = {
    title: 'Welcome to my projects!', excerpt: `Take a look around and check out a few projects I'm particularly proud of!`
  };


export default function Projects() {
    return (
        <div className={styles.projectsPage}>
            <Header headerContent={headerContent}/>
            <Navigation />
            <div>
                {projects.map((project) => ( <ProjectsContainer project={project} key={project.title}/>
                    ))
                }
            </div>
            <div>
                temp
            </div>
        </div>
    )
}