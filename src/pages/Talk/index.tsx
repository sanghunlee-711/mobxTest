import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface TalkMatchParams {
    title: string;
    optionalParam?: string;
}

const Talk: React.FC<RouteComponentProps<TalkMatchParams>> = ({ match }): JSX.Element => {
    const { title } = match.params;

    return <div>{`Hello${title}Talk`}</div>;
};

export default Talk;
