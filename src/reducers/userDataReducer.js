export default function reducer(state={
    userId: null,
    name: false,
    avatar: './images/user-black.png',
}, action) {

    switch (action.type) {
        case "FETCH_PROJECT": {
            return {...state, fetching: true}
        }
        case "FETCH_PROJECT_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_PROJECT_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                project: action.payload,
            }
        }
        case "SET_PROJECT_NAME": {
            return {
                ...state,
                project: {...state.project, name: action.payload},
            }
        }
        default:{
            return state;
        }
    }


}