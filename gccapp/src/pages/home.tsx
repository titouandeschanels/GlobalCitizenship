import BackgroundHomepage from "../components/background/index-home";
import SquaresHome from '../components/squares/index-home';
import Page from "./page";

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    return (
        <Page>
            <BackgroundHomepage name="Marina" />
            <SquaresHome />
        </Page>
    );
}

export default Home;
