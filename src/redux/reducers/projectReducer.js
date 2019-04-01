import * as projectConstants from '../constants/projectConstants';

export function projectReducer(
    state = {
        projects: [],
        is_fetching: false
    },
    action) {
    switch (action.type) {
        case projectConstants.FETCH_PROJECT_PENDING: {
            state = {
                ...state,
                is_fetching: true
            };
            break;
        }

        case projectConstants.FETCH_PROJECT_FULFILLED: {
            state = {
                ...state,
                is_fetching: false,
                projects: action.payload.data
            };
            break;
        }

        case projectConstants.FETCH_PROJECT_REJECTED: {
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