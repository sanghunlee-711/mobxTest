import React from 'react';
import styled from 'styled-components';

interface TotalProps {
    text: string;
}

const TotalCardComp: React.FC<TotalProps> = ({ text }): JSX.Element => {
    return (
        <TotalCardCompContainer>
            <PhotoDiv />
            <Text>{text}</Text>
        </TotalCardCompContainer>
    );
};

const TotalCardCompContainer = styled.div`
    position: relative;
    margin: 2vw;
    &:hover {
        color: red;
    }
`;

const PhotoDiv = styled.div<{ src?: string }>`
    background-image: url('${(props) => (props.src ? props.src : 'https://picsum.photos/200')}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-width: 380px;
    min-height: 300px;
`;

const Text = styled.span`
    position: absolute;

    //photo 길이 반 - (문자길이반/2)으로 중간 맞추기
    top: 40%;
    left: 20%;
    color: black;
    font-size: 5rem;
    font-weight: 700;
`;

export default TotalCardComp;
