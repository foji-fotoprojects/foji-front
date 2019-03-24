import React from 'react';
import Layout__Menu from "../menu/LayoutMenu";
import Layout__MenuItem from "../menu-item/LayoutMenuItem";
import Layout__User from "../user/LayoutUser";
import {isActive} from "../../../utilits/isActive";
import LayoutHeader from "../header/LayoutHeader";
const styles=require('./LayoutProject.css');

export default class LayoutProject extends React.Component {
    render() {
        return (<>
                <LayoutHeader/>
                <main className={'project'}>
                    <div className="container">
                        тело проекта

                    </div>
                </main>

            </>
        );
    }


}