import { FooterContainer, FooterColumn, FooterTitle, FooterText, FooterLogo, FooterDecoration, FooterDecorationBox } from './elements';
import { Blue, Green, Orange, Pink } from '../../colors';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logoAlternative.png';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div>
            <FooterDecoration>
                <FooterDecorationBox color={Blue} />
                <FooterDecorationBox color={Green} />
                <FooterDecorationBox color={Orange} />
                <FooterDecorationBox color={Pink} />
            </FooterDecoration>
            <FooterContainer>
                <FooterColumn>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FooterLogo>
                            <img src={Logo} alt="logo" style={{ width: '80px', height: '80px' }} />
                        </FooterLogo>
                    </Link>
                    <FooterText>
                        <span dangerouslySetInnerHTML={{ __html: "Platform of the Global Citizenship Certificate <br/>program established by Adela Garbal Gо́mez" }} />
                    </FooterText>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>Quick Links</FooterTitle>
                    <Link to="/journey" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FooterText>Journey</FooterText>
                    </Link>
                    <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FooterText>About</FooterText>
                    </Link>
                    <Link to="/badges" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FooterText>Badge Collection</FooterText>
                    </Link>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>Contact</FooterTitle>
                    <FooterText>
                        <a href="mailto:a.garabalgomez@hhs.nl" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Adela Garabal Gómez
                        </a>
                    </FooterText>
                </FooterColumn>
            </FooterContainer>
        </div>
    );
}

export default Footer;