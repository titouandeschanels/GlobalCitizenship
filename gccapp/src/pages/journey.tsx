import Page from "./page";
import Journeylayout from "../components/journey";
interface JourneyProps {}


const Journey: React.FC<JourneyProps> = () => {
  return (
    <Page>
        <Journeylayout/>
    </Page>
  );
};

export default Journey;
