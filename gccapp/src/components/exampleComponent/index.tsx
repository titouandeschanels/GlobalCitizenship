import { ExampleComponentContainer } from "./elements";


interface ExampleComponentProps {
    text : string;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ( {text} ) => {
    return (
        <ExampleComponentContainer>
            <h1>{text}</h1>
        </ExampleComponentContainer>
    );
};

export default ExampleComponent;