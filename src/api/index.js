import axios from 'axios';

export function fetchAllProjects() {
    return axios.get(`/projects`);
}