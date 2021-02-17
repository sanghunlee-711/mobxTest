//최상단 컴포넌트에서 Provider설정 시 props로 준 store를 불러온다
// Observer는 해당 클래스를 watch(감시)하며 값이 바뀌게 되면 this.forceUpdate()를 트리거 해준다.
import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action, computed } from 'mobx';
import Counter from './components/Counter';

@inject('yourstore')
@observer
class App extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }
    @observable newNumber = 1;
    @action
    increase = () => {
        console.log(this.newNumber);
        this.newNumber++;
    };

    @action
    decrease = () => {
        console.log(this.newNumber);

        this.newNumber--;
    };
    // 상태

    render(): JSX.Element {
        console.log('렌더되냐!');
        const { yourstore } = this.props;
        return (
            <div>
                <div>value = {yourstore.yourStore}</div>
                <div>
                    <button onClick={yourstore.changeToWorld}>Change to world</button>
                </div>
                <h1>{yourstore.number}</h1>
                <button onClick={yourstore.increase}>+1</button>
                <button onClick={yourstore.decrease}>-1</button>

                <div>
                    <h1>{this.newNumber}</h1>
                    <button onClick={this.increase}>+1</button>
                    <button onClick={this.decrease}>-1</button>
                </div>
                <Counter />
            </div>
        );
    }
}

export default App;
