import React from "react";
import { BackgroundPicture, TextStyleSmall, TextStyleBig, ColoredText, ImageContainer, Image } from "./elements";
import backgroundMap from '../../assets/homepage/background-map.png';

interface BackgroundHomepageProps {
    name: string;
}

// BackgroundHomepage component displays a background image (map+wave) with welcome text
const BackgroundHomepage: React.FC<BackgroundHomepageProps> = ({ name }) => {
    return (
        <BackgroundPicture>
            <ImageContainer>
                <Image src={backgroundMap} alt="Background Image" />
            </ImageContainer>
            <div>
                <TextStyleSmall>Welcome, {name}!</TextStyleSmall>
            </div>
            <div>
                <TextStyleBig>
                    Your journey to become a <br /><ColoredText>global citizen</ColoredText> starts now!
                </TextStyleBig>
            </div>
        </BackgroundPicture>
    )
};

export default BackgroundHomepage;