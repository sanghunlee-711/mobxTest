import { title } from 'process';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../molecules/Button';
interface ColumnTitleData {
    userId?: string;
    title?: string;
    src?: string;
    contents?: string;
    id?: number;
    date?: string;
    text?: string;
}

// interface PropsIndexing {
//     [idx: number]: ColumnTitleData[];
// }

interface CarouselProps {
    titleData: ColumnTitleData[];
}
// interface Indexing {
//     [idx: number]: CarouselProps;
// }

const CarouselColumn: React.FC<CarouselProps> = ({ titleData }): JSX.Element => {
    const [idx, setIdx] = useState<number>(0);

    const moveContents = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { name } = e.currentTarget as HTMLButtonElement;
        console.log(name);

        const goPrev = () => {
            console.log('go Prev!');

            if (idx <= titleData.length - 1 && idx > 0) {
                setIdx(idx - 1);
            } else if (idx === 0) {
                setIdx(titleData.length - 1);
            }
            console.log(idx);
        };

        const goNext = () => {
            console.log('go Next!');
            if (idx >= titleData.length - 1) {
                setIdx(0);
            } else {
                setIdx(idx + 1);
            }
            console.log(idx);
        };

        switch (name) {
            case 'prev':
                goPrev();
                break;
            case 'next':
                goNext();
                break;
            default:
                alert('Not matched index of contents');
        }

        // console.log(idx);
    };

    return (
        <CarouselColumnContainer>
            <PhotoDiv src={titleData[idx]?.src} />
            <UserContainer>
                <UserInfo>
                    <UserAndPhoto>
                        <UserPhoto src={titleData[idx]?.src} />
                        <Name>{titleData[idx]?.userId}</Name>
                    </UserAndPhoto>

                    <CorpPhoto src={titleData[idx]?.src} />
                </UserInfo>
                <Title>
                    <span>Title</span>
                    <span>{titleData[idx]?.title}</span>
                </Title>
                <Contents>
                    <span>Contents</span>
                    <span>{titleData[idx]?.text}</span>
                </Contents>
                <CarouselButtonWrapper>
                    <CarouselButton name="prev" onClick={(e) => moveContents(e)}>
                        <i className="fas fa-arrow-left fa-2x"></i>
                    </CarouselButton>
                    <CarouselButton name="next" onClick={(e) => moveContents(e)}>
                        <i className="fas fa-arrow-right fa-2x"></i>
                    </CarouselButton>
                </CarouselButtonWrapper>
            </UserContainer>
        </CarouselColumnContainer>
    );
};

const CarouselButtonWrapper = styled.div`
    display: flex;
    position: absolute;
    bottom: 5vh;
`;

const CarouselButton = styled.button`
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
    transition: all 0.5s ease-in-out;
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
    transition: all 0.5s ease-in-out;
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
    transition: all 0.5s ease-in-out;
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
    transition: all 0.5s ease-in-out;

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
    transition: all 0.5s ease-in-out;
`;

export default CarouselColumn;
