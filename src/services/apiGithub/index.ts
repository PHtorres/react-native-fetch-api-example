import axios from 'axios';

export const apiGithub = axios.create({
    baseURL:'https://api.github.com/'
});