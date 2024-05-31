import styled from 'styled-components';

export const RingContainer = styled.div`
    position: relative;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Popup = styled.div`
    display: none;
    position: absolute;
    right: 20%;
    transform: translateX(-50%);
    padding: 10px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    z-index: 1;
    width: 300px;
`;

export const PopupText = styled.p`
    margin: 5px 0 0 0;
    padding: 0;
    font-size: 12px;
`;

export const Ring = styled.div`
    background-color: ${props => props.color};
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover .popup {
        display: block;
    }
`;

export const PopupTitle = styled.h4`
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.color};
`;
