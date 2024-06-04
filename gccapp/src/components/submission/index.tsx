import {
    SubmissionBox,
    TitleBox,
    Title,
    CompletedCircle,
    Completed,
    OngoingCircle,
    Ongoing,
    SyncButton,
    SubmissionContainer,
    SubmissionOngoing, SubmissionNotDone,
    Circle2, Circle3,
    Description2, Description3,
    TextBox, EmptyBox,
} from "../submission/elements";
import React from "react";
import Sync from '../../assets/icons/sync.png';
import { IntroNavigation } from "../introduction/elements";
import { ReactComponent as NavArrow } from "../../assets/icons/intro-navigate-arrow.svg";

interface SubmissionProps { }
const Submissionlayout: React.FC<SubmissionProps> = () => {
    return (
        <>
            <SubmissionBox>
                <IntroNavigation>
                    <p>Home</p>
                    <NavArrow />
                    <p>My Page</p>
                    <NavArrow />
                    <p>Submission Point</p>
                </IntroNavigation>
                <TitleBox>
                    <Title>
                        Submission Point
                    </Title>
                    <CompletedCircle>
                    </CompletedCircle>
                    <Completed>
                        Completed
                    </Completed>
                    <OngoingCircle>
                    </OngoingCircle>
                    <Ongoing>
                        On going
                    </Ongoing>
                    <SyncButton>
                        <img src={Sync} alt="Sync Button" />
                    </SyncButton>
                </TitleBox>

                <SubmissionContainer>
                    <SubmissionOngoing>
                        <Circle2>
                        </Circle2>
                        <Description2>
                            <TextBox>
                                This is me
                            </TextBox>
                        </Description2>
                    </SubmissionOngoing>

                    <SubmissionNotDone>
                        <Circle3>
                        </Circle3>
                        <Description3>
                            <TextBox>
                                Me and my circles
                            </TextBox>
                        </Description3>
                    </SubmissionNotDone>
                    <SubmissionNotDone>
                        <Circle3>
                        </Circle3>
                        <Description3>
                            <TextBox>
                                The influence of perceptions
                            </TextBox>
                        </Description3>
                    </SubmissionNotDone>
                    <SubmissionNotDone>
                        <Circle3>
                        </Circle3>
                        <Description3>
                        </Description3>
                    </SubmissionNotDone>
                    <SubmissionNotDone>
                        <Circle3>
                        </Circle3>
                        <Description3>
                        </Description3>
                    </SubmissionNotDone>
                </SubmissionContainer>
            </SubmissionBox>

            <EmptyBox>
            </EmptyBox>
        </>
    )
}

export default Submissionlayout;