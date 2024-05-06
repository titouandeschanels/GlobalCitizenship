import styled from "styled-components";
import backgroundHomepage from '../../assets/homepage/backgroundHomepage.png';
import { Gray, Indigo, Orange, White } from '../../colors';

export const BackgroundPicture = styled.div`
    position: relative;
    background-image: url("${backgroundHomepage}");
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-color: ${White};
`;

export const TextStyleSmall = styled.div`
    font-family: Arial, sans-serif;
    font-size: calc(1vw + 5px);
    font-weight: lighter;
    color: ${Gray};
    position: absolute;
    top: 7vh;
    left: 10vw;
    user-select: none;
`;

export const TextStyleBig = styled.div`
    font-family: Arial, sans-serif;
    font-size: calc(2vw + 10px);
    font-weight: bold;
    color: ${Indigo};
    position: absolute;
    top: 12vh;
    left: 10vw;
    user-select: none;
`;

export const ColoredText = styled.span`
    color: ${Orange};
    text-decoration: underline;
    user-select: none;
`;
