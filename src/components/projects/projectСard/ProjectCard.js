import React from 'react';

export default class ProjectCard extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
            </div>
        );
    }
}