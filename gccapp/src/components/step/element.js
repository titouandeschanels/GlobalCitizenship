import styled from "styled-components";
import { ReactComponent as TitleIcon } from "../../assets/icons/title-icon.svg";
import {  Black, Grey } from "../../colors";

export const StepContainer = styled.div``
export const StepBox = styled.div``;
export const TitleIconWrapper = styled(TitleIcon)`
    position: absolute;
    width: 60%;
    height: auto;
    padding-top: 50px;
    left: 0;
`; 
export const StepAndFlag = styled.div`
    position: relative;
    width: 156px;
    height: 80px;
    :nth-child(1) {
        position: absolute;
        top: -90px;
        left: 0;
        z-index: 1;
    }  
    :last-child {
        z-index: 0;
        top: 0;
    }
`;
export const DescriptionBox = styled.div`
    position: relative;
    opacity: 0;
    & > svg {
        position: absolute;
        right: 0px;
        top: -50px;
        z-index: 100;
    }
    ${StepContainer}:hover & {
        opacity: 1;
    }
    transition: 0.5s;
    z-index: 200;
`;


export const Description = styled.div`
    & > div {
        width: 120px;
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
    right: -10px;
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
    right: 10px;
    z-index: 150;
`;

export const Flag = styled.div``
export const Step = styled.div`
`
