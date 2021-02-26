import { makeObservable, observable, action, computed } from 'mobx';

type closeLoginStatus = boolean;

interface Login {
    closeLoginStatus: closeLoginStatus;
}

export class LoginStoreImpl {
    closeLoginStatus: closeLoginStatus = false;

    constructor() {
        makeObservable(this, {
            closeLoginStatus: observable,
            changeLoginStatus: action,
        });
    }

    changeLoginStatus(e: React.MouseEvent<HTMLButtonElement>): void {
        const { name, value } = e.target as HTMLButtonElement;

        const toggleStstaus: Login = {
            closeLoginStatus: false,
        };

        console.log(e.target);
        if (name === 'loginPopUp' && this.closeLoginStatus === false) {
            toggleStstaus.closeLoginStatus = true;
            console.log('In True');
        } else {
            toggleStstaus.closeLoginStatus = false;
            console.log('In False');
        }
        console.log(this.closeLoginStatus);
    }
}

export const LoginStore = new LoginStoreImpl();
