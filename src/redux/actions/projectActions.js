import {FETCH_PROJECT} from "../constants/projectConstants";
import * as api from '../../api';

export const fetchProjects = () => {
    return {
        type: FETCH_PROJECT,
        payload: api.fetchAllProjects()
    }
};
