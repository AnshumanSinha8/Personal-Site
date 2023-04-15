import Header from '../components/Header.js'
import Navigation from '../components/Navigation.js';
import ProjectsContainer from '../components/ProjectsComponent/ProjectsContainer.js';
import styles from '../styles/ProjectsStyles/Projects.module.css';

const projects = [
    {title: 'Jester', excerpt: 'A low code Jest testing suite generator!'},
    {title: 'Snake 3000', excerpt: 'An early project to build a retro-styled snake game'}
]

const headerContent = {
    title: 'Hey, I\'m Anshu', excerpt: 'A freelance engineer - welcome to my website!'
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