import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../../common/components/molecules/Button';
import { idRegEx, pwRegEx } from '../../../common/constants/constant';

const RegisterTemplate: React.FC = (): JSX.Element => {
    const [idValue, setIdValue] = useState('');
    const [pwValue, setpwValue] = useState('');
    const [pwReValue, setpwReValue] = useState('');
    const [gender, setGender] = useState('');
    const [birthValue, setbirthValue] = useState('');
    const [brandValue, setBrandValue] = useState('');

    const [idTestBool, setIdTestBool] = useState(false);
    const [pwTestBool, setPwTestBool] = useState(false);
    const [samePw, setSamePw] = useState(false);

    const checkId = () => {
        const idValidation: boolean = idRegEx.test(idValue.toLowerCase());
        idValidation ? setIdTestBool(true) : setIdTestBool(false);
    };
    useEffect(() => {
        pwValue === pwReValue ? setSamePw(true) : setSamePw(false);
    }, [pwValue, pwReValue]);

    const checkPw = () => {
        const pwValidation: boolean = pwRegEx.test(pwValue);
        pwValidation ? setPwTestBool(true) : setPwTestBool(false);
        console.log(`pw: ${pwValue} re: ${pwReValue}`);
    };

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { name } = e.target as HTMLButtonElement;

        switch (name) {
            case 'men':
                setGender(name);
                break;
            case 'women':
                setGender(name);
                break;

            default:
                throw new Error('Not Input');
        }

        console.log(name);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target as HTMLInputElement;
        switch (name) {
            case 'id':
                setIdValue(value);
                checkId();
                break;
            case 'pw':
                setpwValue(value);
                checkPw();
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
            <ShowText idTestBool={idTestBool}>Ex)style@stylefolks.com</ShowText>

            <InputContainer>
                <label htmlFor="pwInput">비밀번호</label>
                <input name="pw" id="pwInput" type="password" value={pwValue} onChange={(e) => onChangeHandler(e)} />
            </InputContainer>
            <ShowText pwTestBool={pwTestBool}>숫자와 특수문자를 포함한 8자 이상 20자 이내로 해주세요</ShowText>

            <InputContainer>
                <label htmlFor="pwReInput">비밀번호 확인</label>
                <input
                    name="pwRe"
                    id="pwReInput"
                    type="password"
                    value={pwReValue}
                    onChange={(e) => onChangeHandler(e)}
                />
            </InputContainer>
            <ShowText samePw={samePw}>비밀번호가 동일하지 않습니다.</ShowText>
            <InputContainer>
                <p>성별</p>
                <PickButton gender={gender} onClick={(e) => onClickHandler(e)} name="men" margin="10px 10px 10px 0">
                    Men
                </PickButton>
                <WomenButton gender={gender} onClick={(e) => onClickHandler(e)} name="women" margin="10px">
                    Women
                </WomenButton>
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

const ShowText = styled.div<{ idTestBool?: boolean; pwTestBool?: boolean; samePw?: boolean }>`
    font-size: 1rem;
    color: red;
    width: 100%;
    transition: all 0.5s ease-in-out;
    visibility: ${({ idTestBool, pwTestBool, samePw }) => (idTestBool || pwTestBool || samePw ? 'hidden' : 'visible')};
    opacity: ${({ idTestBool, pwTestBool, samePw }) => (idTestBool || pwTestBool || samePw ? '0' : '1')};
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const PickButton = styled.button<{ margin?: string; gender?: string }>`
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

const WomenButton = styled(PickButton)`
    background-color: ${({ gender }) => (gender === 'women' ? 'black' : 'white')};
    color: ${({ gender }) => (gender === 'women' ? 'white' : 'black')};
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
