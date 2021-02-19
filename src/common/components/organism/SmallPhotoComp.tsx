import React from 'react';
import styled from 'styled-components';
interface SmallPhotoInterface {
    body?: string;
    width?: string;
    height?: string;
    text?: string;
    //추후 백에서 랭크 1위의 사진을 받아서 3개 렌더하기 위한 src
    src?: string;
    title?: string;
}

const SmallPhoto: React.FC<SmallPhotoInterface> = ({ width, height, text, src, title }): JSX.Element => {
    return (
        <PhotoWrapper>
            <ImageDiv width={width} height={height} text={text} src={src} />
            <TextWrapper>
                <p>
                    {Date.now()} {`Update`}ago
                </p>
                {title ? <h1>{title} </h1> : <h1>This is Samhle Title </h1>}
                {text ? (
                    <p>{text} </p>
                ) : (
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nemo vitae temporibus,
                        molestiae officiis quas enim iure quaerat odit quos tempore tenetur modi doloribus similique,
                        incidunt necessitatibus unde perferendis ut!
                    </p>
                )}
            </TextWrapper>
        </PhotoWrapper>
    );
};

const PhotoWrapper = styled.div<{ width?: string; height?: string }>`
    display: flex;
    font-family: 'Playfair Display', serif;
    border: 1px solid black;
    margin: 1vh;
    max-width: 40vw;
    text-align: center;
    p {
        padding: 1vw;
        // font-size: 47px;
        text-align: center;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-weight: 100px;
    }
    p {
    }
`;

const ImageDiv = styled.div<{ width?: string; height?: string; text?: string; src?: string }>`
    background-image: url('${(props) => (props.src ? props.src : 'https://picsum.photos/200')}');
    background-repeat: none;
    min-width: ${(props) => (props.width ? props.width : '265px')};
    min-height: ${(props) => (props.height ? props.height : '285px')};
    // height: ${(props) => (props.text ? '80vh' : '90vh')};
`;

export default SmallPhoto;
