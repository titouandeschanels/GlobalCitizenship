import { useState } from 'react';
import { BadgesBookContainer, BookClosedImage, BookClosedButton, BookClosedTitle, BookOpenImage, BookOpenTitle, BookOpenBadgesContainerLeft, BookOpenBadgesLine, BookOpenBadgesButton } from './elements';
import Blue from '../../assets/badges/blue.png';
import Red from '../../assets/badges/red.png';
import Yellow from '../../assets/badges/yellow.png';
import Green from '../../assets/badges/green.png';
import DarkGreen from '../../assets/badges/darkgreen.png';

const BadgesBook = () => {
    const [bookOpen, setBookOpen] = useState(false);

    return (
        <BadgesBookContainer>
            {bookOpen ? (
                <BookOpenImage>
                    <BookOpenTitle>
                        Emma's Journey
                    </BookOpenTitle>
                    <BookOpenBadgesContainerLeft>
                        <BookOpenBadgesLine>
                            <BookOpenBadgesButton>
                                <img src={Blue} alt="Blue Badge" />
                            </BookOpenBadgesButton>
                            <BookOpenBadgesButton>
                                <img src={Red} alt="Red Badge" />
                            </BookOpenBadgesButton>
                            <BookOpenBadgesButton>
                                <img src={Yellow} alt="Yellow Badge" />
                            </BookOpenBadgesButton>
                        </BookOpenBadgesLine>
                        <BookOpenBadgesLine>
                            <BookOpenBadgesButton>
                                <img src={Green} alt="Green Badge" />
                            </BookOpenBadgesButton>
                            <BookOpenBadgesButton>
                                <img src={DarkGreen} alt="Dark Green Badge" />
                            </BookOpenBadgesButton>
                        </BookOpenBadgesLine>
                    </BookOpenBadgesContainerLeft>
                </BookOpenImage>
            ) : (
                <BookClosedImage>
                    <BookClosedTitle>
                    <span dangerouslySetInnerHTML={{__html: "Emma's<br/>Global Citizenship<br/>Journey"}} />
                    </BookClosedTitle>
                    <BookClosedButton onClick={() => setBookOpen(true)} />
                </BookClosedImage>
            )}
        </BadgesBookContainer>
    );
}

export default BadgesBook;
