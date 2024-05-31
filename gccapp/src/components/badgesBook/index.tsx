import { useState } from 'react';
import { BookContainer, BookClosedImage, BookClosedButton, BookClosedTitle, BookOpenImage, BookOpenTitle, BookOpenContainerLeft, BookOpenLine, BookOpenButton, BookOpenContainerRight, BookOpenBadgeTitle, BookOpenBadgeDescription } from './elements';
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
            title: "This is me",
            description: "You have completed the This is me Badge, congratulations! You have learned about yourself.",
        },
        {
            badge: {Red},
            title: "Me and my circles",
            description: "You have completed the Me and my circles Badge, congratulations! You have learned about your family and friends.",
        },
        {
            badge: {Yellow},
            title: "The influence of perceptions",
            description: "You have completed the The influence of perceptions Badge, congratulations! You have learned about the importance of perceptions.",
        },
        {
            badge: {Green},
            title: "Dilemnas",
            description: "You have completed the Dilemnas Badge, congratulations! You have learned about dilemnas and how to solve them.",
        },
        {
            badge: {DarkGreen},
            title: "Challenge and Goal Setting",
            description: "You have completed the Challenge and Goal Setting Badge, congratulations! You have learned about setting goals and how to achieve them.",
        },
        {
            badge: {Blue},
            title: "Value-based challenge creation",
            description: "You have completed the Value-based challenge creation Badge, congratulations! You have learned about creating challenges based on your values.",
        }
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
                        <BookOpenBadgeDescription>
                            {badges[cuurentBadge].description}
                        </BookOpenBadgeDescription>
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
