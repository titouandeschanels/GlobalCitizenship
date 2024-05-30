import React from "react";
import { BoxContainer, Box, Header, List, ListItem, BulletIcon } from "./elements";
import checkmarkIcon from '../../../assets/aboutpage/gccProgram/checkmarkIcon.png';

const AssignmentsChecklist = () => {
    return (
        <BoxContainer>
            <Box>
                <Header>Assignment 1:</Header>
                <List>
                    <ListItem><BulletIcon src={checkmarkIcon} alt="checkmark" />This is me as GC 0.1</ListItem>
                    <ListItem><BulletIcon src={checkmarkIcon} alt="checkmark" />2 goals (training / Global Citizen)</ListItem>
                    <ListItem><BulletIcon src={checkmarkIcon} alt="checkmark" />Creative frames</ListItem>
                    <ListItem><BulletIcon src={checkmarkIcon} alt="checkmark" />Sacred Bulls (expressions + I-positions)</ListItem>
                    <ListItem><BulletIcon src={checkmarkIcon} alt="checkmark" />Journeying: proprioceptive question; What do I mean...?</ListItem>
                    <ListItem><BulletIcon src={checkmarkIcon} alt="checkmark" />Participation as citizen/ Final thought(s)/wrap-up (Craft your story) + 3 things I learned...</ListItem>
                </List>
            </Box>
            <Box>
                <Header>Assignment 2:</Header>
                <List>
                    <ListItem><BulletIcon src={checkmarkIcon} alt="checkmark" />Circles of impact (breakfast; what insight do you get from this short sketch?)</ListItem>
                    <ListItem><BulletIcon src={checkmarkIcon} alt="checkmark" />Influence of perception (3 cultural things, define others and yours, cultural differences/matches?)</ListItem>
                    <ListItem><BulletIcon src={checkmarkIcon} alt="checkmark" />Relevance of positioning (model; your identities and values/ norms coming with them)</ListItem>
                    <ListItem><BulletIcon src={checkmarkIcon} alt="checkmark" />Your positions/ Conclusion/main thoughts (Craft your Story with proprioceptive question; What do I mean...?)</ListItem>
                </List>
            </Box>
            <Box>
                <Header>Assignment 3:</Header>
                <List>
                    <ListItem><BulletIcon src={checkmarkIcon} alt="checkmark" />Dilemmas (controversial situation + values)</ListItem>
                    <ListItem><BulletIcon src={checkmarkIcon} alt="checkmark" />Challenge definition (your biases, knowing / being / doing)</ListItem>
                    <ListItem><BulletIcon src={checkmarkIcon} alt="checkmark" />Goal setting (my position/ my values/ my challenge 1)</ListItem>
                    <ListItem><BulletIcon src={checkmarkIcon} alt="checkmark" />Value Based Challenge Creation (connecting to my knowing, being, doing) / Value Pyramid (picture)</ListItem>
                    <ListItem><BulletIcon src={checkmarkIcon} alt="checkmark" />Your Challenge/ Conclusion/main thoughts (Craft your story with proprioceptive question; What do I mean...? X 3) + Value Pyramid: explanation: how does it relate to your challenge?</ListItem>
                </List>
            </Box>
        </BoxContainer>
    );
};

export default AssignmentsChecklist;
