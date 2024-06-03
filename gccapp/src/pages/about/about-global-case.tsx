import Page from ".././page";
import GlobalCase from "../../components/about/globalCase/index";
import CheckboxContainer from "../../components/about/checkboxContainers";

interface AboutGlobalCaseProps {

}

const AboutGlobalCase: React.FC<AboutGlobalCaseProps> = () => {
    return (
        <Page>
            <GlobalCase></GlobalCase>
            <CheckboxContainer></CheckboxContainer>
        </Page>
    );
}

export default AboutGlobalCase;