import ExampleComponent from "../components/exampleComponent";
import BackgroundHomepage from "../components/background-homepage";
import Page from "./page";

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    return (
        <Page>
            <ExampleComponent text="Hello World!" />
            <BackgroundHomepage name="Marina" />
        </Page>
    );
}

export default Home;
