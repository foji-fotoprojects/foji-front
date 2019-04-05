import React, {Fragment} from 'react';
import {connect} from "react-redux";

import {fetchProjects} from "../../redux/actions/projectActions";

import ProjectCard from "./projectСard/ProjectCard";
import LoadingIcon from "../icons/loadingIcon/LoadingIcon";

import styles from './projects.sass';
import Slider4blocks from "../slider/Slider4blocks";


const slides = [
    require('../../test_images/32064b1aac54770337ec95ea346e2db2.jpg'),
    require('../../test_images/3146278.jpg'),
    require('../../test_images/IMG_5762_web-1024x684.jpg'),
    require('../../test_images/s1200.webp')
];


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(fetchProjects());
    }

    render() {
        return (
            <Fragment>
                <div className="main__slider-container">
                    <Slider4blocks slides={slides}/>
                </div>
                <div className={`container ${styles.container}`}>
                    {this.props.is_fetching ? <LoadingIcon/> : this.props.projects.map((project, index) => {
                        return (
                            <ProjectCard id={project.id}
                                         name={project.name}
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
                                         key={index}
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