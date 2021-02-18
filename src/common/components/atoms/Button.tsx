import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('yourstore')
@observer
class Button extends React.Component<any> {
    render(): JSX.Element {
        return (
            <div>
                <div>
                    <span onClick={this.props.yourstore.changeToWorld}>Change to world</span>
                </div>
                <div>
                    <button onClick={() => this.props.yourstore.changeStoreValue('New')}>check2</button>
                </div>
            </div>
        );
    }
}

export default Button;
