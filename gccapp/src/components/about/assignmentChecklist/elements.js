import styled from "styled-components";
import { White, LightGray } from '../../../colors';

export const BoxContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin: 0 auto;
    gap: 20px;
    padding-top: 0;
    padding-bottom: 50px;
`;

export const Box = styled.div`
    background-color: ${White};
    color: #333;
    width: 30%;
    padding: 8px 20px;
    border-radius: 10px;
    border: 1px solid ${LightGray};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
`;

export const Header = styled.h3`
    font-size: 16px;
    margin-bottom: 10px;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 3px;
    font-size: 14px;
    line-height: 1.4;
`;

export const BulletIcon = styled.img`
    margin-right: 10px;
    width: 20px;
    height: 20px;
`;