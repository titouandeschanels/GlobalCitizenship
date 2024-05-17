import React from "react";
import { BackgroundPictureHome, TextStyleSmall, TextStyleBig, ColoredText, MapContainer, MapImage } from "./elements";
import backgroundMap from '../../assets/homepage/background-map.png';

interface BackgroundHomepageProps {
    name: string;
}

// BackgroundHomepage component displays a background image (map+wave) with welcome text
const BackgroundHomepage: React.FC<BackgroundHomepageProps> = ({ name }) => {
    return (
        <BackgroundPictureHome>
            <MapContainer>
                <MapImage src={backgroundMap} alt="Background Image" />
            </MapContainer>
            <div>
                <TextStyleSmall>Welcome, {name}!</TextStyleSmall>
            </div>
            <div>
                <TextStyleBig>
                    Your journey to become a <br /><ColoredText>global citizen</ColoredText> starts now!
                </TextStyleBig>
            </div>
        </BackgroundPictureHome>
    )
};

export default BackgroundHomepage;