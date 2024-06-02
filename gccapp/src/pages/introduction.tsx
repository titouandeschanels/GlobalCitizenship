import Introduction from "../components/introduction";
import Page from "./page";

interface IntroductionProps {}

const IntroductionPage: React.FC<IntroductionProps> = () => {
    return (
        <Page>
            <Introduction />
        </Page>
    );
};

export default IntroductionPage;
