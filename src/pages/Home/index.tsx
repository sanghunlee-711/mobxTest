import Nav from '../../common/components/organism/Nav';
import React from 'react';
import HomeTemplate from './template/template';
interface Home {
    body?: string;
}

const Home: React.FC<Home> = (): JSX.Element => {
    return (
        <>
            <HomeTemplate />
        </>
    );
};

export default Home;
