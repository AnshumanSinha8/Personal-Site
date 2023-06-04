import Header from '../components/Header.js'
import Navigation from '../components/Navigation.js';
import ProjectsContainer from '../components/ProjectsComponent/ProjectsContainer.js';
import styles from '../styles/ProjectsStyles/Projects.module.css';

const projects = [
    {title: 'Jester: ', excerpt: 'A low code Jest testing suite generator', link: 'https://jester.software/'},
    {title: 'BookBeats: ', excerpt: 'An application to match your current book with a stylized playlist', link: 'https://github.com/octo-code-4/bookbeats'},
    {title: 'WispN: ', excerpt: 'Let us Wisp you away to your next National Park journey!', link: 'https://github.com/wispn-dev/wispn'},
    {title: 'PTC: ', excerpt: 'A tool to help you schedule Parent-Teacher conferences more easily.', link: 'https://github.com/Advanced-Education/pt-conf'},
    {title: 'Snake 3000: ', excerpt: 'An early project to build a retro-styled snake game :s', link: 'https://jester.software/'},
    {title: 'Railbird: ', excerpt: 'A Freelanced Dashboard Template for Railbird, a sports contract market', link: 'https://github.com/AnshumanSinha8/Railbird-AS'}
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
        </div>
    )
}