import BackgroundHomepage from "../components/backgroundHomepage";
import Squares from '../components/squares';
import Page from "./page";

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    return (
        <Page>
            <BackgroundHomepage name="Marina" />
            <Squares />
        </Page>
    );
}

export default Home;
