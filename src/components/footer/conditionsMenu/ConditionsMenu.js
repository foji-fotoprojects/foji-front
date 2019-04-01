import React from 'react';
import {Link} from "react-router-dom";

export default class ConditionsMenu extends React.Component {
    state = {
        links: [
            {
                link: '/personaldataprocessing',
                name: 'Условия обработки и использования персональных данных'
            },
            {
                link: '/termsofserviceuse',
                name: 'Условия использования сервиса'
            },
            {
                link: '/termofserviceusefororganizers',
                name: 'Условия использования сервиса для организаторов'
            }
        ]
    };

    render() {
        return (
            this.state.links.map((link, index) => {
                return (
                    <Link className={this.props.style} to={link.link} key={index}>
                        {link.name}
                    </Link>
                )
            })
        );
    }
}