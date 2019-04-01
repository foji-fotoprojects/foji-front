import React from 'react';

import styles from './contactsMenu.sass';

export default class ContactsMenu extends React.Component {
    render() {
        return (
            <div className={`${styles.menu} ${this.props.style}`}>
                <a className={styles.phone} href="tel:+79876543210">+7 (987) 654-32-10</a>
                <p className={`additional_text ${styles.copyright}`}>&copy; Все права защищены.</p>
            </div>
        );
    }
}