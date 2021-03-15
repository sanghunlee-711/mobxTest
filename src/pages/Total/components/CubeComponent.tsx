import React from 'react';
import styled from 'styled-components';

//ref: https://codepen.io/tjegan/pen/OXgaNy
const CubeComponent = (): JSX.Element => {
    return (
        <CubeWrapper>
            <Cube>
                <Back />
                <Left />
                <Right />
                <Top />
                <Bottom />
                <Front />
            </Cube>
        </CubeWrapper>
    );
};

const CubeWrapper = styled.section`
    perspective: 800px;
    //https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 300px;
    background: url('https://i.imgur.com/2WQui47.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
`;

const Cube = styled.div`
    transform-style: preserve-3d;
    position: realative;
    width: 300px;
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    animation: rotate 10s ease-in-out infinite;
    @keyframes rotate {
        0% {
            transform: rotateX(0);
        }
        12% {
            transform: rotateY(90deg);
        }
        25% {
            transform: rotateY(270deg);
        }
        37% {
            transform: rotateY(270deg);
        }
        50% {
            transform: rotateY(360deg);
        }
        62% {
            transform: rotateX(90deg);
        }
        75% {
            transform: rotateX(180deg);
        }
        85% {
            transform: rotateX(270deg);
        }
        100% {
            transform: rotateX(360deg);
        }
    }

    &:hover {
        animation: rotate 10s ease-in-out forward;
    }
`;

const Side = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: #333;
    opacity: 0.95;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Back = styled(Side)`
    transform: translateZ(-150px) rotateX(180deg);
    background-image: url('https://source.unsplash.com/featured/?nature');
`;

const Left = styled(Side)`
    transform: translateX(-150px) rotateY(90deg);
    background-image: url('https://source.unsplash.com/featured/?tree');
`;
const Right = styled(Side)`
    transform: translateX(150px) rotateY(90deg);
    background-image: url('https://source.unsplash.com/featured/?home');
`;
const Top = styled(Side)`
    transform: translateY(-150px) rotateX(90deg);
    background-image: url('https://source.unsplash.com/featured/?car');
`;

const Bottom = styled(Side)`
    transform: translateY(150px) rotateX(270deg);
    background-image: url('https://source.unsplash.com/featured/?work');
`;

const Front = styled(Side)`
    transform: translateZ(150px);
    background-image: url('https://source.unsplash.com/featured/?');
`;

export default CubeComponent;
