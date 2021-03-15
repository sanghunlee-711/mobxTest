import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import TotalTemplate from './template/TotalTemplate';

export interface TotalMatchParams {
    title: string;
    optionalParam?: string;
}

//params 타입 처리방법
//https://stackoverflow.com/questions/48138111/what-typescript-type-should-i-use-to-reference-the-match-object-in-my-props
const Total: React.FC<RouteComponentProps<TotalMatchParams>> = ({ match }): JSX.Element => {
    const { title } = match.params;

    return (
        <>
            <TotalTemplate title={title} />
        </>
    );
};

export default Total;
