import React, { Dispatch, SetStateAction } from 'react';
import { NavRepository } from '../../modules/repository/navRepository';
import styled from 'styled-components';
//props type for useState
//https://stackoverflow.com/questions/56028635/passing-usestate-as-props-in-typescript

interface SearchInter {
    searchModal: boolean;
    setSearchModal: Dispatch<SetStateAction<boolean>>;
}

const Search: React.FC<SearchInter> = ({ searchModal, setSearchModal }): JSX.Element => {
    return (
        <SearchContainer>
            <SearchWrapper>
                <span>Search</span>
                <ButtonWrapper>
                    <i className="fas fa-times fa-3x" onClick={() => setSearchModal(!searchModal)} />
                </ButtonWrapper>
                <InputWrapper>
                    <input placeholder="Search What You Want!" type="text" autoFocus />
                    <i className="fas fa-search fa-3x" />
                </InputWrapper>
            </SearchWrapper>
        </SearchContainer>
    );
};

const SearchContainer = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    min-height: 300% !important;
    /* width: 100vw;
    height: 100vh; */
    background-color: white;
    z-index: 1000;
    font-family: 'Playfair Display', serif;
`;

const SearchWrapper = styled.div`
    margin: 10vh auto;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50%;
    background-color: white;
    z-index: 1000;
    span {
        margin: 0 auto;
        font-size: 8rem;
    }
`;
const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5vw 0;

    input {
        width: 90%;
        height: 80px;
        font-size: 2.5rem;
        border: 1px solid white;
        border-bottom: 1px solid black;
        transition: all 0.5s ease-in-out;

        &:hover {
            border: 1px solid black;
            border-bottom: 1px solid black;
        }
    }

    i {
        color: gray;
        transition: all 0.5s ease-in-out;

        &:hover {
            color: black;
        }
    }
`;

const ButtonWrapper = styled.div`
    z-index: 1001;
    position: absolute;
    right: 10vw;
    i {
        transition: all 0.5s ease-in-out;

        &:hover {
            transform: rotate(90deg);
        }
    }
`;

export default Search;
