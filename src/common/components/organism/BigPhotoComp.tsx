import React from 'react';
import styled from 'styled-components';
interface BigPhotoInterface {
    body?: string;
    width?: string;
    height?: string;
    text?: string;
    //추후 백에서 랭크 1위의 사진을 받아서 3개 렌더하기 위한 src
    src?: string;
}

const BigPhoto: React.FC<BigPhotoInterface> = ({ width, height, text, src }): JSX.Element => {
    return (
        <PhotoWrapper width={width} height={height}>
            <ImageDiv width={width} height={height} text={text} src={src} />
            {text && <p>{text} </p>}
        </PhotoWrapper>
    );
};

const PhotoWrapper = styled.div<{ width?: string; height?: string }>`
    height: ${(props) => (props.height ? props.height : '100%')};
    width: ${(props) => (props.width ? props.width : '100%')};
    &:nth-child(2) {
        margin: 0 1vw;
    }
    p {
        font-family: 'Playfair Display', serif;

        padding: 1vw;
        font-size: 47px;
        text-align: center;
    }
`;

const ImageDiv = styled.div<{ width?: string; height?: string; text?: string; src?: string }>`
    background-image: url('${(props) =>
        props.src
            ? props.src
            : 'https://www.patriciamcmahon.com/wp-content/uploads/2019/10/shotview-102063-h1000-q90-rz3-b75.jpg'}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    min-width: ${(props) => (props.width ? props.width : '30vw')};
    min-height: ${(props) => (props.height ? props.height : '86vh')};
    height: ${(props) => (props.text ? '80vh' : '91vh')};
    background-repeat: no-repeat;
    background-size: cover;
`;

export default BigPhoto;
