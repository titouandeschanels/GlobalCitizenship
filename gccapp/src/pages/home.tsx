import ExampleComponent from "../components/exampleComponent";

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    return (
        <div>
            <ExampleComponent text="Hello World!" />
        </div>
    );
}

export default Home;
