import {FETCH_PROJECTS, FETCH_PROJECT_BY_ID} from "../constants/projectConstants";
import * as api from '../../api';

export const fetchProjects = () => {
    return {
        type: FETCH_PROJECTS,
        payload: api.fetchAllProjects()
    }
};

export const fetchProjectById = (id) => {
    return {
        type: FETCH_PROJECT_BY_ID,
        payload: api.fetchProjectById(id)
    }
};