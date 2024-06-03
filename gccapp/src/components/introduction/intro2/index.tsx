import { Intro2Layout, ImageBox } from "./elements";
import { TextPurple } from "../elements";
import { ReactComponent as Intro2SVG } from "../../../assets/icons/Intro/intro2-icon.svg";
interface Intro2Props {}

const Intro2: React.FC<Intro2Props> = () => {
    return (
        <Intro2Layout>
            <h3>Education for sustainable development</h3>
            <p>
                The acquired knowledge (KNOWING), skills (DOING) and
                dispositions (BEING) needed to promote sustainable development
                are the ground zero of{" "}
                <TextPurple> active citizens</TextPurple>.
            </p>
            <ImageBox>
                <Intro2SVG />
            </ImageBox>
            <p>
                <p>
                    According to <span>Bridge 47 </span>active citizens make a
                    better world:
                </p>
                <li>
                    where individual citizens understand that they have
                    <span> active roles </span>to play in changing big issues
                </li>
                <li>
                    where people seek and find the things that connect them
                    rather than divide them,
                </li>
                <li>
                    where they can <span>do something to challenge</span> the
                    causes of injustice and inequality.
                </li>
                <br />
                "Global Citizenship Education explores in a multitude of ways
                how active citizens can change the world". Global Citizenship
                education provides us with new possibilities to envision a
                world,
                <span>
                    where problems are systematically resolved and transformed </span>
                into new possibilities for reaching humanity's potential.
            </p>
            <p>
                This is the essence of the Global Citizenship Certificate:
                relating your <span>Being + Knowing + Doing</span> to
                value-based challenges.
            </p>
        </Intro2Layout>
    );
};
export default Intro2;
