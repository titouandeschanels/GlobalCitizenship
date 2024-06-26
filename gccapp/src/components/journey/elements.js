import styled from "styled-components";
import { ReactComponent as TitleIcon } from "../../assets/icons/title-icon.svg";
import { White, Pink, Blue, Gray } from "../../colors";

export const JourneyLayout = styled.div`
    margin: 0px 0px;
    margin-bottom: 400px;
    background-color: ${White};
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Title = styled.div`
    position: relative;
    margin-left: 100px;
    padding-top: 50px;
    font-weight: 600;
    font-size: 40px;
    height: 75px;
    width: 217px;
`;

export const TitleIconWrapper = styled(TitleIcon)`
    position: absolute;
    width: 80%;
    height: auto;
    padding-top: 50px;
    left: 0;
`;

export const Description = styled.div`
    font-family: Arial, sans-serif;
    font-size: calc(1vw + 5px);
    font-weight: lighter;
    color: ${Gray};
    position: absolute;
    padding-top: 130px;
    margin-left: 100px;
    user-select: none;
`;

export const JourneyBox = styled.div`
    display: flex;
    flex-direction: column;
    gap : 90px;
    width: 350px;
    &>  svg {
        margin-left: 160px;
    }
`
export const TrophyBox = styled.div`
    margin-left: 250px;
`;

export const JourneyContainer = styled.div`
    display: flex;
    flex : 1;
    justify-content: center;
    margin: 100px 0px;
    padding-right: 0; 
`;

export const IDGStepBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${ $props => $props.color };
    gap: 70px;
    :nth-child(2) {
        justify-content: center;
        & > div {
            :nth-child(3) {
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
        justify-content: flex-end;
        :first-child {
            :first-child {
                left: -10px;
            }
            :nth-child(2) {
                left: 200px;
            }
        }
        :nth-child(3) {
            & > svg > path {
                fill: #3b6cb9;
            }
            & > svg > ellipse {
                fill: ${Blue};
        }
    }
    }
    :nth-child(4) {
        justify-content: center;
    }
    :nth-child(5) {
        & > div {
            :nth-child(3) {
                & > svg > path {
                fill: #e0a2a2;
            }
            & > svg > ellipse {
                fill: ${Pink};
        }
        }
    }
    }
    :nth-child(6) {
        justify-content: center;
        :nth-child(3) {
            & > svg > path {
                fill: #3b6cb9;
            }
            & > svg > ellipse {
                fill: ${Blue};
        }
    }
    }
`;

export const CaptionTitle = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 128px;
    color: #D9D9D9;
    gap: 1100px;
    height: 100%;
    //width: auto;
`
export const IDGS = styled.div`
    display: flex;
    margin-top: 300px;
    margin-left:  120px;
`;
export const SDGS = styled.div`
`;
export const SDGStepBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
    :nth-child(3n + 2) {
        & > div {
            :nth-child(3) {
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
        :nth-child(3) {
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
        :first-child {
            :first-child {
                left: -10px;
            }
            :nth-child(2) {
                left: 180px;
            }
        }
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
        :first-child {
            :first-child {
                left: -10px;
            }
            :nth-child(2) {
                left: 200px;
            }
        }
    }
    height: 80px;
`; 

