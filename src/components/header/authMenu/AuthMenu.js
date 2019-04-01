import React from 'react';

import UserIcon from "../../icons/userIcon/UserIcon";
import VerticalLine from "../../icons/verticalLine/VerticalLine";

import styles from './authMenu.sass';

export default class AuthMenu extends React.Component {
    render() {
        return (
            <div className={styles.menu}>
                <UserIcon mainPage={this.props.isMainPage}/>
                <p className={this.props.isMainPage ? styles.link : `${styles.link} ${styles.link_noMain}`}>Вход</p>
                <VerticalLine mainPage={this.props.isMainPage}/>
                <p className={this.props.isMainPage ? styles.link : `${styles.link} ${styles.link_noMain}`}>Регистрация</p>
            </div>
        );
    }
}