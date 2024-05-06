import { TextStyleSmall,TextStyleBig, BackgroundPicture, ColoredText } from "./elements";

interface BackgroundHomepageProps {
    name: string;
}

// BackgroundHomepage component displays a background image (map+wave) with welcome text
const BackgroundHomepage: React.FC<BackgroundHomepageProps> = ({ name }) => {
    return (
        <BackgroundPicture>
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