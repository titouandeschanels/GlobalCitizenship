import { useEffect, useState } from 'react';
import { BookContainer, BookClosedImage, BookClosedButton, BookClosedTitle, BookOpenImage, BookOpenTitle, BookOpenContainerLeft, BookOpenLine, BookOpenButton, BookOpenContainerRight, BookOpenBadgeTitle, BookOpenBadgeDescription, BookOpenBadgeImage } from './elements';
import BadgeModule1 from '../../assets/badges/badge-module1.png';
import BadgeModule2 from '../../assets/badges/badge-module2.png';
import BadgeModule3 from '../../assets/badges/badge-module3.png';
import BadgeModule4 from '../../assets/badges/badge-module4.png';
import BadgeModule5 from '../../assets/badges/badge-module5.png';
import BadgeModule6 from '../../assets/badges/badge-module6.png';
import EmptyBadge from '../../assets/badges/empty-badge.png';

const BadgesBook = () => {
    const [bookOpen, setBookOpen] = useState(false);

    const [badges] = useState([
        {
            badge: BadgeModule1,
            title: "This is me",
            description: "You have completed the first milestone on your journey for the IDGs and earned the “This is me” badge.",
        },
        {
            badge: BadgeModule2,
            title: "Me and my circles",
            description: "You have completed the second milestone on your journey for the IDGs and earned the “Me and my circles” badge.",
        },
        {
            badge: BadgeModule3,
            title: "The influence of perceptions",
            description: "You have completed the third milestone on your journey for the IDGs and earned the “The influence of perceptions” badge.",
        },
        {
            badge: BadgeModule4,
            title: "Dilemnas",
            description: "You have completed the fourth milestone on your journey for the IDGs and earned the “Dilemnas” badge.",
        },
        {
            badge: BadgeModule5,
            title: "Challenge and Goal Setting",
            description: "You have completed the fifth milestone on your journey for the IDGs and earned the “Challenge and Goal Setting” badge.",
        },
        {
            badge: BadgeModule6,
            title: "Value-based challenge creation",
            description: "You have completed the sixth milestone on your journey for the IDGs and earned the “Value-based challenge creation” badge.",
        }
    ]);

    const [currentBadge, setCurrentBadge] = useState(0);
    const [fileUploads, setFileUploads] = useState(localStorage.getItem('fileUploads') || '0');

    useEffect(() => {
        if (!localStorage.getItem('fileUploads')) {
            localStorage.setItem('fileUploads', '0');
        }

        const handleStorageChange = () => {
            setFileUploads(localStorage.getItem('fileUploads') || '0');
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const parsedFileUploads = fileUploads ? JSON.parse(fileUploads) : [];

    return (
        <BookContainer>
            {bookOpen ? (
                <BookOpenImage>
                    <BookOpenTitle>
                        Marina's Journey
                    </BookOpenTitle>

                    <BookOpenContainerLeft>
                        <BookOpenLine>
                            <BookOpenButton onClick={() => setCurrentBadge(0)}>
                                <img src={parsedFileUploads[0]?.uploaded ? BadgeModule1 : EmptyBadge} alt="Badge Module 1" />
                            </BookOpenButton>
                            <BookOpenButton onClick={() => setCurrentBadge(1)}>
                                <img src={parsedFileUploads[1]?.uploaded ? BadgeModule2 : EmptyBadge} alt="Badge Module 2" />
                            </BookOpenButton>
                        </BookOpenLine>
                        <BookOpenLine>
                            <BookOpenButton onClick={() => setCurrentBadge(2)}>
                                <img src={parsedFileUploads[2]?.uploaded ? BadgeModule3 : EmptyBadge} alt="Badge Module 3" />
                            </BookOpenButton>
                            <BookOpenButton onClick={() => setCurrentBadge(3)}>
                                <img src={parsedFileUploads[3]?.uploaded ? BadgeModule4 : EmptyBadge} alt="Badge Module 4" />
                            </BookOpenButton>
                        </BookOpenLine>
                        <BookOpenLine>
                            <BookOpenButton onClick={() => setCurrentBadge(4)}>
                                <img src={parsedFileUploads[4]?.uploaded ? BadgeModule5 : EmptyBadge} alt="Badge Module 5" />
                            </BookOpenButton>
                            <BookOpenButton onClick={() => setCurrentBadge(5)}>
                                <img src={parsedFileUploads[5]?.uploaded ? BadgeModule6 : EmptyBadge} alt="Badge Module 6" />
                            </BookOpenButton>
                        </BookOpenLine>
                    </BookOpenContainerLeft>

                    <BookOpenContainerRight>
                        <BookOpenBadgeTitle>
                            {parsedFileUploads[currentBadge]?.uploaded ? badges[currentBadge].title : ""}
                        </BookOpenBadgeTitle>
                        <BookOpenBadgeImage src={parsedFileUploads[currentBadge]?.uploaded ? badges[currentBadge].badge : EmptyBadge} alt="Badge" />
                        <BookOpenBadgeDescription>
                            {parsedFileUploads[currentBadge]?.uploaded ? badges[currentBadge].description : "You haven't unlocked this badge yet."}
                        </BookOpenBadgeDescription>
                    </BookOpenContainerRight>

                </BookOpenImage>
            ) : (
                <BookClosedImage>
                    <BookClosedTitle>
                        <span dangerouslySetInnerHTML={{ __html: "Marina's<br/>Global Citizenship<br/>Journey" }} />
                    </BookClosedTitle>
                    <BookClosedButton onClick={() => setBookOpen(true)} />
                </BookClosedImage>
            )}
        </BookContainer>
    );
}

export default BadgesBook;
