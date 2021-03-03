import React, { useEffect, useState } from 'react';
import Button from '../../common/components/molecules/Button';
import { LoginContainer, LoginWrapper, InputWrapper, ButtonWrapper } from './style/style';

import { LoginRepository } from '../../stores/repository/LoginRepository';
import { observer } from 'mobx-react';

//함수형 컴포넌트에 props로 넘길 타입 지정 필요
export interface LoginProps {
    //interface를 implement한 클래스를 타입으로 지정해주자
    loginRepo: LoginRepository;
}

//함수형 컴포넌트의 props타입 적용 ,, observer()를 통해서 컴포넌트에 적용
export const LoginTemplate: React.FC<LoginProps> = observer(({ loginRepo }) => {
    const status = loginRepo?.status;

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
                    <span
                        onClick={() => {
                            console.log(loginRepo);
                            loginRepo?.changeLoginToken();
                        }}
                    >
                        {/* 안녕 {loginRepo?.loginToken} */}
                        {loginRepo?.loginToken ? <div>Hello There</div> : <div>It's Change</div>}
                        <div onClick={() => loginRepo.plusCount()}>{loginRepo.count}</div>
                    </span>
                </ButtonWrapper>
            </LoginWrapper>
        </LoginContainer>
    );
});
