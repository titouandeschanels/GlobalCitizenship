import styled from "styled-components";
import { ReactComponent as TitleIcon } from "../../assets/icons/title-icon.svg";
import { White, Pink, Blue, Gray } from "../../colors";

export const JourneyLayout = styled.div`
    margin: 0px 0px;
    margin-bottom: 200px;
    background-color: ${White};
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Title = styled.div`
    position: relative;
    margin-left: 200px;
    padding-top: 50px;
    font-weight: 600;
    font-size: 45px;
    height: 75px;
    width: 217px;
`;
export const Description = styled.div`
    color : ${Gray};
    font-size: 22px;
    font-weight: 550;
    width: 50%;
    margin-top: 50px;
    margin-left: 200px;
`
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
    //align-items: center;
    justify-content: center;
    margin: 100px 0px;
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
        margin-left: 0px;
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
    gap: 800px;
    height: 100%;
    width: auto;
`
export const IDGS = styled.div`
    display: flex;
    margin-top: 150px;
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

