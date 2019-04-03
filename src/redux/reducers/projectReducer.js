import * as projectConstants from '../constants/projectConstants';

export function projectReducer(
    state = {
        projects: [],
        project:[],
        is_fetching: false
    },
    action) {
    switch (action.type) {
        case projectConstants.FETCH_PROJECTS_PENDING: {
            state = {
                ...state,
                is_fetching: true
            };
            break;
        }

        case projectConstants.FETCH_PROJECTS_FULFILLED: {
            state = {
                ...state,
                is_fetching: false,
                projects: action.payload.data
            };
            break;
        }

        case projectConstants.FETCH_PROJECTS_REJECTED: {
            state = {
                ...state,
                is_fetching: false,
                error_message: action.payload.message
            };
            break;
        }

        case projectConstants.FETCH_PROJECT_BY_ID_PENDING: {
            state = {
                ...state,
                is_fetching: true
            };
            break;
        }

        case projectConstants.FETCH_PROJECT_BY_ID_FULFILLED: {
            state = {
                ...state,
                is_fetching: false,
                project: action.payload.data
            };
            break;
        }

        case projectConstants.FETCH_PROJECT_BY_ID_REJECTED: {
            state = {
                ...state,
                is_fetching: false,
                error_message: action.payload.message
            };
            break;
        }
    }
    return state;
}