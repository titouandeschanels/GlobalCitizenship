import { useState } from 'react';
import { BookContainer, BookClosedImage, BookClosedButton, BookClosedTitle, BookOpenImage, BookOpenTitle, BookOpenContainerLeft, BookOpenLine, BookOpenButton, BookOpenContainerRight, BookOpenBadgeTitle } from './elements';
import Blue from '../../assets/badges/blue.png';
import Red from '../../assets/badges/red.png';
import Yellow from '../../assets/badges/yellow.png';
import Green from '../../assets/badges/green.png';
import DarkGreen from '../../assets/badges/darkgreen.png';

const BadgesBook = () => {
    const [bookOpen, setBookOpen] = useState(false);

    const [badges, setBadges] = useState([
        {
            badge: {Blue},
            title: "Blue Badge",
            description: "You have",
        },
        {
            badge: {Red},
            title: "Red Badge",
            description: "You have",
        },
        {
            badge: {Yellow},
            title: "Yellow Badge",
            description: "You have",
        },
        {
            badge: {Green},
            title: "Green Badge",
            description: "You have",
        },
        {
            badge: {DarkGreen},
            title: "Dark Green Badge",
            description: "You have",
        },
    ]);

    const [cuurentBadge, setCurrentBadge] = useState(0);



    return (
        <BookContainer>
            {bookOpen ? (
                <BookOpenImage>
                    <BookOpenTitle>
                        Emma's Journey
                    </BookOpenTitle>

                    <BookOpenContainerLeft>
                        <BookOpenLine>
                            <BookOpenButton onClick={() => setCurrentBadge(0)}>
                                <img src={Blue} alt="Blue Badge" />
                            </BookOpenButton>
                            <BookOpenButton onClick={() => setCurrentBadge(1)}>
                                <img src={Red} alt="Red Badge" />
                            </BookOpenButton>
                            <BookOpenButton onClick={() => setCurrentBadge(2)}>
                                <img src={Yellow} alt="Yellow Badge" />
                            </BookOpenButton>
                        </BookOpenLine>
                        <BookOpenLine>
                            <BookOpenButton onClick={() => setCurrentBadge(3)}>
                                <img src={Green} alt="Green Badge" />
                            </BookOpenButton>
                            <BookOpenButton onClick={() => setCurrentBadge(4)}>
                                <img src={DarkGreen} alt="Dark Green Badge" />
                            </BookOpenButton>
                        </BookOpenLine>
                    </BookOpenContainerLeft>

                    <BookOpenContainerRight>
                        <BookOpenBadgeTitle>
                            {badges[cuurentBadge].title}
                        </BookOpenBadgeTitle>
                    </BookOpenContainerRight>

                </BookOpenImage>
            ) : (
                <BookClosedImage>
                    <BookClosedTitle>
                    <span dangerouslySetInnerHTML={{__html: "Emma's<br/>Global Citizenship<br/>Journey"}} />
                    </BookClosedTitle>
                    <BookClosedButton onClick={() => setBookOpen(true)} />
                </BookClosedImage>
            )}
        </BookContainer>
    );
}

export default BadgesBook;
