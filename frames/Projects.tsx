import ProjectCard from "../components/ProjectCard";

import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";

const Projects = () => {
    return(
    <div className="space-y-3">
        <h1 className="font-mono font-bold text-sub-light dark:text-sub-dark text-lg">Recent Projects</h1>
        <div className="space-y-4">
            <ProjectCard href="https://github.com/Mary-melvin/Calculator-Project-IT-Governor-House-Course" image={project1} imageAlt="Typescript Calculator" title="Typescript Calculator" 
            text="Calculator made with Typescript."/>
            <ProjectCard href="https://github.com/Mary-melvin/" image={project2} imageAlt="Resume Builder" title="Resume Builder" 
            text="Personal Resume Builder made with Typescript, HTML, CSS." />
            <ProjectCard href="https://github.com/Mary-melvin/Currency-Converter-Project---Governor-House-IT-Course" image={project3} imageAlt="Currency Converter" title="Currency Converter" 
            text="Currency Converter made with Typescript." />
            <ProjectCard href="https://github.com/Mary-melvin/ATM-Machine-Project" image={project4} imageAlt="ATM Machine" title="ATM Machine" 
            text="ATM Machine made with Typescript." />
        </div>
    </div>
    )
}

export default Projects;