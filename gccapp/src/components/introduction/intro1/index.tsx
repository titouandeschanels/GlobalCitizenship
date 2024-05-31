import  {Intro1Layout, ImageBox, Notification} from "./elements";
import {ReactComponent as Intro1SVG} from "../../../assets/icons/Intro/intro1-icon.svg"
interface Intro1Props {}

const Intro1: React.FC<Intro1Props> = () => {
    return (
        <Intro1Layout>
            <h3>Sustainable development within education</h3>
            <p>
                The past two decades have seen the emergence of a global
                movement that calls for <span> a new model of learning </span>
                for the 21st century (UNESCO, September 2016, 2021).
            </p>
            <p>
                The Sustainable Development Goals' target 4, item 4.7. points
                out the relevance of education for Global Citizenship: 
                <br/>"4.7. By
                2030, we have to ensure that all learners
                <span>
                    acquire the knowledge and skills needed to promote
                    sustainable development
                </span>
                , including, among others, through education for sustainable
                development and sustainable lifestyles, human rights, gender
                equality, promotion of a culture of peace and non-violence,
                <span>
                    global citizenship , and appreciation of cultural diversity
                    and of culture’s contribution to sustainable development
                </span>
                ” (UNESCO, Education 2030, 2021).
            </p>
            <ImageBox>
                <Intro1SVG />
            </ImageBox>
            <Notification />
        </Intro1Layout>
    );
};
export default Intro1;
