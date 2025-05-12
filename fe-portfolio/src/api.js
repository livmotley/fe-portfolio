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

export function postMessage(name, body, email) {
    const request = {
        "name": name,
        "body": body,
        "email": email
    };

    return portfolioAPI.post(`/messages`, request);
};
