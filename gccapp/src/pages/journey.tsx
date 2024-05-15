import Page from "./page";
import { Link } from "react-router-dom";

interface JourneyProps {

}

const Journey: React.FC<JourneyProps> = () => {
    return (
        <Page>
            <h1>Journey map page</h1>
            {/* Just a mock button, will be removed later */}
            <Link to="/first-exercise">
                <button>Go to First Exercise</button>
            </Link>
        </Page>
    );
}

export default Journey;
