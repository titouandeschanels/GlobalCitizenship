import {
    SubmissionBox,
    Navigation,
    TitleBox,
    Title,
    CompletedCircle,
    Completed,
    OngoingCircle,
    Ongoing,
    SyncButton,
    SubmissionContainer,
    Submission1, Submission2, Submission3,
    Circle1, Circle2, Circle3,
    Description1, Description2, Description3,
    TextBox, EmptyBox,
} from "../submission/elements";
import React from "react";
import Sync from '../../assets/icons/sync.png';

interface SubmissionProps{}
const Submissionlayout: React.FC<SubmissionProps> = () => {
    return (
        <>
        <SubmissionBox>
            <Navigation>
                Home {'>'} My Page {'>'} Submission Point
            </Navigation>

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
                <Submission1>
                    <Circle1>
                    </Circle1>
                    <Description1>
                        <TextBox>
                            Any description
                        </TextBox>
                    </Description1>
                </Submission1>
                <Submission1>
                    <Circle1>
                    </Circle1>
                    <Description1>
                    </Description1>
                </Submission1>
                <Submission1>
                    <Circle1>
                    </Circle1>
                    <Description1>
                    </Description1>
                </Submission1>

                <Submission2>
                    <Circle2>
                    </Circle2>
                    <Description2>
                    </Description2>
                </Submission2>

                <Submission3>
                    <Circle3>
                    </Circle3>
                    <Description3>
                    </Description3>
                </Submission3>
                <Submission3>
                    <Circle3>
                    </Circle3>
                    <Description3>
                    </Description3>
                </Submission3>
                <Submission3>
                    <Circle3>
                    </Circle3>
                    <Description3>
                    </Description3>
                </Submission3>
                <Submission3>
                    <Circle3>
                    </Circle3>
                    <Description3>
                    </Description3>
                </Submission3>
            </SubmissionContainer>
        </SubmissionBox>

        <EmptyBox>
        </EmptyBox>
        </>
    )
}

export default Submissionlayout;