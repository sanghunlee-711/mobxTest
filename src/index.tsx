import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import YourStore from './stores/YourStore';

const yourstore = new YourStore();

const RenderComponent = () => (
    //Mobx주입을 위한 Provider
    <Provider yourstore={yourstore}>
        <App />
    </Provider>
);

ReactDOM.render(<RenderComponent />, document.getElementById('root'));
