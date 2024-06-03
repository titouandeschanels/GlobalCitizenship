import React, { useRef, useState } from 'react';
import { ButtonSubmissionPoint, IntroNavigation, TitleAndProgress, TitleBox, ProgressBox, CircleActive, Circle, ProgressBarActive, ProgressBar, FirstExerciseLayout, ContentBox, ContentCardStyled, ButtonNavigation, ButtonBox, ModuleButton } from './elements';
import CreativeFrames from './creative-frames';
import SelfAwareness from './self-awareness';
import SacredBullsOne from './sacred-bulls-1';
import SacredBullsTwo from './sacred-bulls-2';
import GlobalCompetence from './global-competence-model';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRight } from "../../assets/icons/Intro/ArrowRight.svg"
import { ReactComponent as ArrowLeft } from "../../assets/icons/Intro/ArrowLeft.svg";
import { ReactComponent as NavArrow } from "../../assets/icons/intro-navigate-arrow.svg";

const Carousel: React.FC = () => {
    const cardLength: number = 5;
    const [currentCard, setCurrentCard] = useState<number>(0);
    const progressArr = [1, 2, 3, 4, 5];
    const circle = useRef<HTMLDivElement | null>(null);
    const progressBar = useRef<HTMLDivElement | null>(null);


    const nextCard = () => {
        setCurrentCard((prevCard) => (prevCard + 1) % cardLength);
    };

    const prevCard = () => {
        setCurrentCard((prevCard) =>
            prevCard === 0 ? cardLength - 1 : prevCard - 1
        );
    };

    let cardContentComponent: JSX.Element | null = null;
    if (currentCard === 0) {
        cardContentComponent = <CreativeFrames />;
    } else if (currentCard === 1) {
        cardContentComponent = <SelfAwareness />;
    } else if (currentCard === 2) {
        cardContentComponent = <SacredBullsOne />;
    } else if (currentCard === 3) {
        cardContentComponent = <SacredBullsTwo />;
    } else if (currentCard === 4) {
        cardContentComponent = <GlobalCompetence />;
    }

    const MinusStep = () => {
        let progressCount = Number(currentCard);
        if (progressBar.current) {
            progressBar.current.style.width = `${(progressCount - 1) * 25}%`;
        }
    };
    const AddStep = () => {
        let progressCount = Number(currentCard);
        if (progressBar.current) {
            progressBar.current.style.width = `${(progressCount + 1) * 25}%`;
        }
    };

    return (
        <FirstExerciseLayout>
            <IntroNavigation>
                <p>Home</p>
                <NavArrow />
                <p>Journey</p>
                <NavArrow />
                <p>This is me</p>
            </IntroNavigation>
            <TitleAndProgress>
                <TitleBox>
                    <h2>This is me</h2>
                </TitleBox>
                <ProgressBox>
                    {progressArr.map((_, i) => (
                        <React.Fragment key={i}>
                            {currentCard >= i ? (
                                <CircleActive />
                            ) : (
                                <Circle ref={circle} />
                            )}
                        </React.Fragment>
                    ))}
                    <ProgressBarActive ref={progressBar}></ProgressBarActive>
                    {progressArr.map(() => {
                        return <ProgressBar></ProgressBar>;
                    })}
                </ProgressBox>
            </TitleAndProgress>
            <ContentBox>
                <ContentCardStyled>
                    <ButtonBox>
                        {currentCard === 0 && (
                            <ButtonNavigation style={{ visibility: "hidden" }}>
                                <ArrowRight />
                            </ButtonNavigation>
                        )}
                        {currentCard !== 0 && (
                            <ButtonNavigation
                                onClick={() => {
                                    prevCard();
                                    MinusStep();
                                }}
                            >
                                <ArrowLeft />
                            </ButtonNavigation>
                        )}
                        {currentCard !== cardLength - 1 ? (
                            <ButtonNavigation
                                onClick={() => {
                                    nextCard();
                                    AddStep();
                                }}
                            >
                                <ArrowRight />
                            </ButtonNavigation>
                        ) : (
                            <ModuleButton>
                                <Link to="/submission">
                                    <ButtonSubmissionPoint>
                                        <h3>Submission<br />Point</h3>
                                        <ArrowRight />
                                        <p>Get your badge!</p>
                                    </ButtonSubmissionPoint>
                                </Link>
                            </ModuleButton>
                        )}
                    </ButtonBox>
                    {cardContentComponent}
                </ContentCardStyled>
            </ContentBox>
        </FirstExerciseLayout>
    );
}

export default Carousel;
