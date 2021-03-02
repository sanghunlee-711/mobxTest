import React, { useEffect, useState } from 'react';
import Button from '../../common/components/molecules/Button';
import { LoginContainer, LoginWrapper, InputWrapper, ButtonWrapper } from './style/style';

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
                <ButtonWrapper>
                    <Button margin="0" width="50%" height="8vh" text="Login" fontSize="1.5rem" />
                    <Button margin="0" width="50%" height="8vh" text="Register" fontSize="1.5rem" />
                </ButtonWrapper>
            </LoginWrapper>
        </LoginContainer>
    );
};

export default Login;
