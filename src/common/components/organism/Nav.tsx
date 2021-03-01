import {
    HeaderContainer,
    HeaderTitle,
    NavList,
    LoginList,
    Wrapper,
    HideNav,
    HideNavWrapper,
    HideNavListWrapper,
    HideNavKey,
    HideNavImage,
    HideNavList,
} from '../../styles/NavStyle';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IndexKind } from 'typescript';
import { NavRepo } from '../../../common/modules/repository/navRepository';
import Button from '../molecules/Button';
import Login from '../../../pages/Login';
import { LoginStoreImpl } from '../../../pages/Login/module/store/store';

interface LoginProps {
    loginStore: LoginStoreImpl;
}

interface NavigationBar {
    navData?: [];
    detailData?: [];
    key?: '';
    detailBool?: boolean;
    closeBool?: boolean;
    setCloseBool?: () => void;
    showDetailNav?: (key: string) => void;
    hideDetailNav?: () => void;
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Nav: React.FC<NavigationBar> = (): JSX.Element => {
    const [navData, setNavData] = useState([]);
    const [detailData, setDetailData] = useState([]);
    const [detailTitle, setDetailTitle] = useState([]);
    const [detailImage, setDetailImage] = useState([]);
    const [key, setKey] = useState('');
    const [imageIndex, setImageIndex] = useState(0);
    const [detailBool, setDetailBool] = useState(false);
    const [closeBool, setCloseBool] = useState(false);

    useEffect(() => {
        const headerData = NavRepo.getNav();
        headerData.then((res) => setNavData(res.NavData));
    }, []);

    const showDetailNav = (key: string) => {
        navData.forEach((el) => {
            if (el[key]) {
                setDetailData(el[key]);
                setDetailTitle(el[key]['title']);
                setDetailImage(el[key]['src']);
                setKey(key);
                setDetailBool(true);
            }
        });
    };

    const hideDetailNav = () => {
        setDetailBool(false);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { name, value } = e.target as HTMLButtonElement;

        if (name === 'loginPopUp') {
            if (closeBool === false) {
                setCloseBool(true);
            } else {
                setCloseBool(false);
            }
        }

        console.log(e);
    };

    return (
        <div onMouseLeave={() => hideDetailNav()}>
            <HeaderContainer>
                <Wrapper>
                    <HeaderTitle>
                        <Link to="/">{<p>Style Folks</p>}</Link>
                    </HeaderTitle>
                    <NavList>
                        {navData
                            .map((el) => Object.keys(el))
                            .map((eachKey, index) => (
                                <Link to={eachKey[0] === 'Home' ? '/' : eachKey[0]}>
                                    <li onMouseEnter={() => showDetailNav(eachKey[0])} key={`${eachKey[0]} + ${index}`}>
                                        {eachKey[0]}
                                    </li>
                                </Link>
                            ))}
                    </NavList>
                    {/* <Login closeBool={closeBool} handleClick={handleClick} /> */}
                    <LoginList>
                        <li>
                            <Link to="/login">
                                <Button text={'LOGIN / REGISTER'} width={'160px'} height={'35px'} />
                            </Link>
                        </li>
                        <li>
                            <i className="fas fa-search"></i>
                        </li>
                    </LoginList>
                </Wrapper>
            </HeaderContainer>
            <HideNav detailBool={detailBool} onClick={() => console.log(detailData)}>
                <HideNavWrapper>
                    {detailBool && (
                        <HideNavKey>
                            {key} of {detailTitle[imageIndex]}
                        </HideNavKey>
                    )}
                    {/* <img src={detailImage[imageIndex]} alt="Top Rank Pic" /> */}
                    <HideNavListWrapper>
                        {detailBool &&
                            detailTitle &&
                            detailTitle.map((el, index) => (
                                <>
                                    <Link
                                        to={`/${key}/${detailTitle[imageIndex]}`}
                                        onMouseOver={() => setImageIndex(index)}
                                        key={`${el} + ${index}`}
                                    >
                                        <HideNavList src={detailImage[imageIndex]} key={`${el}${index}`}>
                                            {el}
                                            {/* 이미지 순차적으로 큐빅으로 나타내게 하기 */}
                                            <HideNavImage src={detailImage[imageIndex]} />
                                        </HideNavList>
                                    </Link>
                                </>
                            ))}
                    </HideNavListWrapper>
                </HideNavWrapper>
            </HideNav>
        </div>
    );
};

export default Nav;

{
    /* <HideNavListWrapper>
                        {detailBool &&
                            detailData &&
                            detailData.map((el, index) => (
                                <span>
                                    <li key={`${el}${index}`}>{el}</li>
                                </span>
                            ))}
                    </HideNavListWrapper> */
}
