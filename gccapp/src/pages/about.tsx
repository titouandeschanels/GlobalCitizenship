import Page from "./page";
import BackgroundHomepage from "../components/background-homepage";
import SquaresAbout from "../components/squares/index-about";

interface AboutProps {

}

const About: React.FC<AboutProps> = () => {
    return (
        <Page>
            <BackgroundHomepage name="Marina" />
            <SquaresAbout />
        </Page>
    );
}

export default About;
