import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card project-summary">

                <div className="card-content">
                    <span className="card-title teal-text">Project Title - {id}</span>
                    <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                </div>
                <div className="card-action">
                    <p>Posted by React Ninja</p>
                    <p className="grey-text">Date</p>
                </div>
            </div>
        </div>

    )
}

export default ProjectDetails
