import {combineReducers} from "redux"

import userDataReducer from "./userDataReducer"
import projectsReducer from "./projectsReducer"
import projectDataReducer from "./projectDataReducer"

export default combineReducers({
        user: userDataReducer,
        projects: projectsReducer,
        projectData: projectDataReducer,
    }
)