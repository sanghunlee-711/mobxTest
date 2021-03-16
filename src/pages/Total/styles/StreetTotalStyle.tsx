import styled from 'styled-components';

const MoveMentContainer = styled.div`
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const MovementWrite = styled.div`
    color: black;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    animation: move 5s linear infinite;
    background-color: black;
    height: 100%;
    font-family: 'Stick', sans-serif;

    min-width: 100vw;

    //https://codepen.io/cooper5/pen/eYNgLoJ
    @keyframes glow {
        from {
            color: #fff;
            text-shadow: 0 0 10px #00fff2, 0 0 20px #00fff2, 0 0 30px #00fff2, 0 0 40px #00fff2, 0 0 50px #00fff2,
                0 0 60px #00fff2, 0 0 70px #00fff2, 0 0 90px #00fff2;
        }

        to {
            color: gray;
            text-shadow: 0 0 20px #00fff2, 0 0 30px #00fff2, 0 0 40px #00fff2, 0 0 50px #00fff2, 0 0 60px #00fff2,
                0 0 70px #00fff2, 0 0 80px #00fff2, 0 1 90px #00fff2;
        }
    }

    @keyframes move {
        0% {
            transform: translateX(-100%);
            /* scale: scale3d(1, 1, 1); */
            transform-style: preserve-3d;
            will-change: transform;
        }

        100% {
            transform: translateX(calc(150%));
            transform-style: preserve-3d;
            will-change: transform;
        }
    }

    @keyframes marquee {
        from {
            text-indent: 100%;
        }
        to {
            text-indent: -100%;
        }
    }
`;

const Text = styled.div`
    min-width: 100%;
    /* height: 100px; */
    font-size: 8rem;
    float: left;
    overflow: visible;
    color: red;
`;

export { Text, MoveMentContainer, MovementWrite };
