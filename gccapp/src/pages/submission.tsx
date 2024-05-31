import Submission from "../components/submission";
import Page from "./page";

interface SubmissionProps {

}

const SubmissionPage: React.FC<SubmissionProps> = () => {
    return (
        <Page>
           <Submission></Submission>
        </Page>
    );
}

export default SubmissionPage;
