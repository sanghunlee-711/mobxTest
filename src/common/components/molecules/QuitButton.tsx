import React from 'react';
import styled from 'styled-components';

const QuitButton = (): JSX.Element => {
    return (
        <QuitButtonContainer>
            <i className="fas fa-times fa-3x" />
        </QuitButtonContainer>
    );
};

const QuitButtonContainer = styled.div`
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

export default QuitButton;
