import axios from 'axios';
import * as config from '../config/config';

export function fetchAllProjects() {
    return axios.get(`${config.server.host}${config.server.port ? config.server.port : ''}/projects`);
}