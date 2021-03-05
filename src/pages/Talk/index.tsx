import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import TalkTemplate from './template/template';

export interface TalkMatchParams {
    title: string;
    optionalParam?: string;
}

const Talk: React.FC<RouteComponentProps<TalkMatchParams>> = ({ match }): JSX.Element => {
    const { title } = match.params;

    return (
        <div>
            <TalkTemplate title={title} />
        </div>
    );
};

export default Talk;
