import React from "react";
import { BackgroundPictureHome, TextStyleSmall, ColoredText, MapContainer, MapImage, TitleHome, TitleIconWrapperHome } from "./elements";
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
            <TitleHome>
                    Your journey to become a <br />
                    <ColoredText>global citizen </ColoredText> 
                    <TitleIconWrapperHome />
                    starts now!
                    </TitleHome>
            </div>
        </BackgroundPictureHome>
    )
};

export default BackgroundHomepage;
