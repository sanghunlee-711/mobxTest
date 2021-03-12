import axios from 'axios';

// import { ItemArray, TalkItem, TalkObj,  } from '../../../pages/Talk/template/template';
// 백엔드 완성되면 타입정의 마무리하자

export class NavRepository {
    URL = 'http://localhost:3000/data/data.json';
    navData = '';
    limit = 20;
    offset = 20;
    // url + `?limit=${this.limit}&offset=${this.offset}`
    constructor(url: string | undefined) {
        this.URL = url || this.URL;
        this.navData = '';
    }
    async getNav() {
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
        } catch (error) {
            throw new Error(`Error Happend in Async Function : ${error}`);
        }
    }

    doPagination(): void {
        this.limit += 20;
        this.offset += 20;
        //여기서 getNav를 한번 더 부르는게 아니라 해당 컴포넌트에서 불러야 중복 render를 피함
    }

    findAll(params: unknown) {
        return axios.get(`${this.URL}`, { params });
    }

    findOne(params: unknown) {
        return axios.get(`${this.URL}`, { params });
    }
}

export const NavRepo = new NavRepository(undefined);
