import React from 'react';
import Layout__Menu from "../menu/LayoutMenu";
import Layout__MenuItem from "../menu-item/LayoutMenuItem";
import Layout__User from "../user/LayoutUser";
import {isActive} from "../../../utilits/isActive";
import LayoutHeader from "../header/LayoutHeader";
import {Link} from "react-router";
import {Logo} from "../../../fonts/icons/layout/logo";

const styles = require('./LayoutProject.css');

const testProjectData = {
    id: 1,
    tags: [
        'Для пар',
        'На природе'
    ],
    title: 'Зимняя Love Story'
};

export default class LayoutProject extends React.Component {
    render() {
        return (<>
                <LayoutHeader/>
                <main className={'project'}>
                    <div className="container">
                        <Link className="project__link-back" to="/">
                            &lt; К списку фотопроектов
                        </Link>
                        <div className={'project__tags'}>
                            {testProjectData.tags.map(tag =>
                                <div className={'project__tag'}>
                                    {tag}
                                </div>
                            )}
                        </div>
                        <div className="project__head">
                            <div className="project__title">
                                {testProjectData.title}
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }


}