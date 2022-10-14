import projects from './data/projects';
import ProjectItem from './ProjectItem';
export default function Projects() {
    const project = projects.map(item => <ProjectItem {...item} />)
    
    return (
        <div id="projects" className="about-section projects-section">
            <h1 className="projects-head">↬ My Projects !</h1>
            <div className="projects-view">
                {project}
            </div>
        </div>
    )
}