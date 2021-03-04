import React from 'react';
import ReactDOM from 'react-dom';
import YourStore from './stores/YourStore';
import RootRouter from './routes';
import { Reset } from 'styled-reset';

import { createBrowserHistory } from 'history';

const yourstore = new YourStore();
//https://kimchanjung.github.io/programming/2020/06/22/react-router-history-with-mobx-problem/
const history = createBrowserHistory();

const RenderComponent = () => (
    //Mobx주입을 위한 Provider
    // <Provider yourstore={yourstore}>
    <>
        <Reset />
        <RootRouter />
    </>
    // </Provider>
);

ReactDOM.render(<RenderComponent />, document.getElementById('root'));
