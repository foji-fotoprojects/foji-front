import axios from 'axios';

export function fetchAllProjects() {
    return axios.get(`/projects`);
}

export function fetchProjectById(id) {
    return axios.get(`/projects/${id}`);
}