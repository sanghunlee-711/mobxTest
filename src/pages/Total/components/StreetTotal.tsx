import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Marque from './Marque';
const StreetTotal: React.FC = (): JSX.Element => {
    return (
        <StreeTotalContainer>
            <Marque />
        </StreeTotalContainer>
    );
};

const StreeTotalContainer = styled.section`
    width: 80%;
    overflow: hidden;
    margin: 0 auto;
`;

export default StreetTotal;
