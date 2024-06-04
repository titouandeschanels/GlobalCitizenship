import React from "react";
import { BackgroundPicture, Subtitle, TextStyleBig, UnderlinedText } from "./elements";

interface WaveBackgroundProps {
    children?: React.ReactNode;
}

const WaveBackground: React.FC<WaveBackgroundProps> = () => {
    return (
        <BackgroundPicture>
            <div>
                <TextStyleBig>
                    <UnderlinedText>Badge Collection</UnderlinedText>
                </TextStyleBig>
            </div>
            <div>
                <Subtitle>
                    This is a space where you can see the badges
                    <br />
                    you have earned along you journey! 
                </Subtitle>
            </div>
        </BackgroundPicture>
    )
};

export default WaveBackground;