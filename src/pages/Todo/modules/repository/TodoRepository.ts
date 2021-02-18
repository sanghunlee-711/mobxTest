import axios from 'axios';

class TodoRepository {
    URL = 'URLSAMPLE';

    constructor(url: string | undefined) {
        this.URL = url || this.URL;
    }

    findAll(params: unknown) {
        return axios.get(`${this.URL}`, { params });
    }

    findOne(params: unknown) {
        return axios.get(`${this.URL}`, { params });
    }
}

export const TodoRepo = new TodoRepository('ABX');
