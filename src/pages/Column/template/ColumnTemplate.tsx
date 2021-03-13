import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SmallPhotoCompHorizon } from '../../../common/components/organism/SmallPhotoCompHorizon';
import SmallPhotoComp from '../../../common/components/organism/SmallPhotoComp';
import CarouselColumn from '../../../common/components/organism/CarouselColumn';
import { NavRepository } from '../../../common/modules/repository/navRepository';

interface ColumnTitleData {
    userId?: string;
    title?: string;
    src?: string;
    contents?: string;
    id?: number;
    date?: string;
}

interface ColumnData {
    'title-data'?: ColumnTitleData;
    'card-data'?: ColumnTitleData[];
}

const ColumnTemplate: React.FC = (): JSX.Element => {
    const [columnData, setColumnData] = useState<ColumnData>({});
    const [titleData, setTitleData] = useState<ColumnTitleData>({});
    const [smallData, setSmallData] = useState<ColumnTitleData[]>([]);

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
        <ColumnContainer
            onClick={() => {
                console.log(columnData);
            }}
        >
            <CarouselColumn />
            <SamllCardContainer>
                {smallData?.map((el) => (
                    <SmallPhotoCompHorizon />
                ))}
            </SamllCardContainer>
        </ColumnContainer>
    );
};

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
