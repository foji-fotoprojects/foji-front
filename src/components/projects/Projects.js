import React from 'react';
import {Link} from 'react-router-dom';

import ProjectCard from "./projectСard/ProjectCard";

export default class Projects extends React.Component {
    render() {
        return (
            <div>
                <Link to="/project">
                    <ProjectCard/>
                </Link>
                <Link to="/project">
                    <ProjectCard/>
                </Link>
                <Link to="/project">
                    <ProjectCard/>
                </Link>
                <Link to="/project">
                    <ProjectCard/>
                </Link>
                {/*Это то, что будет выводиться на главной странице*/}
                {/*Если это страница "Фотороекты", то выводим текущие проекты*/}
                {/*Если это страница "Прошедшие", то выводим прошедшие проекты*/}
                {/*Выводим через map()*/}
            </div>
        );
    }
}