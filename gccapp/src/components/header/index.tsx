import CircularProgressBar from '../ciruclarProgressbar';
import {HeaderContainer, HeaderLogo, HeaderMenu, HeaderItem} from './elements';
import {Link } from 'react-router-dom';

interface HeaderProps {
    
}

const Header: React.FC<HeaderProps> = () => {

    return (
        <HeaderContainer>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <HeaderLogo>
                    <img src="https://via.placeholder.com/100" alt="logo" />
                </HeaderLogo>
            </Link>
            <HeaderMenu>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HeaderItem>Home</HeaderItem>
                </Link>
                <Link to="/journey" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HeaderItem>Journey</HeaderItem>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HeaderItem>About</HeaderItem>
                </Link>
                <Link to="/badges" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HeaderItem>Badges</HeaderItem>
                </Link>
                <CircularProgressBar progress={35} />
            </HeaderMenu>
        </HeaderContainer>
    );
}

export default Header;