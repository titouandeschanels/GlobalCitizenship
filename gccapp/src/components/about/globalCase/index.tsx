import React from "react";
import { CenteredImage, ImageWrapper, List, ListItem, ButtonWrapper, StyledButton, ChecklistTitle } from "./elements";
import { Header, SubHeader, SmallTitle, ContentWrapper, Text } from "../elements"
import { FaLightbulb } from 'react-icons/fa';
import globalCaseImg from '../../../assets/aboutpage/globalCase/globalCase.png';
import deadlineImg from '../../../assets/aboutpage/globalCase/DeadlinesLiveSessions.png';

interface GlobalCaseProps {
}

const GlobalCaseStudy: React.FC<GlobalCaseProps> = () => {
    return (
        <ContentWrapper>
            <Header>About the Global Case Study Challenge</Header>
            <SubHeader>Global Citizenship Certificate (GCC) & Global Case Study Challenge (GCSC)</SubHeader>
            <Text>
                We are looking for students who want impact as Global Citizen and earn extra credits
                (could be part of your electives - vrije ruimte, honours program or as extra-curricular activity).
                Do you dare to take the Global Citizenship Challenge with us?
            </Text>
            <SubHeader>Program semester 1 (3 ECTS):</SubHeader>
            <ImageWrapper>
                <CenteredImage src={globalCaseImg}/>
            </ImageWrapper>
            <SubHeader>Deadlines and live sessions</SubHeader>
            <Text>
                GCSC staring 4th of October: 1st virtual session with +400 students from about 22 universities around the
                gobe and different guiding sessions to help you work on your case.
            </Text>
            <ImageWrapper>
                <CenteredImage src={deadlineImg}/>
            </ImageWrapper>
            <SubHeader>Explanation of the Global Case Study Challenge</SubHeader>
            <Text>
                More under this link:
                <a href="https://www.globalcasestudychallenge.com/global-virtual-teams-challenge/">Click here</a>
                <br/><br/>
                You will be participating and working in 1 of the 5 cases with other international students from all
                over the globe, based on a current global M&A involving two multinationals from completely different
                cultural contexts. The cases themselves are based on empirical data collected through expert interviews
                with C-Level employees experiencing this M&A process first-hand.
                <br/><br/>
                One company is a Spanish IT consulting company (30,000 employees in 15 countries) that was acquired by
                a Japanese company (100,000 employees in 50 countries). The case studies are centered around changes
                occurring as part of the post-acquisition process:
                <List>
                    <ListItem>Clashing organizational values and cultures</ListItem>
                    <ListItem>HR processes and compensation</ListItem>
                    <ListItem>Corporate Social Responsibility</ListItem>
                    <ListItem>Change management within a merge</ListItem>
                </List>
            </Text>
            <SmallTitle>SDGs Integration:</SmallTitle>
            <Text>
                Integrate Sustainable Development Goals (SDGs) into decision making to contribute to sustainable and
                inclusive growth.
            </Text>
            <ButtonWrapper>
                <StyledButton>
                    <FaLightbulb style={{ marginRight: '8px' }} />
                    Click here to learn about SDGs!
                </StyledButton>
            </ButtonWrapper>
            <Text>
                The Global Case Study Challenge (#GCSC) is a real intercultural and virtual experience, which provides
                the participants with invaluable experience for their private and professional lives to make an impact
                as Global Citizens. Educators from 30 universities across the globe with more than 1450 students
                participated in this experiential COIL and virtual exchange project in the past editions!
                <br/><br/>
                In our GCSC programs, we integrate sustainability topics and sustainable practices into learning content
                design. We build our learning so that students understand the main issues revolving around sustainability
                within the global context of business and society. We are committed to preparing global leaders that will
                integrate sustainability and Sustainable Development Goals (SDGs) into their decision-making at all
                levels to contribute to inclusive growth and prosperity around the world (GCSC team).
            </Text>
            <SmallTitle>Key learning objectives of the GCSC 2023:</SmallTitle>
            <Text>
                The GCSC is designed to help participants develop their intercultural and digital communication
                competencies, and at the same time raise their awareness of Sustainable Development Goals and their
                place in the organizational context. Experiential learning takes place throughout the interaction in
                virtual intercultural teams; with students assigned to work together as a group, apply their knowledge,
                and digital communication skills in self-directed and self-organized virtual teams. Over the two months
                of the GCSC program students will practice their Global Citizenship by:
            </Text>
        </ContentWrapper>
    )
};

export default GlobalCaseStudy;