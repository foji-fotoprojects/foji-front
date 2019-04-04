import React, {Fragment} from 'react';
import {connect} from "react-redux";

import {fetchProjects} from "../../redux/actions/projectActions";

import ProjectCard from "./projectСard/ProjectCard";
import LoadingIcon from "../icons/loadingIcon/LoadingIcon";

import styles from './projects.sass';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(fetchProjects());
    }

    render() {
        return (
            <Fragment>
                {/*Тут будет слайдер*/}
                <div className={`container ${styles.container}`}>
                    {this.props.is_fetching ? <LoadingIcon/> : this.props.projects.map((project, index) => {
                        return (
                            <ProjectCard name={project.name}
                                         theme={project.theme}
                                         location={project.location}
                                         dateStart={project.date_start}
                                         dateEnd={project.date_end}
                                         timeStart={project.time_start}
                                         timeEnd={project.time_end}
                                         prepayment={project.prepayment}
                                         qtyPhotos={project.qty_photos}
                                         duration={project.duration}
                                         price={project.price}
                            />
                        )
                    })}
                </div>
            </Fragment>
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