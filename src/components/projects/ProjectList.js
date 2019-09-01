import React from 'react';
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            {/* If there are any projects then map through projects. 
            If there are no projects, don't do anything. */}
            {projects && projects.map(project => {
                return (
                    <ProjectSummary project={project} key={project.id} />
                )
            })}
        </div>
    )
}

export default ProjectList;