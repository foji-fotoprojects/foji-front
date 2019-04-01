import React from 'react';
import {Link} from "react-router-dom";

import Logo from '../icons/logo/Logo';
import Menu from '../menu/Menu';
import MenuItem from '../menu/menuItem/MenuItem';
import AuthMenu from "./authMenu/AuthMenu";
import BurgerMenu from '../icons/burgerMenu/BurgerMenu';

import styles from './header.sass';

export default class Header extends React.Component {
    state = {
        isVisible: false
    };

    toggleVisible = () => {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }));
    };

    render() {
        const menu = <Menu style={styles.menu} isMainPage={this.props.isMainPage} isHeader>
            {
                this.props.links.map((link, index) => {
                    return (
                        <MenuItem style={styles.link} link={link.link} name={link.name}
                                  fullName={link.fullName} isMainPage={this.props.isMainPage} key={index}
                                  isMobile={this.props.isMobile} toggleActive={this.props.toggleActive}
                                  isActive={this.props.isActive(link.link)} toggleVisible={this.toggleVisible}
                                  isHeader/>
                    )
                })
            }
        </Menu>;

        return (
            <header className={this.props.isMainPage ? styles.header_main : styles.header_noMain}>
                <div className={`container ${styles.content}`}>
                    <BurgerMenu toggleVisible={this.toggleVisible} mainPage={this.props.isMainPage}/>
                    <Link className={styles.link} to={'/'}>
                        <Logo isMainPage={this.props.isMainPage}/>
                    </Link>
                    {this.props.isMobile ? (this.state.isVisible && menu) : menu}
                    <AuthMenu isMainPage={this.props.isMainPage}/>
                </div>
            </header>
        );
    }
}