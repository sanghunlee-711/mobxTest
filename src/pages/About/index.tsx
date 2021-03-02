import React from 'react';
import styled from 'styled-components';
import {
    AboutContainer,
    AboutWrapper,
    TextContainer,
    TextWrapper,
    ImageContainer,
    ImageContainerReverse,
    TextContainerReverse,
    TextWrapperReverse,
} from './style/style';

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
                        <img src="https://picsum.photos/200" alt="Hello" />
                    </ImageContainer>
                </AboutWrapper>
            </AboutContainer>

            <AboutContainer>
                <AboutWrapper>
                    <ImageContainerReverse>
                        <img src="https://picsum.photos/200" alt="Hello" />
                    </ImageContainerReverse>
                    <TextContainerReverse>
                        <TextWrapperReverse>
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
                        </TextWrapperReverse>
                    </TextContainerReverse>
                </AboutWrapper>
            </AboutContainer>
        </>
    );
};

export default About;
