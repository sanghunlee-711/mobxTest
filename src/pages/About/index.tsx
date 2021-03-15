import React from 'react';
import styled from 'styled-components';
import CubeComponent from '../Total/components/CubeComponent';

const About = (): JSX.Element => {
    return (
        <>
            <AboutContainer>
                <AboutWrapper>
                    <TextContainer>
                        <TextWrapper>
                            <h1>Meet the face behind the posts</h1>
                            <span>
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
                                “Edit Text” or double click me to add your own content and make changes to the font.
                                Feel free to drag and drop me anywhere you like on your page. I’m a great place for you
                                to tell a story and let your users know a little more about you. ​ This is a great space
                                to write a long text about your company and your services. You can use this space to go
                                into a little more detail about your company. Talk about your team and what services you
                                provide. Tell your visitors the story of how you came up with the idea for your business
                                and what makes you different from your competitors. Make your company stand out and show
                                your visitors who you are.
                            </span>
                        </TextWrapper>
                    </TextContainer>
                    <ImageContainer>
                        <CubeComponent />
                    </ImageContainer>
                </AboutWrapper>
            </AboutContainer>
            {/* <AboutContainer>
                <AboutWrapper>
                    <ImageContainer>
                        <img src="https://picsum.photos/200" alt="Hello" />
                    </ImageContainer>
                    <TextContainer>
                        <h1> Meet the face behind the posts </h1>
                        <span>
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit
                            Text” or double click me to add your own content and make changes to the font. Feel free to
                            drag and drop me anywhere you like on your page. I’m a great place for you to tell a story
                            and let your users know a little more about you. ​ This is a great space to write a long
                            text about your company and your services. You can use this space to go into a little more
                            detail about your company. Talk about your team and what services you provide. Tell your
                            visitors the story of how you came up with the idea for your business and what makes you
                            different from your competitors. Make your company stand out and show your visitors who you
                            are.
                        </span>
                    </TextContainer>
                </AboutWrapper>
            </AboutContainer> */}
        </>
    );
};

const AboutContainer = styled.section`
    width: 100vw;
    height: 80vh;
    margin: 10vh 0;
`;
const TextContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    // background-color: #fcf6f5;
    border: 1px solid black;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TextWrapper = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h1 {
        font-size: 3rem;
        margin: 1vw;
    }
    span {
        font-family: 'Raleway', sans-serif;
        font-size: 18px;
        margin: 1vw;
    }
`;

const AboutWrapper = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    background-color: white;
    height: 100%;
`;

const ImageContainer = styled.div`
    width: 10%;
    section {
        /* height: 364px;
        width: 490px; */
        transform: translate(-75%, 75%);
    }
`;

export default About;
