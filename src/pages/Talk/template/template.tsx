import React from 'react';
import { makeUpperStart } from '../../../common/util/util';
import styled from 'styled-components';

import SmallPhoto from '../../../common/components/organism/SmallPhotoComp';
import { useState, useEffect } from 'react';

import { NavRepository } from '../../../common/modules/repository/navRepository';
import Button from '../../../common/components/molecules/Button';
import { Link } from 'react-router-dom';

// export interface TalkItem {
//     id?: string;
//     title?: string;
//     text?: string;
//     src?: string;
// }

// export type TalkObj = { classic_talk: ItemArray };
// export type ItemArray = Array<TalkItem>;

//propstype
export interface TalkTemplate {
    title: string;
}

const TalkTemplate: React.FC<TalkTemplate> = ({ title }): JSX.Element => {
    const [talkData, setTalkData] = useState([]);
    const talkRepo = new NavRepository('http://localhost:3000/data/talk.json');

    useEffect(() => {
        const talkData = talkRepo.getNav();
        talkData.then((res) => setTalkData(res['classic_talk']));
    }, []);

    return (
        <TalkWrapper>
            <TitleWrapper>
                <span>Talk About {makeUpperStart(title)}</span>
            </TitleWrapper>
            <PhotoWrapper>
                {talkData?.map(({ userId, title, text, src, id }) => (
                    <Link to={`/article/${id}`}>
                        <SmallPhoto userId={userId} title={title} text={text} src={src} />
                    </Link>
                ))}
            </PhotoWrapper>
            <ButtonWrapper>
                <div
                    onClick={() => {
                        () => talkRepo.doPagination();
                    }}
                >
                    <Button text="See More" margin="0 4vw  0 0" width="15vw" height="8vh" />
                </div>
            </ButtonWrapper>
        </TalkWrapper>
    );
};

const TitleWrapper = styled.section`
    text-align: center;
    width: 100%;
    font-size: 3rem;
    margin: 4vh 0;
    span {
        margin-right: 4vw;
    }
`;

const TalkWrapper = styled.section`
    width: 80%;
    margin: auto;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 4vh 0;
`;

const PhotoWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    a {
        text-decoration: none;
        color: black;
        border: 1px solid white;
        transition: all 0.5s ease-in-out;
        &:hover {
            border: 1px solid gray;
        }
    }
`;

export default TalkTemplate;
