import {
    HeaderContainer,
    HeaderTitle,
    NavList,
    SNSList,
    Wrapper,
    HideNav,
    HideNavWrapper,
    HideNavListWrapper,
    HideNavKey,
} from '../../styles/NavStyle';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IndexKind } from 'typescript';
import { HomeRepo } from '../../../pages/Home/modules/repository/respository';

interface NavigationBar {
    navData?: [];
    detailData?: [];
    key?: '';
    detailBool?: boolean;
    showDetailNav?: (key: string) => void;
    hideDetailNav?: () => void;
}

const Nav: React.FC<NavigationBar> = (): JSX.Element => {
    const [navData, setNavData] = useState([]);
    const [detailData, setDetailData] = useState([]);
    const [key, setKey] = useState('');
    const [detailBool, setDetailBool] = useState(false);
    useEffect(() => {
        const headerData = HomeRepo.getNav();
        headerData.then((res) => setNavData(res.NavData));
    }, []);

    const showDetailNav = (key: string) => {
        navData.forEach((el) => {
            if (el[key]) {
                setDetailData(el[key]);
                setKey(key);
                setDetailBool(true);
            }
        });
    };

    const hideDetailNav = () => {
        setDetailBool(false);
    };

    return (
        <div onMouseLeave={() => hideDetailNav()}>
            <HeaderContainer>
                <Wrapper>
                    <HeaderTitle>
                        <a href="/">{<p>Style Folks</p>}</a>
                    </HeaderTitle>
                    <NavList>
                        {navData
                            .map((el) => Object.keys(el))
                            .map((eachKey, index) => (
                                <li onMouseEnter={() => showDetailNav(eachKey[0])} key={`${eachKey[0]} + ${index}`}>
                                    {eachKey[0]}
                                </li>
                            ))}
                    </NavList>

                    <SNSList>
                        <li>
                            <span>LOGIN / REGISTER</span>
                        </li>
                        <li>
                            <i className="fas fa-search"></i>
                        </li>
                    </SNSList>
                </Wrapper>
            </HeaderContainer>
            <HideNav detailBool={detailBool}>
                <HideNavWrapper>
                    {detailBool && <HideNavKey>{key}</HideNavKey>}
                    <HideNavListWrapper>
                        {detailBool &&
                            detailData &&
                            detailData.map((el, index) => (
                                <span>
                                    <li key={`${el}${index}`}>{el}</li>
                                </span>
                            ))}
                    </HideNavListWrapper>
                </HideNavWrapper>
            </HideNav>
        </div>
    );
};

export default Nav;
