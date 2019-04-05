import React from 'react';

import styles from './clock.sass';

export default class Clock extends React.Component {
    render() {
        return (
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.08643 3.53699V10.6018H14.1345" stroke="black" strokeWidth="1.5"/>
                <path d="M18.1827 9.5C18.1827 14.1854 14.3453 18 9.59135 18C4.83744 18 1 14.1854 1 9.5C1 4.81458 4.83744 1 9.59135 1C14.3453 1 18.1827 4.81458 18.1827 9.5Z" stroke="black" strokeWidth="2"/>
            </svg>
        );
    }
}
