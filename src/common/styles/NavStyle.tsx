import styled from 'styled-components';

export const HeaderContainer = styled.nav`
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    min-width: 980px;
    width: 100vw;
    color: black;
    font-family: 'Playfair Display', serif;
`;

export const NavList = styled.section`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    list-style: none;
    li {
        margin: 1vw;
        position: static;
    }
`;

export const SNSList = styled(NavList)`
    color: gray;

    li {
        &:hover {
            color: red;
            transition: color 0.5s ease-in-out;
        }
    }
`;

export const HeaderTitle = styled.div`
    color: red;
    min-width: 100px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    a {
        margin: 1vw;
        text-decoration: none;
        p {
            color: black;
            font-size: 35px;
            font-style: normal;
            font-variant-caps: normal;
            font-variant-east-asian: normal;
            font-variant-ligatures: normal;
            font-variant-numeric: normal;
            font-weight: 400;
        }
    }
`;

export const Wrapper = styled.section`
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

export const HideNav = styled.div<{ detailBool: boolean }>`
    visibility: ${(props) => (props.detailBool ? 'visible' : 'hidden')};
    height: ${(props) => (props.detailBool ? '25vh' : '0vw')};
    position: absolute;
    right: 0;
    left: 0;
    color: blue;
    border: 1px solid black;
    list-style: none;

    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: ceter;
`;

export const HideNavWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: ceter;
`;

export const HideNavKey = styled.p`
    color: black;
    font-size: 35px;
    font-style: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-weight: 400;

    margin: auto;
`;

export const HideNavListWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li {
        color: black;
        font-size: 35px;
        font-style: normal;
        font-variant-caps: normal;
        font-variant-east-asian: normal;
        font-variant-ligatures: normal;
        font-variant-numeric: normal;
        font-weight: 400;

        margin: auto;
    }
`;
