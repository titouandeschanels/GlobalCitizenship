import styled from "styled-components";
import backgroundHomepage from '../../assets/homepage/background-wave.png';
import backgroundAboutpage from '../../assets/aboutpage/background-wave-about.png';
import { Gray, Indigo, Orange, White } from '../../colors';
import { ReactComponent as TitleIcon } from "../../assets/icons/title-icon.svg";
import { ReactComponent as TitleIconOrange } from "../../assets/icons/title-icon-orange.svg";


export const BackgroundPictureHome = styled.div`
    position: relative;
    background-image: url("${backgroundHomepage}");
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-color: ${White};
`;

export const BackgroundPictureAbout = styled.div`
    position: relative;
    background-image: url("${backgroundAboutpage}");
    background-size: cover;
    background-position: center;
    padding-top: 60px;
    height: 100vh;
    background-color: ${White};
`;

export const MapContainer = styled.div`
    position: absolute;
    top: 5vh;
    left: 50vw;
`;

export const MapImage = styled.img`
    width: 90%;
    height: 50%;
`;

export const TextStyleSmall = styled.div`
    font-family: Arial, sans-serif;
    font-size: calc(1vw + 5px);
    font-weight: lighter;
    color: ${Gray};
    position: absolute;
    top: 7vh;
    margin-left: 100px;
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
    user-select: none;
`;

export const TitleAbout = styled.div`
    position: relative;
    font-weight: 600;
    font-size: 40px;
    padding-top: 20px;
    margin-left: 100px;
    width: 140px;
`;

export const TitleIconWrapperAbout = styled(TitleIcon)`
    position: absolute;
    width: 100%;
    height: auto;
    padding-top: 50px;
    left: 0;
`;

export const TitleHome = styled.div`
    position: relative;
    font-weight: 600;
    font-size: 4vh;
    padding-top: 12vh;
    margin-left: 100px;
    width: 50vh;
`;

export const TitleIconWrapperHome = styled(TitleIconOrange)`
    position: absolute;
    width: 55%;
    height: auto;
    padding-top: 5vh;
    left: 0;
`;


export const Subtitle = styled.div`
    font-family: Arial, sans-serif;
    font-size: calc(1vw + 5px);
    font-weight: lighter;
    color: ${Gray};
    position: absolute;
    padding-top: 40px;
    margin-left: 100px;
    user-select: none;
`;