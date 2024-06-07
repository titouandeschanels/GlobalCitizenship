import React from "react";
import { CenteredImage, ImageWrapper, List, ListItem, ButtonWrapper, StyledButton, HeaderCenter } from "./elements";
import { Header, SubHeader, SubHeaderWithLine, SmallTitle, ContentWrapper, TextAll } from "../elements"
import { FaLightbulb } from 'react-icons/fa';
import globalCaseImg from '../../../assets/aboutpage/globalChallenge/semesterProgram.png';

interface GlobalCaseProps {
}

const GlobalCaseStudy: React.FC<GlobalCaseProps> = () => {
    return (
        <ContentWrapper>
            <Header>About the Global-U Challenge</Header>
            <SubHeader>Global Citizenship program & the Global-U Challenge (GUC)</SubHeader>
            <TextAll>
                We are looking for students who want impact as Global Citizen and earn extra credits
                (as part of your electives, Honors program or as extra-curricular activity).
                Do you dare to take the Global-U Challenge with us?
                <br/>
                See what you can expect:
            </TextAll>
            <SubHeader>Semester program (3 - 5 ECTS)</SubHeader>
            <ImageWrapper>
                <CenteredImage src={globalCaseImg}/>
            </ImageWrapper>
            <SubHeaderWithLine>Explanation of a Global Challenge</SubHeaderWithLine>
            <TextAll>
                Virtual sessions with +400 students from about 22 universities around the globe and different guiding
                sessions to help you work on your case.
                <br/><br/>
                Students co-worked in 5 company cases with other international students from all over the globe, based
                on a current global issue involving two multinationals from completely different cultural contexts.
                The case studies are centered around changes occurring as part of a merging process:
                <List>
                    <ListItem>Clashing organizational values and cultures</ListItem>
                    <ListItem>HR processes and compensation</ListItem>
                    <ListItem>Corporate Social Responsibility</ListItem>
                    <ListItem>Change management within a merge</ListItem>
                    <ListItem>Learning & Development within an organization </ListItem>
                </List>
            </TextAll>
            <SmallTitle>SDGs Integration:</SmallTitle>
            <TextAll>
                Integrate Sustainable Development Goals (SDGs) into decision making to contribute to sustainable and
                inclusive growth.
            </TextAll>
            <ButtonWrapper>
                <StyledButton>
                    <FaLightbulb style={{ marginRight: '8px' }} />
                    Click here to learn about SDGs!
                </StyledButton>
            </ButtonWrapper>
            <TextAll>
                The Global-U Challenge is a real intercultural and virtual experience, which provides the participants
                with invaluable experience for their personal and professional development to make an impact as Global
                Citizens. Educators and students from different universities across the globe participated in this
                experiential COIL and virtual exchange project in the past editions!
            </TextAll>
            <SmallTitle>What are the key learning objectives?</SmallTitle>
            <TextAll>
                Over the two months of the GCSC program students will practice their Global Citizenship by:
                <List>
                    <ListItem>Clashing organizational values and cultures</ListItem>
                    <ListItem>HR processes and compensation</ListItem>
                    <ListItem>Corporate Social Responsibility</ListItem>
                    <ListItem>Change management within a merge</ListItem>
                    <ListItem>Learning & Development within an organization </ListItem>
                </List>
            </TextAll>
            <HeaderCenter>Join & feel Empowered as Global Citizen!!</HeaderCenter>
        </ContentWrapper>
    )
};

export default GlobalCaseStudy;