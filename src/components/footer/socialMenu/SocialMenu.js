import React from 'react';

import VkIcon from "../../icons/vkIcon/VkIcon";
import InstIcon from "../../icons/instIcon/InstIcon";

import styles from './socialMenu.sass';

export default class SocialMenu extends React.Component {
    render() {
        return (
            <div className={`${styles.menu} ${this.props.style}`}>
                <p className={`additional_text ${styles.title}`}>Мы в соцсетях:</p>
                <a className={styles.link} href="https://www.vk.com">
                    <VkIcon/>
                </a>
                <a className={styles.link} href="https://www.instagram.com">
                    <InstIcon/>
                </a>
            </div>
        );
    }
}