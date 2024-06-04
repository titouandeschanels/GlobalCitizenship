import React from "react";
import { BackgroundPictureAbout, Subtitle, TextStyleBig, UnderlinedText} from "./elements";

interface BackgroundAboutpageProps {
    name: string;
}

const BackgroundAboutpage: React.FC<BackgroundAboutpageProps> = () => {
    return (
        <BackgroundPictureAbout>
            <div>
                <TextStyleBig>
                    <UnderlinedText>About!</UnderlinedText>
                </TextStyleBig>
            </div>
            <div>
                <Subtitle>
                    Practical information about the Global-U program,
                    <br/>
                    upcoming classes, and related matters.
                </Subtitle>
            </div>
        </BackgroundPictureAbout>
    )
};

export default BackgroundAboutpage;
