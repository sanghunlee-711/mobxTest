import { makeObservable, observable, action, computed } from 'mobx';

interface UserInfo {
    id: string;
    pw: string;
    gender: string;
    birth: string;
    brand: string;
}

class RegisterModule {
    userInfo;
    constructor(userInfo: UserInfo) {
        this.userInfo = userInfo;
    }

    async sendUserInfo<T>(): Promise<T> {
        const _userInfo = this.userInfo;

        try {
            console.log(_userInfo);
            const post = await fetch('TestURL', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-type': 'application/json',
                },
                redirect: 'follow',
                body: JSON.stringify(_userInfo),
            });
            const data = await post.json();
            const get = await data;
            console.log(`data:${data} get:${get}`);
            return get;
        } catch (error) {
            console.log(`Send userInfo Error in Register Comp: ${error}`);
            throw new Error(`Error ${error}`);
        }
    }
}

export default RegisterModule;
