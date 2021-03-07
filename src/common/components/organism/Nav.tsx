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
import { NavRepo } from '../../../common/modules/repository/navRepository';
import Button from '../molecules/Button';
import styled from 'styled-components';
import { makeUpperStart } from '../../util/util';

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
    const [searchModal, setSearchModal] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);
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

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        const { className } = e.target as HTMLElement;

        if (className === 'fas fa-search' || className === 'fas fa-times') {
            setSearchModal(!searchModal);
        }

        console.log(e);
    };

    return (
        <div onMouseLeave={() => hideDetailNav()}>
            <HeaderContainer>
                <Wrapper>
                    <HeaderTitle>
                        <Link to="/">{<p>Create Pie</p>}</Link>
                    </HeaderTitle>
                    <NavList>
                        {navData
                            .map((el) => Object.keys(el))
                            .map((eachKey, index) => (
                                <Link
                                    to={
                                        eachKey[0] === 'home'
                                            ? '/'
                                            : `/total/${eachKey[0]}` === '/total/about'
                                            ? '/about'
                                            : `/total/${eachKey[0]}`
                                    }
                                >
                                    <li onMouseEnter={() => showDetailNav(eachKey[0])} key={`${eachKey[0]} + ${index}`}>
                                        {makeUpperStart(eachKey[0])}
                                    </li>
                                </Link>
                            ))}
                    </NavList>
                    <LoginList>
                        <li>
                            {loginStatus ? (
                                <Link to="/editor">
                                    <Button text={'POST'} width={'160px'} height={'35px'} />
                                </Link>
                            ) : (
                                <Link to="/login">
                                    <Button text={'LOGIN / REGISTER'} width={'160px'} height={'35px'} />
                                </Link>
                            )}
                        </li>
                        <li>
                            {searchModal ? (
                                <i className="fas fa-times" onClick={(e) => handleClick(e)} />
                            ) : (
                                <i className="fas fa-search" onClick={(e) => handleClick(e)} />
                            )}
                            <SearchInputWrapper searchModal={searchModal}>
                                <SearchInput searchModal={searchModal} />
                                <i className="fas fa-search"></i>
                            </SearchInputWrapper>
                        </li>
                    </LoginList>
                </Wrapper>
            </HeaderContainer>
            <HideNav detailBool={detailBool} onClick={() => console.log(detailData)}>
                <HideNavWrapper>
                    {detailBool && (
                        <HideNavKey>
                            {makeUpperStart(key)} of {makeUpperStart(detailTitle[imageIndex])}
                        </HideNavKey>
                    )}
                    {/* <img src={detailImage[imageIndex]} alt="Top Rank Pic" /> */}
                    <HideNavListWrapper>
                        {detailBool &&
                            detailTitle &&
                            detailTitle.map((el, index) => (
                                <>
                                    <Link
                                        to={
                                            key === 'folks'
                                                ? `/${detailTitle[imageIndex]}`
                                                : `/${detailTitle[imageIndex]}/${key}`
                                        }
                                        onMouseOver={() => setImageIndex(index)}
                                        onClick={() => setDetailBool(false)}
                                        key={`${el} + ${index}`}
                                    >
                                        <HideNavList src={detailImage[imageIndex]} key={`${el}${index}`}>
                                            {makeUpperStart(el)}
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

const SearchInputWrapper = styled.div<{ searchModal: boolean }>`
    visibility: ${(props) => (props.searchModal ? 'visible' : 'hidden')};
    display: flex;
    position: absolute;
`;

const SearchInput = styled.input<{ searchModal: boolean }>`
    /* boolean 체크해서 width 만들었다 없앴다로 하자 .. data저장은 store 그리고 axios는 repository로 */
    width: ${(props) => (props.searchModal ? '10vw' : '0')};
    transition: all 0.5s ease-in-out;
    height: 30px;
`;

export default Nav;
