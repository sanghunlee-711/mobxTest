import React from 'react';
import styled from 'styled-components';

interface Tiny {
    src?: string;
    width?: string;
    height?: string;
    margin?: string;
}

const TinyPicture: React.FC<Tiny> = ({ src, width, height, margin }): JSX.Element => {
    return (
        <div>
            <SmallImage src={src} width={width} height={height} margin={margin} />
        </div>
    );
};

const SmallImage = styled.div<{ src?: string; width?: string; height?: string; margin?: string }>`
    background-image: url(${(props) => (props.src ? props.src : 'https://picsum.photos/200')});
    // width: 15vw;
    width: ${(props) => (props.width ? props.width : '15vw')};
    height: ${(props) => (props.width ? props.height : '20vh')};
    margin: ${(props) => (props.margin ? props.margin : '0.3vw')};
    min-width: 190px;
    min-height: 190px;
    // // height: 20vh;
    // margin: 0.3vw;
`;

export default TinyPicture;
