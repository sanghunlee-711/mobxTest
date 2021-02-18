import { FooterContainer, SNSListWrapper, FooterWrapper } from '../../styles/FooterStyle';

interface Footer {
    check?: string;
}

const FooterImpl: React.FC<Footer> = (): JSX.Element => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <ul>
                    <li>StyleFolks</li>
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
                    <li>Blog</li>
                </ul>
            </FooterWrapper>
        </FooterContainer>
    );
};
export default FooterImpl;
