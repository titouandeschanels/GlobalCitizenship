import React from "react";
import { BackgroundPictureAbout, Subtitle, TitleAbout, TitleIconWrapperAbout } from "./elements";

interface BackgroundAboutpageProps {
    name: string;
}

const BackgroundAboutpage: React.FC<BackgroundAboutpageProps> = () => {
    return (
        <BackgroundPictureAbout>
            <div>
                <TitleAbout>
                    About
                    <TitleIconWrapperAbout />
                </TitleAbout>
            </div>
            <div>
                <Subtitle>
                    Practical information about the Global-U program,
                    <br />
                    upcoming classes, and related matters.
                </Subtitle>
            </div>
        </BackgroundPictureAbout>
    )
};

export default BackgroundAboutpage;
