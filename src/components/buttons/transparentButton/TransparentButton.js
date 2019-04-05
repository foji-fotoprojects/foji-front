import React from 'react';

import styles from './transparentButton.sass'

export default class TransparentButton extends React.Component {
    render() {
        return (
            <button className={styles.button}>
                {this.props.text}
            </button>
        );
    }
}