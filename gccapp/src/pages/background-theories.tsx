import Page from "./page";
import BackgroundTheoriesCarusel from "../components/background-theories";

interface ExerciseProps {

}

const BackgroundTheories: React.FC<ExerciseProps> = () => {
    return (
        <Page>
            <BackgroundTheoriesCarusel/>
        </Page>
    );
}

export default BackgroundTheories;
