import { FooterContainer, SNSListWrapper, FooterWrapper } from '../../styles/FooterStyle';
import React from 'react';

interface Footer {
    check?: string;
}

const FooterImpl: React.FC<Footer> = (): JSX.Element => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <ul>
                    <li>By StyleFolks</li>
                    <li>Terms</li>
                </ul>
                <SNSListWrapper>
                    <li>
                        <i className="fab fa-facebook-square"></i>
                    </li>
                    <li>
                        <i className="fab fa-instagram"></i>
                    </li>
                    <li>
                        <i className="fab fa-twitter-square"></i>
                    </li>
                </SNSListWrapper>
                <ul>
                    <li>
                        <i className="fab fa-blogger-b"></i>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/sanghunlee-711/mobxTest">
                            <i className="fas fa-code"></i>
                        </a>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                    </li>
                </ul>
            </FooterWrapper>
        </FooterContainer>
    );
};
export default FooterImpl;
