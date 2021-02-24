import axios from 'axios';

class HomeRepository {
    URL = 'http://localhost:3000/data/data.json';
    navData = '';
    constructor(url: string | undefined) {
        this.URL = url || this.URL;
        this.navData = '';
    }
    async getNav() {
        console.log(this.URL);

        try {
            const PostRes = await fetch(this.URL, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            const post = await PostRes.json();
            const data = await post;

            return data;
        } catch {
            return console.log(`Failed error : ${Error}`);
        }
        // .then((res) => res.json())
        // .then((res) => console.log('?', res))
        // .catch((error) => {
        //     console.log(error);
        // });
    }

    findAll(params: unknown) {
        return axios.get(`${this.URL}`, { params });
    }

    findOne(params: unknown) {
        return axios.get(`${this.URL}`, { params });
    }
}

export const HomeRepo = new HomeRepository(undefined);
