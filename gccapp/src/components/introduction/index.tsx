import React from "react";
import { useState, useRef } from "react";
import {
    IntroductionLayout,
    IntroNavigation,
    TitleAndProgress,
    TitleBox,
    ButtonBox,
    ButtonNavigation,
    ContentBox,
    ContentCardStyled,
    ProgressBar,
    ProgressBarActive,
    Circle,
    CircleActive,
    ProgressBox,
    ModuleButton,
    NextModuleButton,
    AllModuleButton,
} from "./elements";
import { useNavigate } from "react-router-dom";
import Intro1 from "./intro1";
import Intro2 from "./intro2";
import Intro3 from "./intro3";
import Intro4 from "./intro4";
import Intro5 from "./intro5";
import {ReactComponent as AllModuleArrow} from "../../assets/icons/Intro/all-module-arrow.svg"
import {ReactComponent as NextModuleArrow} from "../../assets/icons/Intro/next-module-arrow.svg"
import {ReactComponent as ArrowRight } from "../../assets/icons/Intro/ArrowRight.svg"
import {ReactComponent as ArrowLeft} from "../../assets/icons/Intro/ArrowLeft.svg";
import { ReactComponent as NavArrow } from "../../assets/icons/intro-navigate-arrow.svg";
interface IntroductionProps {
}

const Introduction: React.FC<IntroductionProps> = () => {
    const navigate = useNavigate();
    const cardLength: number = 5;
    const [currentCard, setCurrentCard] = useState<number>(0);
    const progressArr = [1,2,3,4,5];
    const circle = useRef<HTMLDivElement | null>(null);
    const progressBar = useRef<HTMLDivElement | null>(null);

    const onClickNextModule = () =>{
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

    let cardContentComponent: JSX.Element | null = null;
    if (currentCard === 0) {
        cardContentComponent = <Intro1 />;
    } else if (currentCard === 1) {
        cardContentComponent = <Intro2 />;
    } else if (currentCard === 2) {
        cardContentComponent = <Intro3 />;
    } else if (currentCard === 3) {
        cardContentComponent = <Intro4 />;
    } else if (currentCard === 4) {
        cardContentComponent = <Intro5 />;
    }
    return (
        <IntroductionLayout>
            <IntroNavigation>
                <p>Home</p>
                <NavArrow />
                <p>Journey</p>
                <NavArrow />
                <p>Introduction</p>
            </IntroNavigation>
            <TitleAndProgress>
                <TitleBox>
                    <h2>Introduction</h2>
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
                            <AllModuleArrow />
                            All modules
                        </AllModuleButton>
                    </div>
                </ModuleButton>
            )}
        </IntroductionLayout>
    );
}
export default Introduction;
