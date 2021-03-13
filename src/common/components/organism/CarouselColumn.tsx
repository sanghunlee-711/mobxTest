import React from 'react';
import styled from 'styled-components';
const CarouselColumn = (): JSX.Element => {
    return (
        <CarouselColumnContainer>
            <PhotoDiv />
            <UserContainer>
                <UserInfo>
                    <UserAndPhoto>
                        <UserPhoto />
                        <Name>ZANIE VERON</Name>
                    </UserAndPhoto>

                    <CorpPhoto />
                </UserInfo>
                <Title>
                    <span>Title</span>
                    <span>This is Sample title</span>
                </Title>
                <Contents>
                    <span>Contents</span>
                    <span>
                        This is Sample Contents This is Sample Contents This is Sample Contents This is Sample Contents
                        This is Sample Contents his is Sample Contents This is Sample Contents This is Sample Contents
                        This is Sample Contents This is Sample Contentshis is Sample Contents This is Sample Contents
                        This is Sample Contents This is Sample Contents This is Sample Contentshis is Sample Contents
                        This is Sample Contents This is Sample Contents This is Sample Contents This is Sample
                        Contentshis is Sample Contents This is Sample Contents This is Sample Contents This is Sample
                        Contents This is Sample Contentshis is Sample Contents This is Sample Contents This is Sample
                        Contents This is Sample Contents This is Sample Contentshis is Sample Contents This is Sample
                        Contents This is Sample Contents This is Sample Contents This is Sample Contents
                    </span>
                </Contents>
                <ButtonWrapper>
                    <Button>
                        <i className="fas fa-arrow-left fa-2x"></i>
                    </Button>
                    <Button>
                        <i className="fas fa-arrow-right fa-2x"></i>
                    </Button>
                </ButtonWrapper>
            </UserContainer>
        </CarouselColumnContainer>
    );
};

const ButtonWrapper = styled.div`
    display: flex;
    position: absolute;
    bottom: 5vh;
`;

const Button = styled.button`
    background-color: white;
    border: 1px solid gray;
    border-radius: 10px;
    width: 60px;
    height: 60px;
    margin: 0 10px;
    i {
        transition: all 0.5s ease-in-out;

        color: gray;
    }
    transition: all 0.5s ease-in-out;

    &:hover {
        border: 1px solid pink;

        i {
            color: pink;
        }
    }
`;
const ColumnTitlePhoto = styled.section`
    width: 80%;
    margin: auto;
    font-family: 'Playfair Display', serif;
`;
const CarouselColumnContainer = styled.section`
    width: 90%;
    display: flex;
    border: 1px solid white;
    transition: border 0.5s ease-in-out;
    margin: 10vh auto;
    &:hover {
        border: 1px solid black;
    }
`;

const UserAndPhoto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Name = styled.span`
    font-weight: 1000;
    margin-left: 10px;
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

const CorpPhoto = styled.div<{ src?: string }>`
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

const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 30px;
    position: relative;
`;

const Title = styled.div`
    color: black;
    display: flex;
    flex-direction: column;

    span {
        margin: 10px 0;

        &:nth-child(1) {
            font-weight: 800;
            font-size: 2rem;
        }
        &:nth-child(2) {
            color: gray;
            font-weight: 800;
            font-size: 1.2rem;
        }
    }
`;

const Contents = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    span {
        margin: 10px 0;
        &:nth-child(1) {
            font-weight: 700;
            font-size: 1.4rem;
        }
        &:nth-child(2) {
            color: gray;
            font-weight: 800;
            font-size: 0.8rem;
        }
    }
`;

const PhotoDiv = styled.div<{ src?: string }>`
    background-image: url('${(props) => (props.src ? props.src : 'https://picsum.photos/200')}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 70%;
    height: 70vh;
`;

export default CarouselColumn;
