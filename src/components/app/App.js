import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from '../../store/store';
import {Router, Route, IndexRoute, browserHistory,} from 'react-router';

import Layout from '../layout/Layout';
import LayoutProject from '../layout/project/LayoutProject';
import Layout__Main from "../layout/main/LayoutMain";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path='/' component={Layout}>
                        <IndexRoute component={Layout__Main}/>
                        <Route path='past' component={LayoutProject}/>
                        <Route path='about' component={LayoutProject}/>
                        <Route path='contacts' component={LayoutProject}/>
                        <Route path="*" component={LayoutProject}/>
                    </Route>
                </Router>
            </Provider>
        );
    }
}

export default App;
