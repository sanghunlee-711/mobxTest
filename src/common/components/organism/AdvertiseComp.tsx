import React from 'react';
import styled from 'styled-components';
import { TinyPictureWrapper, AdverTiseWrapper, AdPartWrapper, TinyTitle } from '../../styles/AdvertiseStyle';
import TinyPicture from '../atoms/TinyPicture';
interface AdverTise {
    src?: string;
}

const AdverTiseComp: React.FC<AdverTise> = ({ src }): JSX.Element => {
    return (
        <AdverTiseWrapper>
            <AdPartWrapper>
                {/* <p>Hello Style Folks</p> */}
                <TinyPicture src={src} width="100%" height="30vh" margin="0" />
            </AdPartWrapper>
            <TinyTitle>Find Your Own Picture!</TinyTitle>
            <TinyPictureWrapper>
                <TinyPicture src={src} />
                <TinyPicture src={src} />
                <TinyPicture src={src} />
                <TinyPicture src={src} />
                <TinyPicture src={src} />
                <TinyPicture src={src} />
            </TinyPictureWrapper>
        </AdverTiseWrapper>
    );
};

export default AdverTiseComp;
