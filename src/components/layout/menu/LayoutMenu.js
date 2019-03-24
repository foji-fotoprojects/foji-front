import React from 'react';
import {Link} from 'react-router';

// import 'bootstrap/dist/css/bootstrap.min.css';

class Menu extends React.Component {
    render() {
        return (
                <nav className="navbar">
                        <ul className="menu">
                            {this.props.children}
                        </ul>
                </nav>


        );
    }
}


export default Menu;