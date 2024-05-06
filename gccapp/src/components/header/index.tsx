import {HeaderContainer, HeaderLogo, HeaderMenu, HeaderItem, HeaderButton} from './elements';

interface HeaderProps {
    
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <HeaderContainer>
            <HeaderLogo>
                <img src="https://via.placeholder.com/100" alt="logo" />
            </HeaderLogo>
            <HeaderMenu>
                <HeaderItem>Journey</HeaderItem>
                <HeaderItem>Community</HeaderItem>
                <HeaderItem>Cloud</HeaderItem>
                <HeaderItem>My Page</HeaderItem>
            </HeaderMenu>
        </HeaderContainer>
    );
}

export default Header;