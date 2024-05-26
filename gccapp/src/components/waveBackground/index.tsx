import React from "react";
import { BackgroundPicture } from "./elements";

interface WaveBackgroundProps {
    children?: React.ReactNode;
}

// WaveBackground component displays a background image (map+wave) with welcome text
const WaveBackground: React.FC<WaveBackgroundProps> = () => {
    return (
        <div>
            <BackgroundPicture />
        </div>
    )
};

export default WaveBackground;