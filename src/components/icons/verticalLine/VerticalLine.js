import React from 'react';

import styles from './verticalLine.sass';

export default class VerticalLine extends React.Component {
    render() {
        return (
            <svg className={`${styles.icon} ${this.props.mainPage ? styles.white : styles.black}`} viewBox="0 0 2 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.75" y1="3.27835e-08" x2="0.749999" y2="32" strokeWidth="1.5"/>
            </svg>
        );
    }
}
