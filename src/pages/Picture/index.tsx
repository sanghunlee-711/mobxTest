import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import PictureTemplate from './template/template';

export interface PictureMatchParams {
    title: string;
    optionalParam?: string;
}

const Picture: React.FC<RouteComponentProps<PictureMatchParams>> = ({ match }): JSX.Element => {
    const { title } = match.params;

    return (
        <>
            <PictureTemplate title={title} />
        </>
    );
};

export default Picture;
