import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import {projectReducer} from '../reducers/projectReducer';

const reducers = combineReducers({
    projects: projectReducer,
});

const middleware = applyMiddleware(thunk, promise, createLogger());

const store = createStore(reducers, middleware);

export default store;