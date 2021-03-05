import React from 'react';
import ArticleTemplate from './template/template';
import { RouteComponentProps } from 'react-router-dom';

interface ArticleMatchParams {
    id: string;
}

const Article: React.FC<RouteComponentProps<ArticleMatchParams>> = ({ match }): JSX.Element => {
    const { id } = match.params;

    return (
        <>
            <ArticleTemplate id={id} />
        </>
    );
};

export default Article;
