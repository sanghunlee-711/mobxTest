import styled from 'styled-components';

export const RegisterContainer = styled.section`
    width: 80%;
    margin: 10vh auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 5vh;
    font-family: 'Playfair Display', serif;
`;

export const ShowText = styled.div<{
    idTestBool?: boolean;
    pwTestBool?: boolean;
    samePw?: boolean;
    birthBool?: boolean;
    brandBool?: boolean;
}>`
    font-size: 1rem;
    color: red;
    width: 100%;
    transition: all 0.5s ease-in-out;
    visibility: ${({ idTestBool, pwTestBool, samePw, birthBool, brandBool }) =>
        idTestBool || pwTestBool || samePw || birthBool || brandBool ? 'hidden' : 'visible'};
    opacity: ${({ idTestBool, pwTestBool, samePw, birthBool, brandBool }) =>
        idTestBool || pwTestBool || samePw || birthBool || brandBool ? '0' : '1'};
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PickButton = styled.button<{ margin?: string; gender?: string }>`
    border: 1px solid black;
    border: 1px solid black;
    width: 11vw;
    height: 5vh;
    font-size: 16px;

    text-align: center;
    font-family: 'Playfair Display', serif;
    margin: ${(props) => (props.margin ? props.margin : '0')};
    background-color: white;
    color: black;
    transition: all 0.5s ease-in-out;
    color: ${({ gender }) => (gender === 'men' ? 'white' : 'black')};
    background-color: ${({ gender }) => (gender === 'men' ? 'black' : 'white')};

    &:hover {
        color: white;
        background-color: black;
    }
`;

export const WomenButton = styled(PickButton)`
    background-color: ${({ gender }) => (gender === 'women' ? 'black' : 'white')};
    color: ${({ gender }) => (gender === 'women' ? 'white' : 'black')};
`;

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 1vh 0;
    justify-content: flex-start;
    align-items: center;

    p {
        color: gray;
        margin-right: 20px;
        font-size: 1.2rem;
        width: 160px;
    }
    label {
        color: gray;
        margin-right: 20px;
        font-size: 1.2rem;
        width: 160px;
    }
    input {
        height: 4vh;
        font-size: 2rem;
    }
    select {
        height: 4vh;
    }
    option {
        height: 4vh;
        font-size: 2rem;
    }
`;
