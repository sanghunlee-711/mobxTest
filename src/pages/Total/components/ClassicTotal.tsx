import React from 'react';
import styled from 'styled-components';
import BigPhoto from '../../../common/components/organism/BigPhotoComp';
import CubeComponent from './CubeComponent';
const ClassicTotal: React.FC = (): JSX.Element => {
    return (
        <ClassicTotalContainer>
            <PhotoContainer>
                <BigPhoto width="30%" height="30%" />
                <CubeContainer></CubeContainer>
            </PhotoContainer>
        </ClassicTotalContainer>
    );
};

const ClassicTotalContainer = styled.section`
    width: 80%;
    margin: 0 auto;
`;

const CubeContainer = styled.div`
    display: flex;
`;

const PhotoContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
`;

export default ClassicTotal;
