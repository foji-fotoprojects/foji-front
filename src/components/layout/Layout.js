import React from "react";
import {connect} from 'react-redux';
// import {getData} from '../../actions/dataActions';
// import {setView} from '../../actions/viewActions';
import './Layout.css';
import Layout__Menu from './menu/LayoutMenu';
import Layout__MenuItem from './menu-item/LayoutMenuItem';
import ReactSVG from 'react-svg';
import {isActive} from "../../utilits/isActive";

class Layout extends React.Component {

    render() {


        return <div>

            {this.props.children}

            <footer className="card-footer">
                <div className="container">
                    <div className="rights-mobile">© Все права защищены</div>
                    <Layout__Menu>
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
                        </Layout__MenuItem >
                    </Layout__Menu>
                    <Layout__Menu>
                        <Layout__MenuItem href="/" active={isActive('/')}>
                            Условия обработки и использования
                            персональных данных
                        </Layout__MenuItem>
                        <Layout__MenuItem href="/past" active={isActive('/past')}>
                            Условия использования сервиса
                        </Layout__MenuItem>
                        <Layout__MenuItem href="/about" active={isActive('/about')}>
                            Условия использования сервиса
                            для организаторов
                        </Layout__MenuItem>
                    </Layout__Menu>
                    <div className="footer-socials menu">
                        <div className="footer-socials-title">
                            Мы в соцсетях
                        </div>
                        <div className="footer-socials-logo">
                            <a className={'vk'} href="https://vk.com">
                                <ReactSVG  src="./images/vk.svg" alt=""/>

                            </a>
                            <a className={'inst'} href="https://www.instagram.com">
                                <ReactSVG  src="./images/inst.svg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className={"telephone-and-rights"}>
                        <a className={'telephone'} href="tel:+79876543221"> +7 (987) 654-32-21</a>
                        <div className="rights-desktop">© Все права защищены</div>
                    </div>
                </div>
            </footer>
        </div>

    }

}


export default Layout;