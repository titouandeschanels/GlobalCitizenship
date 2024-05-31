import {Intro5Layout, ImageBox, Notification } from "./elements";
import { ReactComponent as Intro5SVG } from "../../../assets/icons/Intro/intro5-icon.svg";
interface Intro5Props {}

const Intro1: React.FC<Intro5Props> = () => {
    return (
        <Intro5Layout>
            <h3>The purpose of this e-learning course</h3>
            <ul>
                <li>
                    To develop a Global Citizenship Vision that will guide you
                    in future journeys.
                </li>
                <li>
                    To provide a framework of what Global Citizenship entitles
                    and how to voice your needs and challenges.
                </li>
                <li>
                    To provide you with playful tools and strategies on how to
                    make an impact as Global Citizen.
                </li>
            </ul>
            <ImageBox>
                <Intro5SVG />
            </ImageBox>
            <Notification />
        </Intro5Layout>
    );
};
export default Intro1;

