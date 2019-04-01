import React from 'react';

import styles from './burgerMenu.sass';

export default class BurgerMenu extends React.Component {
    render() {
        return (
            <svg onClick={this.props.toggleVisible} className={`${styles.icon} ${this.props.mainPage ? styles.white : styles.black}`} viewBox="0 0 23 16"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="23" height="2"/>
                <rect y="7" width="23" height="2"/>
                <rect y="14" width="23" height="2"/>
            </svg>

        );
    }
}