import React from 'react';

interface ArticleTemplateInter {
    id: string;
}

const ArticleTemplate: React.FC<ArticleTemplateInter> = ({ id }): JSX.Element => {
    return (
        <div>
            <span>Hello {id}th Article</span>
        </div>
    );
};

export default ArticleTemplate;
