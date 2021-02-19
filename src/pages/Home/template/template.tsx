import React from 'react';
import Button from '../../../common/components/molecules/Button';
import AdverTiseComp from '../../../common/components/organism/AdvertiseComp';
import BigPhoto from '../../../common/components/organism/BigPhotoComp';
import SmallPhoto from '../../../common/components/organism/SmallPhotoComp';

import {
    MainTitlePhotoWrapper,
    MainWrapper,
    SmallTitlePhotoWrapper,
    MainContentsContainer,
    AdverTiseWrapper,
} from '../style/style';
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

                <MainContentsContainer>
                    <SmallTitlePhotoWrapper>
                        <SmallPhoto />
                        <SmallPhoto />
                        <SmallPhoto />
                        <Button width={'18vw'} height={'8vh'} text={'See More Post'} margin={'4vh 0 0 0'} />
                    </SmallTitlePhotoWrapper>
                    <AdverTiseWrapper>
                        <AdverTiseComp />
                    </AdverTiseWrapper>
                </MainContentsContainer>
            </MainWrapper>
        </>
    );
};

export default HomeTemplate;
