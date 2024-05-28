import styled from "styled-components";
import { White, Blue, Indigo, Gray } from '../../../colors';

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
    padding-bottom: 30px;
    border-bottom: 1px solid lightgrey;
`;

export const List = styled.ul`
    margin-top: 30px;
    margin-bottom: 50px;
    line-height: 1.5;
    list-style-type: disc;
`;

export const ListItem = styled.li`
    font-size: small;
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
    font-size: 14px;
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    width: 55%;
    height: 3vw;
    box-shadow: 1px 1px 4px ${Gray};
    
    &:hover {
        box-shadow: 2px 2px 4px ${Gray};
    }
`;

export const ChecklistTitle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Blue};
    color: ${White};
    font-weight: bold;
    font-size: 14px;
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    width: 17%;
    height: 3vw;
`;