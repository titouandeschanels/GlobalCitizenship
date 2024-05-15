import React from "react";
import { BackgroundPicture, Subtitle, TextStyleBig, UnderlinedText } from "./elements";

interface BackgroundAboutpageProps {
    name: string;
}

const BackgroundAboutpage: React.FC<BackgroundAboutpageProps> = () => {
    return (
        <BackgroundPicture>
            <div>
                <TextStyleBig>
                    <UnderlinedText>About!</UnderlinedText>
                </TextStyleBig>
            </div>
            <div>
                <Subtitle>
                    Practical information about the Global Citizenship Certificate
                    <br/>
                    program, upcoming classes, and related matters.
                </Subtitle>
            </div>
        </BackgroundPicture>
    )
};

export default BackgroundAboutpage;