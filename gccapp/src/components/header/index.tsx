import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Black, Green } from '../../colors';
import CircularProgressBar from '../ciruclarProgressbar';
import { HeaderContainer, HeaderLogo, HeaderMenu, HeaderItem } from './elements';


const Header: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const defineColor = (path: string) => {
        if (isActive(path)) {
            return Green
        } else {
            return Black
        }
    }
    
    return (
        <HeaderContainer>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <HeaderLogo>
                    <img src="https://via.placeholder.com/100" alt="logo" />
                </HeaderLogo>
            </Link>
            <HeaderMenu>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HeaderItem color={defineColor('/')}>Home</HeaderItem>
                </Link>
                <Link to="/journey" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HeaderItem color={defineColor('/journey')}>Journey</HeaderItem>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HeaderItem color={defineColor('/about')}>About</HeaderItem>
                </Link>
                <Link to="/badges" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HeaderItem color={defineColor('/badges')}>Badges</HeaderItem>
                </Link>
                <CircularProgressBar progress={35} />
            </HeaderMenu>
        </HeaderContainer>
    );
}

export default Header;
