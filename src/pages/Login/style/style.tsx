import styled from 'styled-components';

const LoginContainer = styled.section`
    width: 100vw;
    height: 90vh;
    margin-top: 10vh;
`;

const ButtonWrapper = styled.div`
    display: flex;
    div {
        width: 100%;
        button {
            width: 100%;
        }
    }
    a {
        width: 100%;
        button {
            width: 100%;
        }
    }
`;

const LoginWrapper = styled.div`
    width: 40%;
    margin: 0 auto;
    display: flex;
    padding: 3vw;
    flex-direction: column;

    h1 {
        font-size: 3rem;
        font-family: 'Playfair Display', serif;
        margin: 4vh 0 8vh 0;
    }
    border: 1px solid white;
    background-color: white;
    transition: all 0.5s ease-in-out;
    &:hover {
        border: 1px solid black;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;

    /* p {

        width: 100%;
    } */
    input {
        font-family: 'Playfair Display', serif;
        border-bottom: 2px solid black;
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        height: 5vh;
        font-size: 1rem;
        margin: 1vh 1vh 2vh 0;
    }
`;

const ValidWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Playfair Display', serif;
    p {
        &:nth-child(1) {
            width: 40%;
            font-size: 2rem;
        }
        &:nth-child(2) {
            margin-left: 2vw;
            width: 60%;
            color: red;
            font-size: 1rem;
        }
    }
`;

export { LoginContainer, LoginWrapper, InputWrapper, ButtonWrapper, ValidWrapper };
