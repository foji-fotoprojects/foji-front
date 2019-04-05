import React from 'react';
import {Route} from 'react-router-dom'

import Projects from '../projects/Projects';
import Project from "../project/Project";
import Past from "../past/Past";
import About from '../staticPages/about/About';
import Contacts from '../staticPages/contacts/Contacts';
import PersonalDataProcessing from "../staticPages/personalDataProcessing/PersonalDataProcessing";
import TermsOfServiceUse from "../staticPages/termsOfServiceUse/TermsOfServiceUse";

import './main.sass';
import TermOfServiceUseForOrganizers from "../staticPages/termsOfServiceUseForOrganizers/TermOfServiceUseForOrganizers";

export default class Main extends React.Component {
    render() {
        return (
            <main className='main'>
                <Route exact path="/" component={Projects}/>
                <Route exact path="/past" component={Past} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/personaldataprocessing" component={PersonalDataProcessing} />
                <Route exact path="/termsofserviceuse" component={TermsOfServiceUse} />
                <Route exact path="/termofserviceusefororganizers" component={TermOfServiceUseForOrganizers} />
                <Route exact path="/project/:id" component={Project} />
            </main>
        );
    }
}