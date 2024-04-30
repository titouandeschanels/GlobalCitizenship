import ExampleComponent from "../components/exampleComponent";
import Page from "./page";

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    return (
        <Page>
            <ExampleComponent text="Hello World!" />
        </Page>
    );
}

export default Home;
