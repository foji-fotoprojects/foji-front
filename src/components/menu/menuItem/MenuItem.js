import React from 'react';
import {Link} from "react-router-dom";

import styles from './menuItem.sass';

export default class Menu extends React.Component {

    onClick = () => {
        this.props.toggleActive();
        this.props.isMobile && this.props.toggleVisible();
        this.props.scrollPage(true)
    };

    render() {
        return (
            <Link onClick={this.onClick} className={this.props.isHeader && this.props.isMainPage === false && this.props.isActive ? `${this.props.style} ${styles.active}` : this.props.style}
                to={this.props.link}>
                {(this.props.isHeader && this.props.name) || (this.props.isFooter && this.props.fullName)}
            </Link>
        );
    }
}