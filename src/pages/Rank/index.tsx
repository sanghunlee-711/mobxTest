import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface RankMatchParams {
    title: string;
    optionalParam?: string;
}

const Rank: React.FC<RouteComponentProps<RankMatchParams>> = ({ match }): JSX.Element => {
    const { title } = match.params;

    return <div>{`Hello${title}Rank`}</div>;
};

export default Rank;
