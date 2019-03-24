import React from 'react';
import Layout__Menu from "../menu/LayoutMenu";
import Layout__MenuItem from "../menu-item/LayoutMenuItem";
import Layout__User from "../user/LayoutUser";
import {isActive} from "../../../utilits/isActive";
import LayoutHeader from "../header/LayoutHeader";
const styles=require('./LayoutMain.css');

export default class Layout__Project extends React.Component {
    render() {
        return (<>
                <LayoutHeader isMain/>
                <main className={'main'}>
                    <div className="container">
                        главная
                    </div>
                </main>

            </>
        );
    }


}