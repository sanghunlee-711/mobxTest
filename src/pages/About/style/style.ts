import styled from 'styled-components';

const AboutContainer = styled.section`
    width: 100vw;
    height: 80vh;
    margin: 10vh 0;
`;
const TextContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    // background-color: #fcf6f5;
    border: 1px solid black;
    hegiht: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TextWrapper = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h1 {
        font-size: 3rem;
        margin: 1vw;
    }
    span {
        font-family: 'Raleway', sans-serif;
        font-size: 18px;
        margin: 1vw;
    }
`;

const AboutWrapper = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    background-color: white;
    height: 100%;
`;

const ImageContainer = styled.div`
    width: 10%;
    img {
        height: 364px;
        width: 490px;
        transform: translate(-80%, 35%);
    }
`;

//reverse version

const ImageContainerReverse = styled.div`
    width: 10%;
    border: 1px solid black;
    img {
        height: 364px;
        width: 490px;
        transform: translate(-15%, 35%);
    }
`;

const TextWrapperReverse = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    h1 {
        font-size: 3rem;
        margin: 1vw;
    }
    span {
        font-family: 'Raleway', sans-serif;
        font-size: 18px;
        margin: 1vw;
    }
`;

const TextContainerReverse = styled.div`
    width: 90%;
    margin: 0 auto;
    border: 1px solid black;
    hegiht: 100%;
    display: flex;
    justify-content: flex-end;
`;

export {
    AboutContainer,
    TextContainer,
    TextWrapper,
    AboutWrapper,
    ImageContainer,
    ImageContainerReverse,
    TextWrapperReverse,
    TextContainerReverse,
};
