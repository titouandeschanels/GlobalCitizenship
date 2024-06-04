import styled from "styled-components";
import {  Black } from "../../colors";
import { ReactComponent as StepLockIconBase } from "../../assets/icons/journey-step-lock-icon.svg";

export const StepContainer = styled.div``
export const StepBox = styled.div``;

export const StepAndFlag = styled.div`
    position: relative;
    width: 130px;
    height: 80px;
    :nth-child(2) {
        position: absolute;
    }  
    :last-child {
        z-index: 0;
    }
    & > svg {
        animation-duration: 2s;
        animation-name: slidein;
        animation-iteration-count: infinite;
    }
    @keyframes slidein {
    from {
        opacity: 0.5;
    }
    to {
        opacity: 1;
    }
    ;
}
`;
export const DescriptionBox = styled.div`
    position: relative;
    opacity: 0;
    & > svg {
        position: absolute;
        right: -320px;
        top: -50px;
        z-index: 1000;
    }
    ${StepContainer}:hover & {
        opacity: 1;
    }
    transition: 0.5s;
    z-index: 200;
`;

export const ModuleEmpty = styled.div`
`
export const Description = styled.div`
    & > div {
        width: 340px;
        z-index: 150;
        padding-top: 20px;
        padding-left: 40px;
        font-size: 22px;
        color: ${Black};
        position: relative;
    :last-child {
        padding-top: 30px;
        padding-left: 40px;
    }
    }
    & > p {
        width: 309px;
        padding: 5px 40px;
        color: #898888;
        z-index: 150;
        font-size: 15px;
        font-family: Arial, sans-serif;
        line-height: 1.2;
    }
    position: absolute;
    z-index: 100;
    width: 500px;
    height: 200px;
    top: -250px;
    left: 200px;
    background-color: #ffffff;
    color: white;
    border-radius: 20px;
    box-shadow: 0px 5px 10px #d9d9d9;
    transition: opacity 0.3s;
    pointer-events: none;
`;
export const DescriptionImage = styled.div`
    position: absolute;
    top: -220px;
    left: 550px;
    z-index: 150;
`;

export const Flag = styled.div`
    position: absolute;
    top : -50px;
    left: 45px;
    z-index: 2;
    cursor: pointer;
`
export const Step = styled.div`
    & > svg {
        cursor: pointer;
    }
    position: absolute;
    top : 30px;
    left: 40px;
    z-index: 3;
`
export const StepLockIcon = styled(StepLockIconBase)`
    pointer-events: none;
`;