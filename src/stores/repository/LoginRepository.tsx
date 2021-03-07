import { makeObservable, observable, action, computed } from 'mobx';
// import { LoginRepository } from './LoginRepository';

interface User {
    id?: string;
    pw?: string;
}

export class LoginRepository {
    loginToken = false;
    checkArray: boolean[] = [];
    count = 0;
    id = '';
    pw = '';
    idValid = true;
    pwValid = true;

    protected user: User = {};
    constructor() {
        makeObservable(this, {
            loginToken: observable,
            id: observable,
            pw: observable,
            changeLoginToken: action,
            status: computed,
            plusCount: action,
            getIdPw: action,
        });
    }

    changeLoginToken(): void {
        // console.log(token);

        this.loginToken = !this.loginToken;
    }
    plusCount(): number {
        console.log(this.count);
        return (this.count += 1);
    }

    checkValid(name: string, value: string): void {
        const idValidCheck = value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
        const pwValidCheck = value.match(/(?=.*\d)(?=.*[a-z]).{8,}/);

        if (name === 'ID') {
            if (value.length <= 0) {
                this.idValid = true;
            } else {
                if (idValidCheck) {
                    console.log('IDVALIDCHECK');
                    this.idValid = true;
                } else {
                    console.log('NOTVALID ID');
                    this.idValid = false;
                }
            }
        } else if (name === 'PW') {
            if (value.length <= 0) {
                this.pwValid = true;
            } else {
                if (pwValidCheck) {
                    console.log('PWVALIDCHECK');
                    this.pwValid = true;
                } else {
                    console.log('NOTVALID PW');
                    this.pwValid = false;
                }
            }
        }
    }

    getIdPw(e: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target as HTMLInputElement;

        if (name === 'ID') {
            this.id = value;
            this.checkValid(name, value);
        } else if (name === 'PW') {
            this.checkValid(name, value);
            this.pw = value;
        }
    }

    //https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch
    async sendUser<T>(): Promise<T> {
        const sendId = this.id;
        const sendPw = this.pw;
        const userState = { id: sendId, pw: sendPw };

        try {
            const post = await fetch('TestURL', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-type': 'application/json',
                },
                redirect: 'follow',

                body: JSON.stringify(userState),
            });
            const data = await post.json();
            const get = await data;
            console.log(`data:${data}, get:${get}, userState: ${sendId}`);
            return get;
        } catch (error) {
            throw new Error(`Error ${error}`);
        }
    }

    get status(): number {
        const count: number = this.count;

        return count;
    }
}

export const LoginRepo = new LoginRepository();
