import { makeObservable, observable, action, computed } from 'mobx';

class RootStore {
    start = false;

    constructor() {
        makeObservable(this, {
            start: observable,
        });
    }
}

export default RootStore;
