import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

import {fetchProjects} from "../../redux/actions/projectActions";

import ProjectCard from "./projectСard/ProjectCard";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(fetchProjects());
    }

    render() {
        return (
            <div>
                {
                    this.props.projects.map((project, index) => {
                        return (
                            <Link to="/project" key={index}>
                                <ProjectCard title={project.name}/>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        projects: store.projects.projects,
        is_fetching: store.projects.is_fetching
    };
}

export default connect(mapStateToProps)(Projects);