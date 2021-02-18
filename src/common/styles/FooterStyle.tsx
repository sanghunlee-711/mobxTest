import styled from 'styled-components';

export const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    font-family: 'Playfair Display', serif;

    font-size: 25px;
    font-style: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-weight: 300;
    border-top: 1px solid black;
    list-style: none;
    color: gray;
    display: flex;
    justify-content: space-between;
    padding: 3vh;
    ul {
        display: flex;
        width: 100%;
        justify-content: center;
    }
    li {
        text-align: center;
        width: 100%;
        &:hover {
            color: red;
            transition: color 0.5s ease-in-out;
        }
    }
`;

export const FooterWrapper = styled.section`
    width: 80vw;
    margin: auto;
    display: flex;
    justify-content: space-between;
`;

export const SNSListWrapper = styled.ul`
    list-style: none;
    display: flex;

    li {
        &:hover {
            color: red;
            transition: color 0.5s ease-in-out;
        }
    }
`;
