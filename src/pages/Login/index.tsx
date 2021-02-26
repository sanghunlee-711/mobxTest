import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { LoginStoreImpl } from './module/store/store';
import { observer } from 'mobx-react';

interface LoginProps {
    closeBool: boolean;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Login: React.FC<LoginProps> = ({ closeBool, handleClick }) => {
    return (
        <LoginContainer closeBool={closeBool}>
            <LoginWrapper>
                <button name="loginPopUp" onClick={(e) => handleClick(e)}>
                    Gonna be Quit Btn
                </button>
            </LoginWrapper>
        </LoginContainer>
    );
};

const LoginContainer = styled.section<{ closeBool: boolean }>`
    /* background-color: white; */
    background-color: hsla(120, 0%, 75%, 0.3);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    width: 100vw;
    height: 100vh;
    display: flex;
    display: ${(props) => (props.closeBool ? 'none' : 'flex')};
    /* closeBool true일때 화면 닫힘 */
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

const LoginWrapper = styled.div`
    min-width: 30vw;
    min-height: 30vh;
    margin: auto;
    background-color: black;
    color: white;
    opacity: 1;
    z-index: 101;
`;
