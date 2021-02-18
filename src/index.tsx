import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import YourStore from './stores/YourStore';
import RootRouter from './routes';
import { Reset } from 'styled-reset';
import Nav from './common/components/organism/Nav';
import Home from './pages/Home';
import FooterImpl from './common/components/organism/Footer';
const yourstore = new YourStore();

const RenderComponent = () => (
    //Mobx주입을 위한 Provider
    <Provider yourstore={yourstore}>
        <Reset />
        <Nav />

        <RootRouter />
        <FooterImpl />
    </Provider>
);

ReactDOM.render(<RenderComponent />, document.getElementById('root'));
