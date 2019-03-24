import React from 'react';
import Layout__Menu from "../menu/LayoutMenu";
import Layout__MenuItem from "../menu-item/LayoutMenuItem";
import Layout__User from "../user/LayoutUser";
import {isActive} from "../../../utilits/isActive";
import {Link} from "react-router";
import {Logo} from "../../../fonts/icons/layout/logo";
import * as classNames from 'classnames/bind';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const styles = require('./LayoutHeader.css');
const cx = classNames.bind(styles);


export default class LayoutHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            isMenuOpen: false
        }
    }

    render() {
        return (<header className={cx(this.props.isMain && 'header-main')}>
                <div className="container">
                        <span className={cx('layout-header__menu-button')}>
                         <FontAwesomeIcon
                             icon={faBars}
                         onClick={() => this.switchMenu()}
                         />
                        </span>
                    <Link className="layout-header__logo" to="/">
                        <Logo/>
                    </Link>
                    <Layout__Menu isMenuOpen={this.state.isMenuOpen}>
                        <Layout__MenuItem href="/" active={isActive('/')}>
                            Фотопроекты
                        </Layout__MenuItem>
                        <Layout__MenuItem href="/past" active={isActive('/past')}>
                            Прошедшие
                        </Layout__MenuItem>
                        <Layout__MenuItem href="/about" active={isActive('/about')}>
                            О нас
                        </Layout__MenuItem>
                        <Layout__MenuItem href="/contact" active={isActive('/contact')}>
                            Обратная связь
                        </Layout__MenuItem>
                    </Layout__Menu>
                    <Layout__User active={isActive('/user')}/>
                </div>
            </header>
        );
    }

    switchMenu() {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        })
    }
}