import React from 'react';
import ClassicTotal from '../components/ClassicTotal';
import FolksTotal from '../components/FolksTotal';
import StreetTotal from '../components/StreetTotal';

interface TotalTemplateProps {
    title: string;
}

const TotalTemplate: React.FC<TotalTemplateProps> = ({ title }): JSX.Element => {
    switch (title) {
        case 'classic':
            return <ClassicTotal />;
        case 'folks':
            return <FolksTotal />;
        case 'casual':
            return <FolksTotal />;
        case 'street':
            return <StreetTotal />;
        default:
            return <ClassicTotal />;
    }
};

export default TotalTemplate;
