import React, { useState } from 'react';
import { ButtonNavigate, StyledContainer, ButtonContainer, ButtonSubmissionPoint, Navigation as CurrentNavigation } from './elements';
import CreativeFrames from './creative-frames';
import SelfAwareness from './self-awareness';
import SacredBullsOne from './sacred-bulls-1';
import SacredBullsTwo from './sacred-bulls-2';
import GlobalCompetence from './global-competence-model';
import ArrowLeft from '../../assets/first-exercise/arrow-left.png';
import ArrowRight from '../../assets/first-exercise/arrow-right.png';
import { Link } from 'react-router-dom';

const Carousel: React.FC = () => {
    const cardLength: number = 5;
    const [currentCard, setCurrentCard] = useState<number>(0);

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

    return (
        <StyledContainer>
            <CurrentNavigation>
                Home {'>'} Journey {'>'} This is Me
            </CurrentNavigation>
            <h2>This is me</h2>
            <ButtonContainer>
                {currentCard !== 0 && (
                    <ButtonNavigate onClick={prevCard}>
                        <img src={ArrowLeft} alt="ArrowLeft" />
                    </ButtonNavigate>
                )}
                {cardContentComponent}
                {currentCard !== cardLength - 1 ? (
                    <ButtonNavigate onClick={nextCard}>
                        <img src={ArrowRight} alt="ArrowRight" />
                    </ButtonNavigate>
                ) : (
                    <Link to="/submission">
                        <ButtonSubmissionPoint>
                            <h3>Submission<br />Point</h3>
                            <p>Get your badge!</p>
                        </ButtonSubmissionPoint>
                    </Link>

                )}
            </ButtonContainer>
        </StyledContainer>
    );
}

export default Carousel;
