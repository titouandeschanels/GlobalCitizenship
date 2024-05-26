import styled from "styled-components";
import { ReactComponent as TitleIcon } from "../../assets/icons/title-icon.svg";
import { White, Pink, Blue } from "../../colors";

export const JourneyLayout = styled.div`
    margin: 0px 0px;
    background-color: ${White};
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y : scroll;
`;

export const Title = styled.div`
    position: relative;
    margin-left: 300px;
    padding-top: 200px;
    font-weight: 600;
    font-size: 45px;
    height: 75px;
    width: 217px;
`;
export const TitleIconWrapper = styled(TitleIcon)`
    position: absolute;
    width: 100%;
    height: auto;
    padding-top: 55px;
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
    padding-left: 400px;
    align-items: center;
    justify-content: center;
    margin: 300px 50px;
    //padding-left: 150px;
    height: 1556px;
`;

export const IDGStepBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${ $props => $props.color };
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
    & > div{
            display: flex;
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
    & > div{
            display: flex;
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
    height: 80px;
`; 

