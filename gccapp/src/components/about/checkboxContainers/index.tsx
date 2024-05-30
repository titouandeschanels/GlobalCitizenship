import React from "react";
import { Container, Header, Column, Item, IconWrapper, TextWrapper, SectionWrapper,} from "./elements";
import checkmarkImage from '../../../assets/aboutpage/gccProgram/checkmarkIcon.png';


const CheckboxContainer = () => {
    return (
        <Container>
            <SectionWrapper>
                <Column>
                    <Header>Key learning objectives</Header>
                    <Item>
                        <IconWrapper>
                            <img src={checkmarkImage} alt="Checkmark" />
                        </IconWrapper>
                        <TextWrapper>
                            <b>Develop intercultural competences:</b> the ability to communicate effectively; understand and manage intercultural information in the virtual space; and demonstrate cultural empathy, i.e. understanding ideas, values, and cognitive patterns from different cultural environments.
                        </TextWrapper>
                    </Item>
                    <Item>
                        <IconWrapper>
                            <img src={checkmarkImage} alt="Checkmark" />
                        </IconWrapper>
                        <TextWrapper>
                            <b>Develop digital communication competences:</b> demonstrate digital skills in the virtual environment, i.e. use tools, communicate effectively, collaborate with other team members in the virtual space.
                        </TextWrapper>
                    </Item>
                    <Item>
                        <IconWrapper>
                            <img src={checkmarkImage} alt="Checkmark" />
                        </IconWrapper>
                        <TextWrapper>
                            <b>Enhance awareness of SDGs:</b> Raise awareness about sustainability within different national realities and increase understanding of the role Sustainable Development Goals play in an organizational context, and their wider impact on society.
                        </TextWrapper>
                    </Item>
                    <Item>
                        <IconWrapper>
                            <img src={checkmarkImage} alt="Checkmark" />
                        </IconWrapper>
                        <TextWrapper>
                            <b>Practice digital management and leadership skills:</b> hone organizational and leadership skills for team and project management in a complex multicultural environment (virtual teamwork/ virtual project management).
                        </TextWrapper>
                    </Item>
                </Column>
            </SectionWrapper>
            <SectionWrapper>
                <Column>
                    <Header>Added value for students</Header>
                    <Item>
                        <IconWrapper>
                            <img src={checkmarkImage} alt="Checkmark" />
                        </IconWrapper>
                        <TextWrapper>
                            <b>Develop communication skills for different contexts and different types of environments:</b> (Team discussion of cases online and presenting cases solutions, including different perspectives) working with different virtual tools.
                        </TextWrapper>
                    </Item>
                    <Item>
                        <IconWrapper>
                            <img src={checkmarkImage} alt="Checkmark" />
                        </IconWrapper>
                        <TextWrapper>
                            <b>Hone Virtual Team presentation skills:</b> present findings and solutions to business representatives at the global virtual conference.
                        </TextWrapper>
                    </Item>
                    <Item>
                        <IconWrapper>
                            <img src={checkmarkImage} alt="Checkmark" />
                        </IconWrapper>
                        <TextWrapper>
                            <b>Practice formulating original ideas, concepts, and solutions for specific problems:</b> (Solving business cases about a clash of business cultures; preparing a final case report).
                        </TextWrapper>
                    </Item>
                </Column>
            </SectionWrapper>
        </Container>
    );
};

export default CheckboxContainer;