import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import CircularProgressBar from '../ciruclarProgressbar';
import { HeaderContainer, HeaderLogo, HeaderMenu, HeaderItem, IconContainer, Icon } from './elements';
import Logo from '../../assets/logo/mainLogo.png';

const Header: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <HeaderContainer>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <HeaderLogo>
                    <img src={Logo} alt="logo" />
                </HeaderLogo>
            </Link>
            <HeaderMenu>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HeaderItem>
                        Home
                        <IconContainer>
                            {isActive('/') && <Icon />}
                        </IconContainer>
                    </HeaderItem>
                </Link>
                <Link to="/journey" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HeaderItem>
                        Journey
                        <IconContainer>
                            {isActive('/journey') && <Icon />}
                        </IconContainer>
                    </HeaderItem>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HeaderItem>
                        About
                        <IconContainer>
                            {isActive('/about') && <Icon />}
                        </IconContainer>
                    </HeaderItem>
                </Link>
                <Link to="/badges" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HeaderItem>
                        Badges
                        <IconContainer>
                            {isActive('/badges') && <Icon />}
                        </IconContainer>
                    </HeaderItem>
                </Link>
                <CircularProgressBar progress={35} />
            </HeaderMenu>
        </HeaderContainer>
    );
}

export default Header;
