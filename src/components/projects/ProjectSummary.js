import React from 'react';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card project-summary">
            <div className="card-content">
                <span className="card-title teal-text">{project.title}</span>
                <p>Posted by Ninja</p>
                <p className="grey-text">Date</p>
            </div>
        </div>
    )
}

export default ProjectSummary;
