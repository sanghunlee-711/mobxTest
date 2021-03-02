import styled from 'styled-components';

const LoginContainer = styled.section`
    width: 100vw;
    height: 90vh;
    margin-top: 10vh;
`;

const ButtonWrapper = styled.div`
    display: flex;
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

    p {
        font-family: 'Playfair Display', serif;
        font-size: 2rem;
        width: 100%;
    }
    input {
        font-family: 'Playfair Display', serif;
        border-bottom: 2px solid black;
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        height: 5vh;
        font-size: 2rem;
        margin: 1vh 1vh 2vh 0;
    }
`;

export { LoginContainer, LoginWrapper, InputWrapper, ButtonWrapper };
