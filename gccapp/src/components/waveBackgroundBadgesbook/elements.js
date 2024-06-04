import styled from "styled-components";
import waveBackground from '../../assets/wave-badgesbook.png';
import { White, Indigo, Gray, Black } from "../../colors";

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

export const TextStyleBig = styled.div`
    font-family: Arial, sans-serif;
    font-size: calc(2vw + 5px);
    font-weight: bold;
    color: ${Indigo};
    position: absolute;
    top: 3vh;
    left: 10vw;
    user-select: none;
`;

export const UnderlinedText = styled.span`
    color: ${Black};
    text-decoration: underline;
    user-select: none;
`;

export const Subtitle = styled.div`
    font-family: Arial, sans-serif;
    font-size: calc(1vw + 5px);
    font-weight: lighter;
    color: ${Gray};
    position: absolute;
    top: 9vh;
    left: 10vw;
    user-select: none;
`;
