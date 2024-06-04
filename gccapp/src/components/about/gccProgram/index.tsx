import React from "react";
import {BoxContainer, Box, Text, IconColumn, TextColumn, SubHeaderWithLine, TextWithLine } from "./elements";
import { Header, SubHeader, TextAll, ContentWrapper } from "../elements"
import checkListIcon from '../../../assets/aboutpage/gccProgram/checkListIcon.png';
import checkFileIcon from '../../../assets/aboutpage/gccProgram/checkFileIcon.png';


const GCCProgram = () => {
    return (
        <ContentWrapper>
            <Header>About the Global-U Program</Header>
            <SubHeader>E-learning explained</SubHeader>
            {/*First boxes*/}
            <BoxContainer>
                <Box>
                    <IconColumn>
                        <img src={checkListIcon} alt="list icon" />
                    </IconColumn>
                    <TextColumn>
                        <Text>
                            <b>Step 1:</b>
                            <br/>
                            Go through the practical information in the Global-U Program module to get informed
                            before starting the tasks.
                        </Text>
                    </TextColumn>
                </Box>
                <Box>
                    <IconColumn>
                        <img src={checkListIcon} alt="list icon" />
                    </IconColumn>
                    <TextColumn>
                        <Text>
                            <b>Step 2:</b>
                            <br/>
                            Go through the Journey in the Start Modules on home page. Follow the
                            instructions when following each module.
                        </Text>
                    </TextColumn>
                </Box>
                <Box>
                    <IconColumn>
                        <img src={checkListIcon} alt="list icon" />
                    </IconColumn>
                    <TextColumn>
                        <Text>
                            <b>Step 3:</b>
                            <br/>
                            After each module, submit your assignments to move to the next
                            module. There are three modules to finish.
                        </Text>
                    </TextColumn>
                </Box>
            </BoxContainer>
            <SubHeaderWithLine>Assignments</SubHeaderWithLine>
            <TextAll>
                Deadlines meant for students participating in the Global-U Challenge, starting on the
                4th of October and ending in end of November:
            </TextAll>
            {/*Second boxes*/}
            <BoxContainer>
                <Box>
                    <IconColumn>
                        <img src={checkFileIcon} alt="list icon" />
                    </IconColumn>
                    <TextColumn>
                        <Text>
                            <b>Assignment 1:</b>
                            <br/>
                            This is Me
                            <br/><br/>
                            Deadline: Monday, 24th of September
                        </Text>
                    </TextColumn>
                </Box>
                <Box>
                    <IconColumn>
                        <img src={checkFileIcon} alt="list icon" />
                    </IconColumn>
                    <TextColumn>
                        <Text>
                            <b>Assignment 2:</b>
                            <br/>
                            Me and My Circles
                            <br/><br/>
                            Deadline: Monday, 1st of October
                        </Text>
                    </TextColumn>
                </Box>
                <Box>
                    <IconColumn>
                        <img src={checkFileIcon} alt="list icon" />
                    </IconColumn>
                    <TextColumn>
                        <Text>
                            <b>Assignment 3:</b>
                            <br/>
                            My Impact
                            <br/><br/>
                            Deadline: Monday, 8th of October
                        </Text>
                    </TextColumn>
                </Box>
            </BoxContainer>
            <TextWithLine>
                Definitive deadline for those students participating in the Global-U Challenge world-COIL
                (all assignments submitted) is the 3rd of October (noon: 12:00/midday).
                <br/>
                *Please notice that all assignments need to be submitted before the start of the GCSC sessions
                (4th of October!).
                <br/>
                **Students who work on other activities/projects from Time4YourFuture (see separate folder) or of their own choice have the deadline on the 1st of November!
            </TextWithLine>
            <SubHeader>Assignment Checklist</SubHeader>
            <TextAll>
                This is the elements that need to be included in the assignments you submit at the end of each module.
            </TextAll>
        </ContentWrapper>
    );
};

export default GCCProgram;