import React from 'react';
import styled from 'styled-components';

interface Button {
    text?: string;
    width?: string;
    height?: string;
}

const Button: React.FC<Button> = ({ text, width, height }): JSX.Element => {
    return (
        <ButtonWrapper width={width} height={height}>
            {text ? text : 'HelloHter'}
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.button<{ width?: string; height?: string; text?: string }>`
    border: 1px solid black;
    width: ${(props) => (props.width ? props.width : '10vw')};
    height: ${(props) => (props.height ? props.height : '5vh')};
    text-align: center;
    font-family: 'Playfair Display', serif;

    background-color: white;
    color: black;
    transition: all 0.5s ease-in-out;

    &:hover {
        color: white;
        background-color: black;
    }
`;

export default Button;
