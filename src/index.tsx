import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from './routes';
import { Reset } from 'styled-reset';

//https://kimchanjung.github.io/programming/2020/06/22/react-router-history-with-mobx-problem/

const RenderComponent = () => (
    <>
        <Reset />
        <RootRouter />
    </>
);

ReactDOM.render(<RenderComponent />, document.getElementById('root'));
