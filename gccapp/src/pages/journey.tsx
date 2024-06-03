import Page from "./page";
import Journeylayout from "../components/journey";
import Navigation from "../components/navigation";
interface JourneyProps {}

const Journey: React.FC<JourneyProps> = () => {
  return (
    <Page>
        <Journeylayout></Journeylayout>
        <Navigation/>
    </Page>
  );
};

export default Journey;
