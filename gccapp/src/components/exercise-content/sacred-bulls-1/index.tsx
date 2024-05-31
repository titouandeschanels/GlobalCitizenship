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
        // state variables for managing component state
        const [isExpandedDutch, setIsExpandedDutch] = useState(false);
        const [isExpandedNonDutch, setIsExpandedNonDutch] = useState(false);
    
        const [pinkClickedState, setPinkClickedState] = useState(false);
        const [greenClickedState, setGreenClickedState] = useState(false);
        const [orangeClickedState, setOrangeClickedState] = useState(false);
        const [blueClickedState, setBlueClickedState] = useState(false);
        const [purpleClickedState, setPurpleClickedState] = useState(false);
    
        // Event handlers for expanding/collapsing content
        const handleDutchButtonClick = () => {
            setIsExpandedDutch(!isExpandedDutch);
        };
    
        const handleNonDutchButtonClick = () => {
            setIsExpandedNonDutch(!isExpandedNonDutch);
        };
    
        // Event handlers for handling card clicks
        const handlePinkCardClick = () => {
            setPinkClickedState(true);
        };
    
        const handleGreenCardClick = () => {
            setGreenClickedState(true);
        };
    
        const handleOrangeCardClick = () => {
            setOrangeClickedState(true);
        };
    
        const handleBlueCardClick = () => {
            setBlueClickedState(true);
        };
    
        const handlePurpleCardClick = () => {
            setPurpleClickedState(true);
        };

    return (
        <StyledCardContent>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h2>Sacred Bulls 1</h2>
                            <h4>Activity 1</h4>
                            <ExpandableButton onClick={handleDutchButtonClick} style={{ height: isExpandedDutch ? '130px' : '40px' }}>
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
                            <ExpandableButton onClick={handleNonDutchButtonClick} style={{ height: isExpandedNonDutch ? '240px' : '40px' }}>
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
                                {pinkClickedState ?
                                    <ButtonClicked style={{ borderColor: Pink }}>
                                        <h2>I come from a family...</h2>
                                    </ButtonClicked> :
                                    <ButtonStyled style={{ backgroundColor: Pink }} onClick={handlePinkCardClick}>
                                        <img src={pink} alt="pink" />
                                    </ButtonStyled>}
                                {greenClickedState ?
                                    <ButtonClicked style={{ borderColor: Green }}>
                                        <h2>I come from an<br />environment...</h2>
                                    </ButtonClicked> :
                                    <ButtonStyled style={{ backgroundColor: Green }} onClick={handleGreenCardClick}>
                                        <img src={green} alt="green" />
                                    </ButtonStyled>}
                                {orangeClickedState ?
                                    <ButtonClicked style={{ borderColor: Orange }}>
                                        <h2>I come from a<br />culture that...</h2>
                                        <p>specify different culture by<br />repeating this prompt</p>
                                    </ButtonClicked> :
                                    <ButtonStyled style={{ backgroundColor: Orange }} onClick={handleOrangeCardClick}>
                                        <img src={orange} alt="orange" />
                                    </ButtonStyled>}
                                {blueClickedState ?
                                    <ButtonClicked style={{ borderColor: Blue }}>
                                        <h2>I come from a<br />background that...</h2>
                                        <p>ex. community, religion,<br />upbringing, etc</p>
                                    </ButtonClicked> :
                                    <ButtonStyled style={{ backgroundColor: Blue }} onClick={handleBlueCardClick}>
                                        <img src={blue} alt="blue" />
                                    </ButtonStyled>}
                                {purpleClickedState ?
                                    <ButtonClicked style={{ borderColor: Purple }}>
                                        <h2>I feel...</h2>
                                        <p>ex. nationality, ethnicity</p>
                                    </ButtonClicked> :
                                    <ButtonStyled style={{ backgroundColor: Purple }} onClick={handlePurpleCardClick}>
                                        <img src={purple} alt="purple" />
                                    </ButtonStyled>}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </StyledCardContent>
    );
}

export default SacredBullsOne;