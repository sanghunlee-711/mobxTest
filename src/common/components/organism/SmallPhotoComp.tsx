import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { makeUpperStart } from '../../util/util';
interface SmallPhotoInterface {
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

const SmallPhoto: React.FC<SmallPhotoInterface> = ({ width, height, text, src, title, userId }): JSX.Element => {
    return (
        <PhotoWrapper>
            <ImageDiv width={width} height={height} text={text} src={src} />
            <TextWrapper>
                <DateWrapper>
                    <p>2020-02-23</p>
                    <p>Update 2min ago</p>
                </DateWrapper>
                <IDwrapper>
                    <Link to={`/search/${userId}`}>{userId != undefined ? userId : 'ID!!'}</Link>
                </IDwrapper>
                <TitleWrapper>
                    {title ? <h2>{makeUpperStart(title)} </h2> : <h2>This is Sample Title </h2>}
                </TitleWrapper>
                {text ? (
                    <Text>{text} </Text>
                ) : (
                    <Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nemo vitae temporibus,
                        molestiae officiis quas enim iure quaerat odit quos tempore tenetur modi doloribus similique,
                        incidunt necessitatibus unde perferendis ut!
                    </Text>
                )}
                <LikeWrapper>
                    <p>
                        <i className="far fa-heart"></i> 11
                    </p>
                    <p>
                        <i className="far fa-comment"></i> 11
                    </p>
                </LikeWrapper>
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

const LikeWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

    div {
        display: flex;
    }
`;

const IDwrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 1vh 3vw 2vh 0;

    a {
        text-decoration: none;
        color: black;
        transition: all 0.5s ease-in-out;

        &:hover {
            color: red;
        }
    }
`;

const DateWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-weight: 400;
        font-size: 1.1rem;
        &:nth-child(2) {
            font-size: 0.9rem;
            color: gray;
        }
    }
`;

const TitleWrapper = styled.div`
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
`;

const Text = styled.p`
    color: gray;
    display: inline-block;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    // line-height: 1.2;
    // height: 3.8em;
    // text-align: left;
    // word-wrap: break-word;
    // -webkit-line-clamp: 3;
    font-size: 1rem;
    line-height: 1.2;
    height: 2.5em;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    h1 {
        font-weight: 800;
        font-size: 1.5rem;
    }
`;

const ImageDiv = styled.div<{ width?: string; height?: string; text?: string; src?: string }>`
    background-image: url('${(props) => (props.src ? props.src : 'https://picsum.photos/200')}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    min-width: ${(props) => (props.width ? props.width : '265px')};
    min-height: ${(props) => (props.height ? props.height : '285px')};
    // height: ${(props) => (props.text ? '80vh' : '90vh')};
    background-repeat: no-repeat;
    background-size: cover;
`;

export default SmallPhoto;
