import styled from "styled-components";
import backgroundHomepage from '../../assets/homepage/backgroundHomepage.png';
import { Gray } from "../../colors";
import { Orange } from "../../colors";
import { Indigo } from "../../colors";

export const BackgroundPicture = styled.div`
    position: relative; /* Setze die Position auf relativ */
    background-image: url("${backgroundHomepage}");
    background-size: cover;
    background-position: center;
    height: 100vh;
`;

export const TextStyleSmall = styled.div`
    font-family: Arial, sans-serif;
    font-size: 24px;
    font-weight: lighter;
    color: ${Gray};
    position: absolute;
    top: 7rem;
    left: 10rem;
`;

export const TextStyleBig = styled.div`
    font-family: Arial, sans-serif;
    font-size: 45px;
    font-weight: bold;
    color: ${Indigo};
    position: absolute;
    top: 9rem;
    left: 10rem;
`;

export const ColoredText = styled.span`
    color: ${Orange};
    text-decoration: underline;
`;
