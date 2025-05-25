import axios from 'axios';

const portfolioAPI = axios.create({
    baseURL: 'https://portfolio-kuya.onrender.com/api',
    timeout: 5000
});

export function getAllProjects() {
    return portfolioAPI.get('/projects');
}

export function getProjectByTitle(title) {
    return portfolioAPI.get(`/projects/${title}`);
};

export function postMessage(request) {
    return portfolioAPI.post(`/messages`, request);
};
