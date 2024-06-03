import Page from "./page";
import Carousel from '../components/exercise-content'

interface ExerciseProps {

}

const FirstExercise: React.FC<ExerciseProps> = () => {
    return (
        <Page>
            <Carousel/>
        </Page>
    );
}

export default FirstExercise;
