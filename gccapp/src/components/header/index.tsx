import CircularProgressBar from '../ciruclarProgressbar';
import {HeaderContainer, HeaderLogo, HeaderMenu, HeaderItem} from './elements';
import {Link} from 'react-router-dom';
import Logo from '../../assets/logo/mainLogo.png';

interface HeaderProps {
    
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <HeaderContainer>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <HeaderLogo>
                    <img src={Logo} alt="logo"/>
                </HeaderLogo>
            </Link>
            <HeaderMenu>
                {/* <HeaderItem>Journey</HeaderItem>
                <HeaderItem>Community</HeaderItem>
                <HeaderItem>Cloud</HeaderItem>
                <HeaderItem>My Page</HeaderItem> */}
                <Link to="/journey" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HeaderItem>Journey</HeaderItem>
                </Link>
                <Link to="/community" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HeaderItem>Community</HeaderItem>
                </Link>
                <Link to="/cloud" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HeaderItem>Cloud</HeaderItem>
                </Link>
                <Link to="/mypage" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HeaderItem>My Page</HeaderItem>
                </Link>
                <CircularProgressBar progress={35} />
            </HeaderMenu>
        </HeaderContainer>
    );
}

export default Header;