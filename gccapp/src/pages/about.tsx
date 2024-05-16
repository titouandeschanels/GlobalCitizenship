import Page from "./page";
import SquaresAbout from "../components/squares/index-about";
import BackgroundAboutpage from "../components/background/index-about";

interface AboutProps {

}

const About: React.FC<AboutProps> = () => {
    return (
        <Page>
            <BackgroundAboutpage name="Marina" />
            <SquaresAbout />
        </Page>
    );
}

export default About;
