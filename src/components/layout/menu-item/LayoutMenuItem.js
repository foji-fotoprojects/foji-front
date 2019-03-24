import React from 'react';
import {Link} from 'react-router';


export default class MenuItem extends React.Component {
    render() {
        return (
            <li >
                <Link className={this.props.active ? 'nav-link active' : 'nav-link'} to={this.props.href}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
}