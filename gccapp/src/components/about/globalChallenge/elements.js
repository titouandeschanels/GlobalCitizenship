import styled from "styled-components";
import { White, Blue, Gray } from '../../../colors';

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const CenteredImage = styled.img`
    max-width: 55%;
    height: auto;
    object-fit: contain;
    padding-top: 20px;
    padding-bottom: 5px;
`;

export const List = styled.ul`
    margin-top: 30px;
    margin-bottom: 50px;
    line-height: 1.6;
    list-style-type: disc;
`;

export const ListItem = styled.li`
    font-size: 15px;
    margin-top: 10px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    gap: 15vw;
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Blue};
    color: ${White};
    font-weight: bold;
    font-size: 15px;
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    width: 70%;
    height: 3.2vw;
    box-shadow: 1px 1px 4px ${Gray};
    
    &:hover {
        box-shadow: 2px 2px 4px ${Gray};
    }
`;