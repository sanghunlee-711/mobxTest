import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Marque from './Marque';
import TotalCardComp from '../components/TotalCardComp';
import SmallPhoto from '../../../common/components/organism/SmallPhotoComp';

const StreetTotal: React.FC = (): JSX.Element => {
    return (
        <StreeTotalContainer>
            <Marque />
            <CardWrapper>
                <div>
                    <Link to="/rank/street">
                        <TotalCardComp text={'street'} />
                    </Link>
                </div>
                <div>
                    <Link to="/talk/street">
                        <TotalCardComp text={'talk'} />
                    </Link>
                </div>
                <div>
                    <Link to="/picture/street">
                        <TotalCardComp text={'picture'} />
                    </Link>
                </div>
            </CardWrapper>
        </StreeTotalContainer>
    );
};

const StreeTotalContainer = styled.section`
    width: 80%;
    overflow: hidden;
    margin: 0 auto;
    height: 100vh;
    background-color: white;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export default StreetTotal;
