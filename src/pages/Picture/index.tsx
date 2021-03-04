import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface PictureMatchParams {
    title: string;
    optionalParam?: string;
}

const Picture: React.FC<RouteComponentProps<PictureMatchParams>> = ({ match }): JSX.Element => {
    const { title } = match.params;

    return <div>{`Hello${title}Picture`}</div>;
};

export default Picture;
