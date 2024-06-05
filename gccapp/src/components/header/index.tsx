import React, { useState } from 'react';
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
                <MenuItem path="/" label="Home" isActive={isActive('/')}/>
                <MenuItem path="/journey" label="Journey" isActive={isActive('/journey')}/>
                <MenuItem path="/about" label="About" isActive={isActive('/about')}/>
                <MenuItem path="/badges" label="Badges" isActive={isActive('/badges')}/>
                <CircularProgressBar progress={35} />
            </HeaderMenu>
        </HeaderContainer>
    );
}

interface MenuItemProps {
    path: string;
    label: string;
    isActive: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ path, label, isActive }) => {
    const [hover, setHover] = useState(false);

    return (
        <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
            <HeaderItem
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {label}
                <IconContainer>
                    {(isActive || hover) && <Icon />}
                </IconContainer>
            </HeaderItem>
        </Link>
    );
};

export default Header;
