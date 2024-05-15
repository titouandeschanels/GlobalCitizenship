import React, { useState } from 'react';
import { StyledContainer } from './elements';
import CreativeFrames from './creative-frames';
import SelfAwareness from './self-awareness';
import SacredBullsOne from './sacred-bulls-1';

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
    }


    return (
        <StyledContainer>
            <h2>This is me</h2>
            {cardContentComponent}
            <div>
                <button onClick={prevCard}>Back</button>
                <button onClick={nextCard}>Next</button>
            </div>
        </StyledContainer>
    );
}

export default Carousel;