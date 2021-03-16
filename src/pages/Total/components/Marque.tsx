import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//https://codepen.io/nickcil/pen/BygPMY
const Marque = (): JSX.Element => {
    return (
        <MoveMentContainer>
            <Set>
                <span>STYLE</span>
                <span>FOLKS</span>
                <span>SHOW</span>
                <span>ALL</span>
                <span>OF</span>
                <span>STREET</span>
            </Set>
            <Set>
                <span>STYLE</span>
                <span>FOLKS</span>
                <span>SHOW</span>
                <span>ALL</span>
                <span>OF</span>
                <span>STREET</span>
            </Set>
        </MoveMentContainer>
    );
};

const MoveMentContainer = styled.div`
    width: 200%;
    height: 40vh;
    background-color: black;
    display: flex;
    justify-content: space-around;
    overflow: scroll;
    position: relative;

    /* overflow: hidden; */
    animation: marquee 5s linear infinite;

    @keyframes marquee {
        0% {
            left: 0;
        }
        100% {
            left: -100%;
        }
    }
`;

const Set = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;

    /* color: red; */
    font-size: 4rem;
    animation: textColor 5s linear infinite;
    @keyframes textColor {
        0% {
            color: red;
        }
        50% {
            color: yellowgreen;
        }
        100% {
            color: red;
        }
    }
`;
export default Marque;
