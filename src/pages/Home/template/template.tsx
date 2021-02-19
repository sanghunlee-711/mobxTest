import React from 'react';
import BigPhoto from '../../../common/components/organism/BigPhotoComp';
import { MainTitlePhotoWrapper, MainWrapper } from '../style/style';

interface HomeInterface {
    body?: string;
}

const HomeTemplate: React.FC<HomeInterface> = (): JSX.Element => {
    return (
        <>
            <MainWrapper>
                <MainTitlePhotoWrapper>
                    <BigPhoto width={'479px'} />
                    <BigPhoto text={'Style Folks'} />
                    <BigPhoto />
                </MainTitlePhotoWrapper>
            </MainWrapper>
        </>
    );
};

export default HomeTemplate;
