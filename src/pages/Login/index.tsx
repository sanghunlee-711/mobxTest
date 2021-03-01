import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../common/components/molecules/Button';

const Login = (): JSX.Element => {
    return (
        <LoginContainer>
            <LoginWrapper>
                <h1>Let the posts come to you.</h1>
                <InputWrapper>
                    <p>Email *</p>
                    <input autoFocus type="text" />
                </InputWrapper>
                <InputWrapper>
                    <p>PassWord *</p>
                    <input type="text" />
                </InputWrapper>
                <Button margin="2vh auto" width="inherit" height="8vh" text="Login" fontSize="2rem" />
                <Button margin="1vh auto" width="inherit" height="8vh" text="Register" fontSize="2rem" />
            </LoginWrapper>
        </LoginContainer>
    );
};

const LoginContainer = styled.section`
    width: 100vw;
    height: 90vh;
    margin-top: 10vh;
`;

const LoginWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    padding: 3vw;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
    h1 {
        font-size: 3rem;
        font-family: 'Playfair Display', serif;
        margin: 4vh 0 8vh 0;
    }
    border: 1px solid black;
    background-color: white;
    transition: all 0.5s ease-in-out;
    &:hover {
        /* background-color: #bb593a; */
        border: 1px solid #bb593a;
        /* color: white; */
    }
    /* background-color: black; */
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: flex-start; */
    /* margin: 2vh 0; */

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
        /* width: 100%; */
    }
`;

export default Login;
