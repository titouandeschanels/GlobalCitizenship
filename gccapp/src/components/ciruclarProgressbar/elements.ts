import styled from 'styled-components';
import { Green, LighterGray } from '../../colors';

export const Circle = styled.div`
    position: relative;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: ${LighterGray};
`;

interface ProgressProps {
    progress: number;
}

export const Filler = styled.div<ProgressProps>`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    clip: rect(0px, 75px, 75px, 37.5px);
    position: absolute;
    background-color: ${props => (props.progress > 50 ? Green : 'transparent')};

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        clip: rect(0px, 37.5px, 75px, 0px);
        background-color: ${Green};
        transform: rotate(${props => props.progress * 3.6}deg);
        transition: transform 0.5s ease-in-out;
    }
`;

export const Overlay = styled.div<ProgressProps>`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    clip: rect(0px, 75px, 75px, 37.5px);
    position: absolute;
    transform: rotate(${props => (props.progress > 50 ? (props.progress - 50) * 3.6 : 0)}deg);

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        clip: rect(0px, 37.5px, 75px, 0px);
        background-color: ${props => (props.progress > 50 ? Green : 'transparent')};
        transform: rotate(180deg);
        transition: transform 0.5s ease-in-out;
    }
`;

export const InnerCircle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
`;
