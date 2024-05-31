import { Intro4Layout, ExplainBox, ImageBox, TextContainer, TextBox } from "./elements";
import { ReactComponent as Intro4SVG } from "../../../assets/icons/Intro/intro4-icon.svg";

interface Intro4Props {}

const Intro3: React.FC<Intro4Props> = () => {
    return (
        <Intro4Layout>
            <h3>The purpose of the Global Citizenship Program</h3>
            <p>
                This is what we want to achieve with the Global Citizenship
                program (GC):
            </p>
            <ExplainBox>
                <TextContainer>
                    <TextBox>
                        <p>
                            <span>
                                Everyone’s perception of Global Citizenship
                                differs:
                                <br />
                            </span>
                            To develop a personal definition of what Global
                            Citizenship means to you in relation to others.
                        </p>
                    </TextBox>
                    <TextBox>
                        <p>
                            <span>
                                Personal transformation into active citizens:
                                <br />
                            </span>
                            To foster a deep sense of self-awareness by
                            providing you with tools and strategies along this
                            journey.
                        </p>
                    </TextBox>
                </TextContainer>
                <ImageBox>
                    <Intro4SVG />
                </ImageBox>
                <TextContainer>
                    <TextBox>
                        <p>
                            <span>
                                Making abstract concepts more relatable to you:
                                <br />
                            </span>
                            By offering a Global Citizenship program centered on
                            your personal challenges.
                        </p>
                    </TextBox>
                    <TextBox>
                        <p>
                            <span>
                                This requires a new learning approach:
                                <br />
                            </span>
                            Combining the Being + Doing + Knowing and Challenge
                            Based Learning (CBL) frameworks.
                        </p>
                    </TextBox>
                </TextContainer>
            </ExplainBox>
        </Intro4Layout>
    );
};
export default Intro3;

