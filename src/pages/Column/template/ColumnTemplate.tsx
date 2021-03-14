import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SmallPhotoCompHorizon } from '../../../common/components/organism/SmallPhotoCompHorizon';
import SmallPhotoComp from '../../../common/components/organism/SmallPhotoComp';
import CarouselColumn from '../../../common/components/organism/CarouselColumn';
import { NavRepository } from '../../../common/modules/repository/navRepository';
import Button from '../../../common/components/molecules/Button';

interface ColumnTitleData {
    userId?: string;
    title?: string;
    src?: string;
    contents?: string;
    id?: number;
    date?: string;
    text?: string;
}

interface ColumnData {
    'title-data'?: ColumnTitleData[];
    'card-data'?: ColumnTitleData[];
}
interface Indexing {
    [idx: number]: ColumnTitleData[];
}

const ColumnTemplate: React.FC = (): JSX.Element => {
    const [columnData, setColumnData] = useState<ColumnData>({});
    const [titleData, setTitleData] = useState<Indexing[]>([]);
    const [smallData, setSmallData] = useState<Indexing[]>([]);

    useEffect(() => {
        console.log('useEffect');
    }, []);

    useEffect(() => {
        const newRepo = new NavRepository('http://localhost:3000/data/column.json');
        const data = newRepo.getNav();
        data.then((res) => {
            setColumnData(res);
            setTitleData(res['title-data']);
            setSmallData(res['card-data']);
        });
    }, []);

    return (
        <ColumnContainer>
            <CarouselColumn titleData={titleData} />
            <SamllCardContainer>
                {smallData?.map((el) => (
                    <SmallPhotoCompHorizon />
                ))}
            </SamllCardContainer>
            <ButtonWrapper>
                <Button width={'18vw'} height={'8vh'} text={'See More Post'} margin={'8vh 0'} />
            </ButtonWrapper>
        </ColumnContainer>
    );
};

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ColumnContainer = styled.section`
    width: 80%;
    margin: auto;
    font-family: 'Playfair Display', serif;
`;

const SamllCardContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    justify-content: space-evenly;
`;

export default ColumnTemplate;
