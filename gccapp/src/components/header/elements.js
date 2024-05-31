import styled from 'styled-components';
import { Green, Black, White } from '../../colors';

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    padding: 0 10px;
    background-color: ${White};
    color: ${Black};
    font-size: 14px;
    font-weight: 600;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    gap : 30vw;
`;

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    z-index: 101;
    user-select: none;
    transition: 0.3s;
    &:hover {
        width: 55px;
        height: 55px;
    }
`;

export const HeaderMenu = styled.div`
    display: flex;
    align-items: center;
    gap : 50px;
`;

export const HeaderItem = styled.div`
    display: flex;
    align-items: center;
    margin: 0 10px;
    cursor: pointer;
    user-select: none;
    &:hover {
        color: ${Green};
    }
    font-size: 20px;
    transition: 0.3s;
`;

export const HeaderButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
    background-color: ${Green};
    color: ${Black};
    font-size: 16px;
    font-weight: 600;
    &:hover {
        background-color: ${White};
        color: ${Black};
    }
    right: 0;
    transition: 0.3s;
`;
