import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../../common/components/molecules/Button';

const RegisterTemplate: React.FC = (): JSX.Element => {
    const [idValue, setIdValue] = useState('');
    const [pwValue, setpwValue] = useState('');
    const [pwReValue, setpwReValue] = useState('');
    const [birthValue, setbirthValue] = useState('');
    const [brandValue, setBrandValue] = useState('');

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target as HTMLInputElement;
        console.log(idValue);
        switch (name) {
            case 'id':
                setIdValue(value);
                break;
            case 'pw':
                setpwValue(value);
                break;
            case 'pwRe':
                setpwReValue(value);
                break;
            case 'birth':
                setbirthValue(value);
                break;
            case 'brand':
                setBrandValue(value);
                break;
            default:
                throw new Error('Not Input');
        }
    };

    return (
        <RegisterContainer>
            <InputContainer>
                <label htmlFor="idInput">아이디</label>
                <InputWrapper>
                    <input name="id" id="idInput" type="text" value={idValue} onChange={(e) => onChangeHandler(e)} />
                </InputWrapper>
                <Button text="중복체크" margin="0 10px" />
            </InputContainer>
            <ShowText>Ex)style@stylefolks.com</ShowText>

            <InputContainer>
                <label htmlFor="pwInput">비밀번호</label>
                <input name="pw" id="pwInput" type="text" value={pwValue} onChange={(e) => onChangeHandler(e)} />
            </InputContainer>
            <InputContainer>
                <label htmlFor="pwReInput">비밀번호 확인</label>
                <input name="pwRe" id="pwReInput" type="text" value={pwReValue} onChange={(e) => onChangeHandler(e)} />
            </InputContainer>
            <ShowText>비밀번호가 동일하지 않습니다.</ShowText>
            <InputContainer>
                <p>성별</p>
                <Button text="Men" margin="10px 10px 10px 0" />
                <Button text="Women" margin="10px" />
            </InputContainer>
            <InputContainer>
                <label htmlFor="birthInput">생년월일</label>
                <input
                    name="birth"
                    id="birthInput"
                    type="text"
                    value={birthValue}
                    onChange={(e) => onChangeHandler(e)}
                />
            </InputContainer>
            <ShowText>Ex)20210320</ShowText>
            <InputContainer>
                <label htmlFor="brandInput">좋아하는 브랜드</label>
                <input
                    name="brand"
                    id="brandInput"
                    type="text"
                    value={brandValue}
                    onChange={(e) => onChangeHandler(e)}
                />
            </InputContainer>
            <ShowText> (정보를 드릴게요!)</ShowText>

            <Button text="Submit" margin="5vh 0" />
        </RegisterContainer>
    );
};

const RegisterContainer = styled.section`
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

const ShowText = styled.div`
    font-size: 1rem;
    color: red;
    width: 100%;
    visibility: visible;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputContainer = styled.div`
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

export default RegisterTemplate;
