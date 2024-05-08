import styled from "styled-components";
import { ReactComponent as TitleIcon } from "../../assets/icons/title-icon.svg";
import { White, Pink, Blue, Black } from "../../colors";

export const JourneyLayout = styled.div`
    margin: 0px 0px;
    padding-left: 240px;
    background-color: ${White};
    z-index: 3;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    position: relative;
    padding-top: 200px;
    font-weight: 600;
    font-size: 45px;
    height: 75px;
    & > svg {
    width: 604px;
    }
`;
export const TitleIconWrapper = styled(TitleIcon)`
    position: absolute;
    width: 60%;
    height: auto;
    padding-top: 50px;
    left: 0;
`;
export const JourneyBox = styled.div`
    display: flex;
    flex-direction: column;
    gap : 90px;
    & > svg {
    margin-left: 150px;
    }
    
`

export const JourneyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 300px 50px;
    padding-left: 150px;
`;
export const StepBox = styled.div`
    display: flex;
    width: 550px;
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
    ${StepBox}:hover & {
        opacity: 1;
    }
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
    ${StepBox}:hover & {
        opacity: 1;
    }
`;
export const DescriptionImage = styled.div`
    position: absolute;
    top: -220px;
    right: 10px;
    z-index: 150;
`;
export const IDGStepBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
    :nth-child(2) {
        justify-content: center;
        & > div {
            :nth-child(2) {
                & > svg > path {
                fill: #e0a2a2;
            }
        }
    }
    & > div > div > svg > ellipse {
        fill: ${Pink};
        }
    }
    :nth-child(3) {
        margin-left: 0px;
        :nth-child(2) {
            & > svg > path {
                fill: #3b6cb9;
            }
            & > svg > ellipse {
                fill: ${Blue};
        }
    }
    }
`;
export const SDGStepBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
    :nth-child(3n + 2) {
        & > div {
            :nth-child(2) {
                & > svg > path {
                    fill: #e0a2a2;
            }
        }
    }
    & > div > div > svg > ellipse {
            fill: ${Pink};
        }
    }
    :nth-child(3n + 3) {
        :nth-child(2) {
        & > svg > path {
            fill: #3b6cb9;
        }
        & > svg > ellipse {
            fill: ${Blue};
        }
    }
    }
    :nth-child(1) {
        justify-content: right;
    }
    :nth-child(2) {
        justify-content: center;
    }
    :nth-child(3) {
        justify-content: left;
    }
    :nth-child(4) {
        justify-content: center;
    }
    :nth-child(5) {
        justify-content: right;
    }
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

export const Flag = styled.div``
export const Step = styled.div``