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
import Button from '../molecules/Button';
import { makeUpperStart } from '../../util/util';
import Search from './SearchModal';
import { NavRepository } from '../../modules/repository/navRepository';

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
    const _headerData = new NavRepository(undefined);

    useEffect(() => {
        const headerData = _headerData.getNav();
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
                                    onClick={() => setDetailBool(false)}
                                    key={`${eachKey} + ${index}`}
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
                        <li onClick={() => setSearchModal(!searchModal)}>
                            <i className="fas fa-search"></i>
                        </li>
                    </LoginList>
                </Wrapper>
            </HeaderContainer>
            <HideNav detailBool={detailBool}>
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
            {searchModal ? <Search searchModal={searchModal} setSearchModal={setSearchModal} /> : <></>}
        </div>
    );
};

export default Nav;
