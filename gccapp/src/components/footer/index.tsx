import { FooterContainer, FooterColumn, FooterTitle, FooterText, FooterButton, FooterLogo, FooterDecoration, FooterDecorationBox } from './elements';
import { Blue, Green, Orange, Pink } from '../../colors';
import { Link } from 'react-router-dom';

interface FooterProps {
    
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div>
            <FooterDecoration>
                <FooterDecorationBox color = {Blue} />
                <FooterDecorationBox color = {Green} />
                <FooterDecorationBox color = {Orange} />
                <FooterDecorationBox color = {Pink} />
            </FooterDecoration>
            <FooterContainer>
                <FooterColumn>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FooterLogo>
                            <img src="https://via.placeholder.com/100" alt="logo" />
                        </FooterLogo>
                    </Link>
                    <FooterText>
                        <span dangerouslySetInnerHTML={{__html: "Platform of the Global Citizenship Certificate <br/>program established by Adela Garbal Gо́mez"}} />
                    </FooterText>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>Quick Links</FooterTitle>
                    <Link to="/journey" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FooterText>Journey</FooterText>
                    </Link>
                    <FooterText>About</FooterText>
                    <FooterText>Badges Collection</FooterText>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>Resources</FooterTitle>
                    <Link to="/community" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FooterText>Community</FooterText>
                    </Link>
                    <Link to="/cloud" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FooterText>Cloud</FooterText>
                    </Link>
                    <Link to="/mypage" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FooterText>My Page</FooterText>
                    </Link>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>Contact</FooterTitle>
                    <FooterText>
                    <a href="mailto:a.garabalgomez@hhs.nl" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Mail
                    </a>
                    </FooterText>
                </FooterColumn>
            </FooterContainer>
        </div>
    );
}

export default Footer;