import styled from 'styled-components'
import { Indigo, Black, White } from '../../colors';

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: line;

    height: 250px;
    padding: 0 10px;
    background-color: ${Indigo};
    color: ${White};
    font-size: 14px;
    font-weight: 600;
    position: absolute;
    left: 0;
    right: 0;
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 30px;
`;

export const FooterTitle = styled.h1`
    color: ${White};
    font-size: 18px;
    font-weight: 600;
    user-select: none;
    margin-top: -10px;
`;

export const FooterText = styled.p`
    color: ${White};
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
    user-select: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const FooterButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    background-color: ${Indigo};
    color: ${Black};
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
    &:hover {
        background-color: ${White};
        color: ${Black};
    }
    transition: 0.3s;
`;

export const FooterLogo = styled.div`
    user-select: none;
`;

export const FooterDecoration = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: line;
    height: 20px;
`;

export const FooterDecorationBox = styled.div`
    background-color: ${ $props => $props.color };
    width: 25%;
`;