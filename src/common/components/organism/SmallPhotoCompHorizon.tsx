import React from 'react';
import styled from 'styled-components';

interface SmallPhotoCompHorizonInter {
    body?: string;
    width?: string;
    height?: string;
    text?: string;
    //추후 백에서 랭크 1위의 사진을 받아서 3개 렌더하기 위한 src
    src?: string;
    title?: string;
    userId?: string;
    id?: number;
}

export const SmallPhotoCompHorizon: React.FC<SmallPhotoCompHorizonInter> = ({ src, width, height }): JSX.Element => {
    return (
        <SmallPhotoContainer width={width} height={height}>
            <SmallPhoto>
                <PhotoDiv src="https://picsum.photos/200" />
            </SmallPhoto>
            <TextWrapper>
                <Title>Hello This is Title</Title>
                <Contents>
                    This is Sample Contents This is Sample ContentsThis is Sample ContentsThis is Sample Contents
                </Contents>
                <UserWrapper>
                    <UserPhoto src={src} />
                    <UserInfoWrapper>
                        <ID>SANGHUN LEE</ID>
                        <Date>
                            <p>Feb 26, 2021</p>
                            <p>· 3</p>
                            <p>Min</p>
                        </Date>
                    </UserInfoWrapper>
                </UserWrapper>
            </TextWrapper>
        </SmallPhotoContainer>
    );
};

const SmallPhotoContainer = styled.section<{ width?: string; height?: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 380px;
    /* min-height: 300px; */
`;

const SmallPhoto = styled.div`
    border: 1px solid black;
`;
const Title = styled.span`
    color: black;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: 'Playfair Display', serif;
`;
const Contents = styled.p`
    font-family: 'Playfair Display', serif;
    font-size: 0.8rem;
    margin: 5px 0 0 0;
`;

const UserWrapper = styled.div`
    display: flex;
    margin: 10px 0;
`;
const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ID = styled.p`
    font-weight: 500;
    margin: 5px 0;
`;

const Date = styled.div`
    margin: 0;

    display: flex;
    color: gray;
    font-size: 1em;
    p {
        margin: 0 5px;
    }
`;

const UserPhoto = styled.div<{ src?: string }>`
    background-image: url('${(props) => (props.src ? props.src : 'https://picsum.photos/200')}');
    overflow: hidden;
    width: 50px;
    height: 50px;
    min-height: 50px;
    min-width: 50px;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 25px;
`;

const PhotoDiv = styled.div<{ src?: string }>`
    background-image: url('${(props) => (props.src ? props.src : 'https://picsum.photos/200')}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-width: 380px;
    min-height: 300px;
`;
