import React from 'react';

import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";

import styles from './layout.sass';

export default class Layout extends React.Component {
    state = {
        isMainPage: false,
        isMobile: 0,
        isActive: window.location.pathname,
        links: [
            {
                id: 1,
                link: '/',
                name: 'Фотопроекты',
                fullName: 'Текущие фотопроекты'
            },
            {
                id: 2,
                link: '/past',
                name: 'Прошедшие',
                fullName: 'Прошедшие фотопроекты'
            },
            {
                id: 3,
                link: '/about',
                name: 'О нас',
                fullName: 'О нас'
            },
            {
                id: 4,
                link: '/contacts',
                name: 'Обратная связь',
                fullName: 'Обратная связь'
            }
        ]
    };

    handleResize = () => this.setState({
        isMobile: window.innerWidth
    });

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    toggleActive = () => this.setState({
        isActive: window.location.pathname
    });

    isActive = (href) => {
        return window.location.pathname === href;
    };

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Header isMainPage={this.state.isMainPage} isMobile={this.state.isMobile < 760} links={this.state.links}
                            isActive={this.isActive} toggleActive={this.toggleActive}/>
                    <Main/>
                </div>
                <Footer links={this.state.links} toggleActive={this.toggleActive}/>
            </div>
        );
    }
}