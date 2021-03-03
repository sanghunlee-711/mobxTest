import { makeObservable, observable, action, computed } from 'mobx';

// interface LoginItem {
//     loginToken: boolean;
//     changeLoginToken(): void;
//     checkArray: boolean[];
// }

export class LoginRepository {
    loginToken = false;
    checkArray: boolean[] = [];
    count = 0;
    constructor() {
        makeObservable(this, {
            loginToken: observable,
            changeLoginToken: action,
            status: computed,
            plusCount: action,
        });
        // this.loginToken = loginToken || this.loginToken;
    }

    changeLoginToken(): void {
        // console.log(token);

        this.loginToken = !this.loginToken;
    }
    plusCount(): number {
        console.log(this.count);
        return (this.count += 1);
    }

    get status(): number {
        const count: number = this.count;

        return count;
    }
}

export const LoginRepo = new LoginRepository();
