import React, { useRef, useState } from 'react';
import { IntroNavigation, TitleAndProgress, TitleBox, ProgressBox, CircleActive, Circle, ProgressBarActive, ProgressBar, BackgroundTheoriesLayout, ContentBox, ContentCardStyled, ButtonNavigation, ButtonBox, ModuleButton, NextModuleButton, AllModuleButton } from './elements';
import BKDModel from './BKD-model';
import FiveUNESCOPillars from './5-UNESCO-pillars';
import TheoriesGEUModel from './theories-GEU-model';
import GlobalCompetence from './global-competence-model';
import { ReactComponent as ArrowRight } from "../../assets/icons/Intro/ArrowRight.svg"
import { ReactComponent as ArrowLeft } from "../../assets/icons/Intro/ArrowLeft.svg";
import { ReactComponent as NavArrow } from "../../assets/icons/intro-navigate-arrow.svg";
import { ReactComponent as AllModuleArrow } from "../../assets/icons/Intro/all-module-arrow.svg"
import { ReactComponent as NextModuleArrow } from "../../assets/icons/Intro/next-module-arrow.svg"
import { useNavigate } from "react-router-dom";

const BackgroundTheoriesCarusel: React.FC = () => {
    const cardLength: number = 4;
    const [currentCard, setCurrentCard] = useState<number>(0);
    const progressArr = [1, 2, 3, 4];
    const circle = useRef<HTMLDivElement | null>(null);
    const progressBar = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();

    const onClickNextModule = () => {
        navigate('/background')
    }
    const onClickAllModule = () => {
        navigate("/journey");
    };

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
        cardContentComponent = <GlobalCompetence />
    } else if (currentCard === 1) {
        cardContentComponent = <BKDModel />;
    } else if (currentCard === 2) {
        cardContentComponent = <FiveUNESCOPillars />;
    } else if (currentCard === 3) {
        cardContentComponent = <TheoriesGEUModel />;
    }

    const MinusStep = () => {
        let progressCount = Number(currentCard);
        if (progressBar.current) {
            progressBar.current.style.width = `${(progressCount - 1) * (100 / 3)}%`;
        }
    };
    
    const AddStep = () => {
        let progressCount = Number(currentCard);
        if (progressBar.current) {
            progressBar.current.style.width = `${(progressCount + 1) * (100 / 3)}%`;
        }
    };
    

    return (
        <BackgroundTheoriesLayout>
            <IntroNavigation>
                <p>Home</p>
                <NavArrow />
                <p>Journey</p>
                <NavArrow />
                <p>Background Theories</p>
            </IntroNavigation>
            <TitleAndProgress>
                <TitleBox>
                    <h2>Background Theories</h2>
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
                        {currentCard !== cardLength - 1 && (
                            <ButtonNavigation
                                onClick={() => {
                                    nextCard();
                                    AddStep();
                                }}
                            >
                                <ArrowRight />
                            </ButtonNavigation>
                        )}
                    </ButtonBox>
                    {cardContentComponent}
                </ContentCardStyled>
            </ContentBox>
            {currentCard === cardLength - 1 && (
                <ModuleButton>
                    <div>
                        <NextModuleButton onClick={onClickNextModule}>
                            Next module
                            <NextModuleArrow />
                        </NextModuleButton>
                        <AllModuleButton onClick={onClickAllModule}>
                            <AllModuleArrow />
                            All modules
                        </AllModuleButton>
                    </div>
                </ModuleButton>
            )}
        </BackgroundTheoriesLayout>
    );
}

export default BackgroundTheoriesCarusel;
