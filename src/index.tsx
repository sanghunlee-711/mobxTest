import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import YourStore from './stores/YourStore';
import RootRouter from './routes';
import { Reset } from 'styled-reset';

import Home from './pages/Home';
const yourstore = new YourStore();

const RenderComponent = () => (
    //Mobx주입을 위한 Provider
    <Provider yourstore={yourstore}>
        <Reset />
        <RootRouter />
    </Provider>
);

ReactDOM.render(<RenderComponent />, document.getElementById('root'));
