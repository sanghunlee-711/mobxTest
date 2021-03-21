import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../common/components/molecules/Button';
import { idRegEx, pwRegEx, birthRegExp } from '../../../common/constants/constants';
import RegisterModule from '../module/RegisterModule';
import {
    RegisterContainer,
    ShowText,
    InputWrapper,
    PickButton,
    WomenButton,
    InputContainer,
} from '../style/RegisterStyle';
interface UserInfo {
    id: string;
    pw: string;
    gender: string;
    birth: string;
    brand: string;
}
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
    const [birthBool, setBirthBool] = useState(false);
    const [brandBool, setBrandBool] = useState(false);
    //useHistory()훅은 함수안에서는 선언이 불가능하다고 한다. 컴포넌트 수준에서 선언필요
    const history = useHistory();

    useEffect(() => {
        pwValue === pwReValue ? setSamePw(true) : setSamePw(false);
    }, [pwValue, pwReValue]);

    useEffect(() => {
        checkBirth();
    }, [birthValue]);

    useEffect(() => {
        checkBrand();
    }, [brandValue]);

    const checkPw = () => {
        const pwValidation: boolean = pwRegEx.test(pwValue);
        pwValidation ? setPwTestBool(true) : setPwTestBool(false);
    };

    const checkId = () => {
        const idValidation: boolean = idRegEx.test(idValue.toLowerCase());
        idValidation ? setIdTestBool(true) : setIdTestBool(false);
    };

    const checkBirth = () => {
        const birthValidation: boolean = birthRegExp.test(birthValue);
        birthValidation ? setBirthBool(true) : setBirthBool(false);
    };

    const checkBrand = () => {
        const brandValidation: boolean = brandValue.length >= 1;
        brandValidation ? setBrandBool(true) : setBrandBool(false);
    };

    const sendUserInfo = () => {
        //bool state통해서 관리해주면 될듯
        const userInfo: UserInfo = {
            id: idValue,
            pw: pwValue,
            gender: gender,
            birth: birthValue,
            brand: brandValue,
        };

        const registerRepo = new RegisterModule(userInfo);
        registerRepo.sendUserInfo();

        history.push('/login');
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
            case 'submit':
                sendUserInfo();
                break;

            default:
                throw new Error('Not Input');
        }
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
            <ShowText birthBool={birthBool}>Ex)20210320</ShowText>
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
            <ShowText brandBool={brandBool}> (정보를 드릴게요!)</ShowText>

            <PickButton onClick={(e) => onClickHandler(e)} name="submit" margin="5vh 0">
                Submit
            </PickButton>
        </RegisterContainer>
    );
};

export default RegisterTemplate;
