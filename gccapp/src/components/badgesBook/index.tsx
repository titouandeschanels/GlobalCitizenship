import { useState } from 'react';
import { BookContainer, BookClosedImage, BookClosedButton, BookClosedTitle, BookOpenImage, BookOpenTitle, BookOpenContainerLeft, BookOpenLine, BookOpenButton, BookOpenContainerRight, BookOpenBadgeTitle, BookOpenBadgeDescription, BookOpenBadgeImage } from './elements';
import BadgeModule1 from '../../assets/badges/badge-module1.png';
import BadgeModule2 from '../../assets/badges/badge-module2.png';
import BadgeModule3 from '../../assets/badges/badge-module3.png';
import BadgeModule4 from '../../assets/badges/badge-module4.png';
import BadgeModule5 from '../../assets/badges/badge-module5.png';
import BadgeModule6 from '../../assets/badges/badge-module6.png';

const BadgesBook = () => {
    const [bookOpen, setBookOpen] = useState(false);

    const [badges] = useState([
        {
            badge: BadgeModule1,
            title: "This is me",
            description: "You have completed the This is me Badge, congratulations! You have learned about yourself.",
        },
        {
            badge: BadgeModule2,
            title: "Me and my circles",
            description: "You have completed the Me and my circles Badge, congratulations! You have learned about your family and friends.",
        },
        {
            badge: BadgeModule3,
            title: "The influence of perceptions",
            description: "You have completed the The influence of perceptions Badge, congratulations! You have learned about the importance of perceptions.",
        },
        {
            badge: BadgeModule4,
            title: "Dilemnas",
            description: "You have completed the Dilemmas Badge, congratulations! You have learned about dilemnas and how to solve them.",
        },
        {
            badge: BadgeModule5,
            title: "Challenge and Goal Setting",
            description: "You have completed the Challenge and Goal Setting Badge, congratulations! You have learned about setting goals and how to achieve them.",
        },
        {
            badge: BadgeModule6,
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
                                <img src={BadgeModule1} alt="Badge Module 1" />
                            </BookOpenButton>
                            <BookOpenButton onClick={() => setCurrentBadge(1)}>
                                <img src={BadgeModule2} alt="Badge Module 2" />
                            </BookOpenButton>
                        </BookOpenLine>
                        <BookOpenLine>
                            <BookOpenButton onClick={() => setCurrentBadge(2)}>
                                <img src={BadgeModule3} alt="Badge Module 3" />
                            </BookOpenButton>
                            <BookOpenButton onClick={() => setCurrentBadge(3)}>
                                <img src={BadgeModule4} alt="Badge Module 4" />
                            </BookOpenButton>
                        </BookOpenLine>
                        <BookOpenLine>
                            <BookOpenButton onClick={() => setCurrentBadge(4)}>
                                <img src={BadgeModule5} alt="Badge Module 5" />
                            </BookOpenButton>
                            <BookOpenButton onClick={() => setCurrentBadge(5)}>
                                <img src={BadgeModule6} alt="Badge Module 6" />
                            </BookOpenButton>
                        </BookOpenLine>
                    </BookOpenContainerLeft>

                    <BookOpenContainerRight>
                        <BookOpenBadgeTitle>
                            {badges[cuurentBadge].title}
                        </BookOpenBadgeTitle>
                        <BookOpenBadgeImage src={badges[cuurentBadge].badge} alt="Badge" />
                        <BookOpenBadgeDescription>
                            {badges[cuurentBadge].description}
                        </BookOpenBadgeDescription>
                    </BookOpenContainerRight>

                </BookOpenImage>
            ) : (
                <BookClosedImage>
                    <BookClosedTitle>
                        <span dangerouslySetInnerHTML={{ __html: "Emma's<br/>Global Citizenship<br/>Journey" }} />
                    </BookClosedTitle>
                    <BookClosedButton onClick={() => setBookOpen(true)} />
                </BookClosedImage>
            )}
        </BookContainer>
    );
}

export default BadgesBook;
