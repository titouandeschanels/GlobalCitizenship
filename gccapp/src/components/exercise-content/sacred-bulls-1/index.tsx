import React, { useState } from 'react';
import { StyledCardContent, TextBold } from '../elements';
import { Pink, Green, Orange, Blue, Purple } from '../../../colors';
import pink from '../../../assets/first-exercise/pink.png';
import green from '../../../assets/first-exercise/green.png';
import orange from '../../../assets/first-exercise/orange.png';
import blue from '../../../assets/first-exercise/blue.png';
import purple from '../../../assets/first-exercise/purple.png';
import { ButtonClicked, ButtonStyled, ExpandableButton, ExpandedContent } from './elements';

const SacredBullsOne: React.FC = () => {

    const cardData = [
        { color: Pink, image: pink, prompt: 'I come from a family...' },
        { color: Green, image: green, prompt: 'I come from an environment...' },
        { color: Orange, image: orange, prompt: 'I come from a culture that...', example: 'specify different cultures by\nrepeating this prompt'},
        { color: Blue, image: blue, prompt: 'I come from a background that...', example: 'ex. community, religion,\nupbringing, etc' },
        { color: Purple, image: purple, prompt: 'I feel...', example: 'ex. nationality, ethnicity'}
    ];
    const [isExpandedDutch, setIsExpandedDutch] = useState(false);
    const [isExpandedNonDutch, setIsExpandedNonDutch] = useState(false);
    const [clickedCards, setClickedCards] = useState(new Array(cardData.length).fill(false));

    const handleButtonClick = (index: number) => {
        const newClickedCards = [...clickedCards];
        newClickedCards[index] = true;
        setClickedCards(newClickedCards);
    };

    const handleExpandableButtonClick = (setExpanded: React.Dispatch<React.SetStateAction<boolean>>) => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <StyledCardContent>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h2>Sacred Bulls 1</h2>
                            <h4>Activity 1</h4>
                            <ExpandableButton onClick={() => handleExpandableButtonClick(setIsExpandedDutch)} style={{ height: isExpandedDutch ? '130px' : '40px' }}>
                                Dutch-Speakers
                                {isExpandedDutch && (
                                    <ExpandedContent>
                                        <TextBold>"Doe maar gewoon, doe maar normaal."</TextBold>
                                        <br />1. What does this expression mean to you?
                                        <br />2. How would you explain it to a non-Dutch speaker?
                                        <br />3. Which words come up when trying to explain it?
                                    </ExpandedContent>
                                )}
                            </ExpandableButton>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ExpandableButton onClick={() => handleExpandableButtonClick(setIsExpandedNonDutch)} style={{ height: isExpandedNonDutch ? '240px' : '40px' }}>
                                Non-Dutch Speakers
                                {isExpandedNonDutch && (
                                    <ExpandedContent>
                                        <TextBold>Find a well-known, common expression in your own language and culture that everybody uses which is accepted by everyone as "how are you expected to behave"</TextBold>
                                        <br />- Example: "hay que ser como a gente" which means "behave like people do".
                                        <br />- Other option: an expression that you have always heard at home, like "people are/should..."<br />
                                        <br />1. What does this expression mean to you?
                                        <br />2. How would you explain it to a foreigner?
                                        <br />3. Which words come up when trying to explain it?
                                    </ExpandedContent>
                                )}
                            </ExpandableButton>
                            <h4>Activity 2</h4>
                            <p>Flip the cards and complete the prompts behind the cards as related to your “I” positions.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style={{ display: 'flex' }}>
                                {cardData.map((card, index) => (
                                    <React.Fragment key={index}>
                                        {clickedCards[index] ? (
                                            <ButtonClicked style={{ borderColor: card.color }}>
                                                <h2>{card.prompt}</h2>
                                                {card.example && (
                                                    <p>{card.example}</p>
                                                )}
                                            </ButtonClicked>
                                        ) : (
                                            <ButtonStyled style={{ backgroundColor: card.color }} onClick={() => handleButtonClick(index)}>
                                                <img src={card.image} alt={card.color} />
                                            </ButtonStyled>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </StyledCardContent>
    );
}

export default SacredBullsOne;
