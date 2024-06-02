import { ReactComponent as Intro3SVG } from "../../../assets/icons/Intro/intro3-icon.svg";
import { Intro3Layout, TextBox, ImageBox } from "./elements";
interface Intro3Props {}

const Intro3: React.FC<Intro3Props> = () => {
    return (
        <Intro3Layout>
            <TextBox>
                <h3>The challenge of Global Citizenship Education</h3>
                <p>
                    The challenge lies in turning this big, abstr act concept of
                    “sustainable development” into something <span>relatable to your
                    personal experience</span>.
                </p>
                <p>
                    It needs to be acknowledged that everyone’s perception of
                    Global Citizenship might and will be different. In a world
                    where traditional education focuses mainly on knowledge, a
                    new model of learning is required in order to bring actual
                    personal transformation in students; in order to become
                    active citizens.
                </p>
            </TextBox>
            <ImageBox>
                <Intro3SVG />
            </ImageBox>
        </Intro3Layout>
    );
};
export default Intro3;

