import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

// **** 최하단에 잇던 observer 가 이렇게 위로 올라옵니다.
@observer
class Counter extends Component {
    @observable number = 0;

    @action
    increase = () => {
        console.log('Increase');

        this.number++;
    };

    @action
    decrease = () => {
        console.log('Decrease');
        this.number--;
    };

    render() {
        return (
            <div>
                <h1>{this.number}</h1>
                <button onClick={this.increase}>+1</button>
                <button onClick={this.decrease}>-1</button>
            </div>
        );
    }
}

export default Counter;
