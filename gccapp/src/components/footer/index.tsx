import { FooterContainer, FooterColumn, FooterTitle, FooterText, FooterButton, FooterLogo, FooterDecoration, FooterDecorationBox } from './elements';
import { Blue, Green, Orange, Pink } from '../../colors';

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
                    <FooterLogo>
                        <img src="https://via.placeholder.com/100" alt="logo" />
                    </FooterLogo>
                    <FooterText>
                        <span dangerouslySetInnerHTML={{__html: "Platform of the Global Citizenship Certificate <br/>program established by Adela Garbal Gо́mez"}} />
                    </FooterText>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>Quick Links</FooterTitle>
                    <FooterText>About</FooterText>
                    <FooterText>Global Citizenship Program</FooterText>
                    <FooterText>Start Modules - E-learning</FooterText>
                    <FooterText>Stamps Collection</FooterText>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>Resources</FooterTitle>
                    <FooterText>Community</FooterText>
                    <FooterText>Cloud</FooterText>
                    <FooterText>My Page</FooterText>
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