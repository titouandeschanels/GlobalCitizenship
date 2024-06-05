import styled from "styled-components";
import waveBackground from '../../assets/wave-badgesbook.png';
import { ReactComponent as TitleIcon } from "../../assets/icons/title-icon.svg";
import { White, Gray } from "../../colors";

export const BackgroundPicture = styled.div`
    background-image: url("${waveBackground}");
    position: relative;
    background-size: cover;
    background-position: center;
    background-color: ${White};
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const Title = styled.div`
    position: relative;
    margin-left: 100px;
    padding-top: 20px;
    font-weight: 600;
    font-size: 40px;
    height: 75px;
    width: 400px;
`;

export const TitleIconWrapper = styled(TitleIcon)`
    position: absolute;
    width: 80%;
    height: auto;
    padding-top: 50px;
    left: 0;
`;

export const Subtitle = styled.div`
    font-family: Arial, sans-serif;
    font-size: calc(1vw + 5px);
    font-weight: lighter;
    color: ${Gray};
    position: absolute;
    margin-left: 100px;
    padding-top: 5px;
    user-select: none;
`;
