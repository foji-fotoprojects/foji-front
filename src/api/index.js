import axios from 'axios';

export function fetchAllProjects() {
    return axios.get(`http://api.foji.ru/projects`);
}

export function fetchProjectById(id) {
    return axios.get(`/projects/${id}`);
}