import styled from "styled-components";
import waveBackground from '../../assets/wave.png';

export const WaveContainer = styled.div`
    position: absolute;
    top: 5vh;
    left: 100vh;
    z-index: -1;
`;

export const BackgroundPicture = styled.div`
    background-image: url("${waveBackground}");
    background-size: cover;
    height: 120px;
`;
