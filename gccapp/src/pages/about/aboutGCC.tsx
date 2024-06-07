import Page from ".././page";
import GCCProgram from "../../components/about/globalUProgram/index"
import AssignmentsChecklist from "../../components/about/assignmentChecklist";

interface AboutGCCProps {

}

const AboutGCC: React.FC<AboutGCCProps> = () => {
    return (
        <Page>
            <GCCProgram></GCCProgram>
            <AssignmentsChecklist></AssignmentsChecklist>
        </Page>
    );
}

export default AboutGCC;