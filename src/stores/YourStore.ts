import { observable, action, computed } from 'mobx';

export default class YourStore {
    //@observable 은state와 유사한 개념으로 Mobx상의 변수의 역할을 한다.
    //따라서 let,const와 같은 변수가 아닌 @observable로 선언해야한다.

    @observable yourStore = 'changePlease';

    //@action은 값을 변경해줄 수 있는 메서드, setState와 같은 역할을 한다
    //setState와 차이점은 커스터마이징이 가능하다;
    //sideEffect에 대해서 생각할 필요가 있다.
    @action changeStoreValue = (value: string): void => {
        this.yourStore = value;
        console.log(this.yourStore);
    };

    @action changeToWorld = (): void => {
        this.yourStore = 'World';

        console.log(this.yourStore);
    };

    @computed get total(): string {
        return `${this.yourStore} dsakfjlk`;
    }

    @observable number = 0;

    @action
    increase = () => {
        this.number++;
    };

    @action
    decrease = () => {
        this.number--;
    };
}
