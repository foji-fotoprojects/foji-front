import React from 'react';

import styles from './redButton.sass'

export default class RedButton extends React.Component {
    render() {
        return (
            <button className={styles.button}>
                {this.props.text}
            </button>
        );
    }
}