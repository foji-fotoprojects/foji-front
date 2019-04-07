import React from 'react';
import {connect} from "react-redux";

import {fetchProjectById} from "../../redux/actions/projectActions";

import LoadingIcon from '../icons/loadingIcon/LoadingIcon';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(fetchProjectById(this.props.match.params.id));
    }

    render() {
        return (
            <p className="test">
                {this.props.is_fetching ? <LoadingIcon/> : `Проект с названием ${this.props.project.name}`}
            </p>
        );
    }
}

function mapStateToProps(store) {
    return {
        project: store.projects.project,
        is_fetching: store.projects.is_fetching
    };
}

export default connect(mapStateToProps)(Project);