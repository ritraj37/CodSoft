import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'Project One',
        description: 'Description of project one.',
        link: 'https://link-to-project-one.com',
    },
    {
        title: 'Project Two',
        description: 'Description of project two.',
        link: 'https://link-to-project-two.com',
    },
    {
        title: 'Project Three',
        description: 'Description of project three.',
        link: 'https://link-to-project-three.com',
    },
];

const Projects = () => {
    return (
        <div>
            <h1>My Projects</h1>
            <div>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;