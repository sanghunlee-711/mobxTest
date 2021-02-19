import styled from 'styled-components';

export const AdverTiseWrapper = styled.section`
    min-width: 540px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    background-color: white;

    margin: 1vh 0;
    font-family: 'Playfair Display', serif;

    transition: all 0.5s ease-in-out;
    &:hover {
        border: 1px solid #fcf6f5;
        background-color: #fcf6f5;
        border-radius: 10px;
    }
`;
export const TinyPictureWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // width: 22vw;
    // min-width: 390px;
    margin: 3vh 0 7vh 0;
`;

export const AdPartWrapper = styled.div`
    color: red;
    width: 30.6vw;
    min-width: 390px;
    // border: 1px solid black;
    // height: 30vh;
    min-heigth: 390px;
    margin-top: 6vh;
`;

export const TinyTitle = styled.p`
    color: black;
    font-weight: 400;
    font-size: 40px;
    margin: 5vh 0 0 0;
`;
