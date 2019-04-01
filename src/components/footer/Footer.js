import React from 'react';

import Menu from "../menu/Menu";
import ConditionsMenu from './conditionsMenu/ConditionsMenu';
import SocialMenu from "./socialMenu/SocialMenu";
import ContactsMenu from "./contactsMenu/ContactsMenu";

import styles from './footer.sass';
import MenuItem from "../menu/menuItem/MenuItem";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <div className={`container ${styles.content}`}>
                    <Menu style={`${styles.menu} ${styles.mainMenu}`} isFooter>
                        {
                            this.props.links.map((link, index) => {
                                return (
                                    <MenuItem style={`additional_text ${styles.link}`} link={link.link} name={link.name}
                                              fullName={link.fullName} key={index}
                                              toggleActive={this.props.toggleActive} isFooter/>
                                )
                            })
                        }
                    </Menu>
                    <nav className={`${styles.menu} ${styles.conditionsMenu}`}>
                        <ConditionsMenu style={`additional_text ${styles.link}`}/>
                    </nav>
                    <SocialMenu style={styles.socialMenu}/>
                    <ContactsMenu style={styles.contactsMenu}/>
                    <p className={`additional_text ${styles.copyright}`}>&copy; Все права защищены.</p>
                </div>
            </footer>
        );
    }
}