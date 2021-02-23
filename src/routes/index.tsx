import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import Todo from '../pages/Todo/index';
import Editor from '../pages/Editor/index';

import Nav from '../common/components/organism/Nav';
import FooterImpl from '../common/components/organism/Footer';
const RootRouter: React.FC = () => (
    //Todo 루트 라우터 반환
    <BrowserRouter>
        <Nav />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/todo" exact component={Todo} />
            <Route path="/editor" exact component={Editor} />
        </Switch>
        <FooterImpl />
    </BrowserRouter>
);

export default RootRouter;

/*
<BrowserRouter />: HTML5 히스토리 API를 사용하여 주소를 관리하는 라우터(해쉬뱅 모드 사용 안함)
<Route />: 요청 경로와 렌더링할 컴포넌트를 설정한다
<Switch />: 하위에 라우터 중 하나를 선택한다
<Redirect />: 요청 경로를 다른 경로로 리다이렉션한다
*/
